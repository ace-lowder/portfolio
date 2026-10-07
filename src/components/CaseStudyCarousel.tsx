import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import type { ProjectImage } from "../content/caseStudy";

const SLIDE_BUFFER = 16;
const LIGHT_SURFACE_THRESHOLD = 0.22;
const lightImageCache = new Map<string, boolean>();

function isLightImage(image: HTMLImageElement): boolean {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 48;
  const context = canvas.getContext("2d", { willReadFrequently: true });
  if (!context) return true;

  const targetRatio = canvas.width / canvas.height;
  const sourceRatio = image.naturalWidth / image.naturalHeight;
  const sourceWidth = sourceRatio > targetRatio
    ? image.naturalHeight * targetRatio
    : image.naturalWidth;
  const sourceHeight = sourceRatio > targetRatio
    ? image.naturalHeight
    : image.naturalWidth / targetRatio;

  try {
    context.fillStyle = "#252526";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.drawImage(
      image,
      (image.naturalWidth - sourceWidth) / 2,
      (image.naturalHeight - sourceHeight) / 2,
      sourceWidth,
      sourceHeight,
      0,
      0,
      canvas.width,
      canvas.height,
    );
    const pixels = context.getImageData(0, 0, canvas.width, canvas.height).data;
    const toLinear = (value: number) => {
      const channel = value / 255;
      return channel <= 0.04045
        ? channel / 12.92
        : ((channel + 0.055) / 1.055) ** 2.4;
    };
    let brightness = 0;
    for (let offset = 0; offset < pixels.length; offset += 4) {
      brightness +=
        0.2126 * toLinear(pixels[offset]) +
        0.7152 * toLinear(pixels[offset + 1]) +
        0.0722 * toLinear(pixels[offset + 2]);
    }
    return brightness / (pixels.length / 4) >= LIGHT_SURFACE_THRESHOLD;
  } catch {
    return true;
  }
}

function wrapIndex(index: number, length: number) {
  return ((index % length) + length) % length;
}

function CaseStudyCarousel({
  images,
  playing,
  onPreviewImage,
}: {
  images: readonly ProjectImage[];
  playing: boolean;
  onPreviewImage: (image: ProjectImage) => void;
}) {
  const [baseIndex, setBaseIndex] = useState(0);
  const [targetStep, setTargetStep] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [progressCycle, setProgressCycle] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [lightBySource, setLightBySource] = useState<Record<string, boolean>>({});
  const baseIndexRef = useRef(0);
  const targetStepRef = useRef(0);
  const normalizingRef = useRef(false);
  const normalizationFrameRef = useRef<number | null>(null);
  const imageSourcesKey = images.map((image) => image.src).join("\u0000");

  useEffect(() => {
    let cancelled = false;
    for (const source of new Set(imageSourcesKey.split("\u0000"))) {
      if (!source) continue;
      const cached = lightImageCache.get(source);
      if (cached !== undefined) {
        setLightBySource((current) => ({ ...current, [source]: cached }));
        continue;
      }

      const image = new Image();
      image.crossOrigin = "anonymous";
      image.onload = () => {
        const isLight = isLightImage(image);
        lightImageCache.set(source, isLight);
        if (!cancelled) {
          setLightBySource((current) => ({ ...current, [source]: isLight }));
        }
      };
      image.src = source;
    }
    return () => { cancelled = true; };
  }, [imageSourcesKey]);

  useEffect(() => () => {
    if (normalizationFrameRef.current !== null) {
      cancelAnimationFrame(normalizationFrameRef.current);
    }
  }, []);

  if (images.length === 0) return null;

  const move = (direction: -1 | 1) => {
    if (images.length < 2) return;
    const nextStep = targetStepRef.current + direction;
    targetStepRef.current = nextStep;
    if (!normalizingRef.current) setTargetStep(nextStep);
    setProgressCycle((cycle) => cycle + 1);
  };

  const finishTransition = () => {
    if (targetStepRef.current === 0 || normalizingRef.current) return;

    const settledStep = targetStepRef.current;
    baseIndexRef.current = wrapIndex(baseIndexRef.current + settledStep, images.length);
    targetStepRef.current = 0;
    normalizingRef.current = true;
    setTransitionEnabled(false);
    setBaseIndex(baseIndexRef.current);
    setTargetStep(0);

    normalizationFrameRef.current = requestAnimationFrame(() => {
      normalizingRef.current = false;
      setTransitionEnabled(true);
      setTargetStep(targetStepRef.current);
      normalizationFrameRef.current = null;
    });
  };

  const visibleIndex = wrapIndex(baseIndex + targetStep, images.length);
  const lightImage = lightBySource[images[visibleIndex].src] ?? true;
  const slideCount = SLIDE_BUFFER * 2 + 1;
  const controlsClass =
    "pointer-events-none absolute top-1/2 z-20 flex size-10 -translate-y-1/2 items-center justify-center rounded-full opacity-0 transition-[opacity,background-color,scale] duration-200 hover:scale-110 active:scale-95 group-hover/carousel:pointer-events-auto group-hover/carousel:opacity-100 group-focus-within/carousel:pointer-events-auto group-focus-within/carousel:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";
  const darkControls = "bg-[#1e1e1e] text-white hover:bg-[#252526] focus-visible:bg-[#252526]";
  const lightControls = "bg-white text-[#252526] hover:bg-[#e8e8e8] focus-visible:bg-[#e8e8e8]";

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Project screenshots"
      className="group/carousel relative aspect-4/3 overflow-hidden rounded-md bg-[#252526]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          move(-1);
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          move(1);
        }
      }}
    >
      <div
        className={`case-study-carousel-track absolute inset-y-0 left-0 flex ${transitionEnabled ? "" : "is-resetting"}`}
        style={{
          width: `${slideCount * 100}%`,
          transform: `translate3d(-${((SLIDE_BUFFER + targetStep) / slideCount) * 100}%, 0, 0)`,
        }}
        onTransitionEnd={(event) => {
          if (event.target === event.currentTarget && event.propertyName === "transform") {
            finishTransition();
          }
        }}
      >
        {Array.from({ length: slideCount }, (_, position) => {
          const image = images[wrapIndex(baseIndex + position - SLIDE_BUFFER, images.length)];
          return (
            <img
              key={position}
              src={image.src}
              alt=""
              loading="lazy"
              decoding="async"
              className="h-full shrink-0 object-cover object-center"
              style={{ width: `${100 / slideCount}%` }}
            />
          );
        })}
      </div>

      <button
        type="button"
        aria-label={`Expand image ${visibleIndex + 1} of ${images.length}: ${images[visibleIndex].alt}`}
        className="absolute inset-0 z-10 cursor-zoom-in focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-white"
        onClick={() => onPreviewImage(images[visibleIndex])}
      />

      {images.length > 1 ? (
        <>
          <button
            type="button"
            aria-label="Previous image"
            className={`${controlsClass} left-3 ${lightImage ? darkControls : lightControls}`}
            onClick={() => move(-1)}
          >
            <FiChevronLeft className="size-6" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next image"
            className={`${controlsClass} right-3 ${lightImage ? darkControls : lightControls}`}
            onClick={() => move(1)}
          >
            <FiChevronRight className="size-6" aria-hidden="true" />
          </button>

          <div
            role="status"
            aria-live="polite"
            className="pointer-events-none absolute bottom-4 left-0 right-0 z-20 flex items-center justify-center gap-2"
          >
            <span className="sr-only">Image {visibleIndex + 1} of {images.length}</span>
            {images.map((_, index) => (
              <span
                key={index}
                aria-hidden="true"
                className={`size-2 rounded-full transition-opacity duration-200 ${lightImage ? "bg-[#252526]" : "bg-white"} ${index === visibleIndex ? "opacity-100" : "opacity-40"}`}
              />
            ))}
          </div>

          <div className={`pointer-events-none absolute inset-x-0 bottom-0 z-20 h-1 ${lightImage ? "bg-[#252526]/25" : "bg-white/25"}`}>
            <div
              key={progressCycle}
              className={`case-study-carousel-progress h-full origin-left ${lightImage ? "bg-[#252526]" : "bg-white"}`}
              style={{
                animationPlayState:
                  playing && !hovered && !focused && targetStep === 0 ? "running" : "paused",
              }}
              onAnimationEnd={() => {
                if (targetStepRef.current === 0) move(1);
              }}
            />
          </div>
        </>
      ) : null}
    </div>
  );
}

export default CaseStudyCarousel;
