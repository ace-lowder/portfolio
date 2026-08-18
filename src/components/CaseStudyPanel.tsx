import { useEffect, useRef, useState } from "react";
import { FiX } from "react-icons/fi";
import CaseStudyCoverMeta from "./CaseStudyCoverMeta";
import ProjectCard from "./ProjectCard";
import {
  type CaseStudyParagraph,
  type CaseStudySection as CaseStudySectionData,
  type CaseStudyTextSegment,
} from "../content/caseStudy";
import {
  PROJECT_NAMES,
  PROJECTS_BY_NAME,
  type ProjectName,
} from "../content/projects";

function CaseStudyPanel({
  activeProject,
  onOpenProject,
  onClose,
}: {
  activeProject: ProjectName | null;
  onOpenProject: (projectName: ProjectName) => void;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLElement>(null);
  const desktopCloseButtonRef = useRef<HTMLButtonElement>(null);
  const mobileCloseButtonRef = useRef<HTMLButtonElement>(null);
  const previewCloseButtonRef = useRef<HTMLButtonElement>(null);
  const previewImageRef = useRef<{ src: string; alt: string } | null>(null);
  const [previewImage, setPreviewImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);
  const open = activeProject !== null;
  const activeProjectDetails = activeProject
    ? PROJECTS_BY_NAME[activeProject]
    : null;
  const caseStudy = activeProjectDetails?.caseStudy;
  const otherProjectNames = PROJECT_NAMES.filter(
    (projectName) => projectName !== activeProject,
  );

  useEffect(() => {
    previewImageRef.current = previewImage;
  }, [previewImage]);

  useEffect(() => {
    if (previewImage) previewCloseButtonRef.current?.focus();
  }, [previewImage]);

  useEffect(() => {
    if (!open) return;

    const previouslyFocusedElement =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    focusVisibleCloseButton(
      desktopCloseButtonRef.current,
      mobileCloseButtonRef.current,
    );

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        if (previewImageRef.current) {
          setPreviewImage(null);
        } else {
          onClose();
        }
        return;
      }

      if (event.key === "Tab" && previewImageRef.current) {
        event.preventDefault();
        previewCloseButtonRef.current?.focus();
        return;
      }

      if (event.key === "Tab" && panelRef.current) {
        keepFocusInsideCaseStudy(
          event,
          panelRef.current,
          desktopCloseButtonRef.current,
        );
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocusedElement?.focus();
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!activeProject) return;

    panelRef.current?.scrollTo({ top: 0 });
    setPreviewImage(null);
  }, [activeProject]);

  return (
    <>
      <button
        ref={desktopCloseButtonRef}
        type="button"
        aria-label="Close project case study"
        className={`group fixed inset-0 z-30 hidden cursor-pointer transition-colors duration-300 motion-reduce:transition-none min-[785px]:block ${
          open
            ? "pointer-events-auto bg-[#111111]/70"
            : "pointer-events-none bg-transparent"
        }`}
        onClick={onClose}
      >
        <FiX
          className={`absolute right-4 top-3 size-6 text-white transition-[transform,opacity] duration-300 ease-out motion-reduce:transition-none ${
            open
              ? "translate-y-0 opacity-100"
              : "translate-y-[calc(100vh-3rem)] opacity-0"
          }`}
        />
      </button>
      <section
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        inert={!open}
        aria-labelledby="case-study-title"
        className={`fixed inset-x-0 bottom-0 top-0 z-40 overscroll-contain overflow-y-auto bg-[#1e1e1e] transition-transform duration-300 ease-out motion-reduce:transition-none min-[785px]:top-12 ${
          open
            ? "pointer-events-auto translate-y-0"
            : "pointer-events-none translate-y-full"
        }`}
      >
        <header className="sticky top-0 z-10 bg-[#1e1e1e]">
          <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-8 py-6 min-[785px]:w-3xl min-[785px]:max-w-none min-[1209px]:w-full min-[1209px]:max-w-5xl">
            <div className="flex min-w-0 flex-1 flex-col gap-1 min-[785px]:flex-row min-[785px]:items-center min-[785px]:justify-between min-[785px]:gap-8">
              <h1 id="case-study-title" className="text-white">
                {activeProjectDetails?.name}
              </h1>
              <p className="text-[#a0a0a0] min-[785px]:text-right">
                {renderSubtitle(activeProjectDetails?.subtitle)}
              </p>
            </div>
            <button
              ref={mobileCloseButtonRef}
              type="button"
              aria-label="Close project case study"
              className="shrink-0 cursor-pointer self-start text-[#d4d4d4]/60 hover:text-[#d4d4d4] min-[785px]:hidden"
              onClick={onClose}
            >
              <FiX className="size-6" />
            </button>
          </div>
        </header>

        <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-8 pb-24 min-[785px]:w-3xl min-[785px]:max-w-none min-[1209px]:w-full min-[1209px]:max-w-5xl">
          {activeProjectDetails ? (
            <div className="space-y-6">
              <div className="aspect-4/3 overflow-hidden rounded-md">
                <img
                  src={activeProjectDetails.cardImage.src}
                  alt={activeProjectDetails.cardImage.alt}
                  decoding="async"
                  className="block size-full object-cover object-center"
                />
              </div>
              <CaseStudyCoverMeta
                action={activeProjectDetails.caseStudyAction}
                technologies={activeProjectDetails.caseStudyTechnologies}
              />
            </div>
          ) : null}
          {caseStudy
            ? caseStudy.sections.map((section) => (
                <CaseStudySection
                  key={section.id}
                  section={section}
                  onPreviewImage={setPreviewImage}
                />
              ))
            : null}

          {otherProjectNames.length > 0 ? (
            <section
              aria-labelledby="more-projects-heading"
              className="hidden pt-20 min-[785px]:block"
            >
              <h2 id="more-projects-heading" className="mb-6">
                More projects
              </h2>
              <div className="grid grid-cols-3 gap-6 min-[1209px]:gap-8">
                {otherProjectNames.map((projectName) => (
                  <ProjectCard
                    key={projectName}
                    projectName={projectName}
                    onOpen={() => onOpenProject(projectName)}
                  />
                ))}
              </div>
            </section>
          ) : null}
        </div>
      </section>
      {previewImage ? (
        <section
          role="dialog"
          aria-modal="true"
          aria-label="Expanded impact image"
          className="fixed inset-0 z-50 flex items-center justify-center p-6 min-[785px]:p-12"
        >
          <button
            type="button"
            aria-label="Close expanded image"
            tabIndex={-1}
            className="absolute inset-0 cursor-pointer bg-[#111111]/90"
            onClick={() => setPreviewImage(null)}
          />
          <div className="relative z-10 max-h-full max-w-full scale-90">
            <img
              src={previewImage.src}
              alt={previewImage.alt}
              className="block max-h-[calc(100vh-3rem)] max-w-full rounded-md object-contain min-[785px]:max-h-[calc(100vh-6rem)]"
            />
            <button
              type="button"
              ref={previewCloseButtonRef}
              aria-label="Close expanded image"
              className="absolute right-3 top-3 flex size-9 cursor-pointer items-center justify-center rounded-full bg-[#1e1e1e]/90 text-white transition-colors hover:bg-[#252526] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              onClick={() => setPreviewImage(null)}
            >
              <FiX className="size-5" />
            </button>
          </div>
        </section>
      ) : null}
    </>
  );
}

export default CaseStudyPanel;

function CaseStudySection({
  section,
  onPreviewImage,
}: {
  section: CaseStudySectionData;
  onPreviewImage: (image: { src: string; alt: string }) => void;
}) {
  switch (section.type) {
    case "split":
      return (
        <section className="grid gap-8 min-[785px]:grid-cols-[3fr_2fr]">
          {section.columns.map((column) => (
            <div key={column.heading} className="space-y-4">
              <h2>{column.heading}</h2>
              {column.paragraphs.map((paragraph, index) => (
              <CaseStudyParagraph
                key={`${column.heading}-${index}`}
                paragraph={paragraph}
                onPreviewImage={onPreviewImage}
              />
              ))}
            </div>
          ))}
        </section>
      );
    case "content":
      return (
        <section
          className={
            section.imageLayout === "float-left" ? "flow-root" : "space-y-6"
          }
        >
          <div
            className={
              section.imageLayout === "float-left" ? "flow-root" : "space-y-4"
            }
          >
            {section.image && section.imageLayout === "float-left" ? (
              <button
                type="button"
                aria-label={`Expand ${section.image.alt}`}
                className="mb-5 block w-full cursor-zoom-in rounded-md max-[784px]:float-none min-[785px]:float-left min-[785px]:mb-4 min-[785px]:mr-6 min-[785px]:w-1/2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                onClick={() => onPreviewImage(section.image!)}
              >
                <img
                  src={section.image.src}
                  alt={section.image.alt}
                  loading="lazy"
                  decoding="async"
                  className="block w-full rounded-md"
                />
              </button>
            ) : null}
            {section.heading ? <h2>{section.heading}</h2> : null}
            {section.paragraphs.map((paragraph, index) => (
              <CaseStudyParagraph
                key={`${section.id}-paragraph-${index}`}
                paragraph={paragraph}
                onPreviewImage={onPreviewImage}
              />
            ))}
            {section.bullets.length > 0 ? (
              <ul className="list-disc space-y-2 pl-6 leading-7 text-gray-300">
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}
          </div>
          {section.image && section.imageLayout !== "float-left" ? (
            <button
              type="button"
              aria-label={`Expand ${section.image.alt}`}
              className="block w-full cursor-zoom-in rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              onClick={() => onPreviewImage(section.image!)}
            >
              <img
                src={section.image.src}
                alt={section.image.alt}
                loading="lazy"
                decoding="async"
                className="block w-full rounded-md"
              />
            </button>
          ) : null}
        </section>
      );
    case "details":
      return (
        <section className="space-y-6">
          <h2>{section.heading}</h2>
          <dl className="grid gap-8 min-[785px]:grid-cols-3">
            {section.items.map((item) => (
              <div key={item.label} className="space-y-1">
                <dt className="font-bold">{item.label}</dt>
                <dd className="leading-6 text-gray-300">
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium underline underline-offset-4"
                    >
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      );
  }
}

function CaseStudyParagraph({
  paragraph,
  onPreviewImage,
}: {
  paragraph: CaseStudyParagraph;
  onPreviewImage: (image: { src: string; alt: string }) => void;
}) {
  return (
    <p className="leading-7 text-gray-300">
      {paragraph.segments.map((segment, index) =>
        segment.previewImage ? (
          <button
            key={`${index}-${segment.text}`}
            type="button"
            className="cursor-zoom-in underline underline-offset-4 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            aria-label={`View ${segment.text} sales dashboard`}
            onClick={() => onPreviewImage(segment.previewImage!)}
          >
            {segment.text}
          </button>
        ) : segment.emphasis === "strong" ? (
          <strong key={`${index}-${segment.text}`}>{segment.text}</strong>
        ) : (
          <span key={`${index}-${segment.text}`}>{segment.text}</span>
        ),
      )}
    </p>
  );
}

function renderSubtitle(
  subtitle: string | readonly CaseStudyTextSegment[] | undefined,
) {
  if (typeof subtitle === "string" || !subtitle) return subtitle;

  return subtitle.map((segment, index) =>
    segment.emphasis === "strong" ? (
      <strong key={`${index}-${segment.text}`}>{segment.text}</strong>
    ) : (
      <span key={`${index}-${segment.text}`}>{segment.text}</span>
    ),
  );
}

function focusVisibleCloseButton(
  desktopCloseButton: HTMLButtonElement | null,
  mobileCloseButton: HTMLButtonElement | null,
) {
  const closeButton = [desktopCloseButton, mobileCloseButton].find(
    (button) => button?.offsetParent !== null,
  );
  closeButton?.focus();
}

function keepFocusInsideCaseStudy(
  event: KeyboardEvent,
  panel: HTMLElement,
  desktopCloseButton: HTMLButtonElement | null,
) {
  const panelElements = Array.from(
    panel.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    ),
  ).filter((element) => element.offsetParent !== null);
  const focusableElements =
    desktopCloseButton?.offsetParent !== null
      ? [desktopCloseButton, ...panelElements]
      : panelElements;
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  if (!firstElement || !lastElement) return;

  if (event.shiftKey && document.activeElement === firstElement) {
    event.preventDefault();
    lastElement.focus();
    return;
  }

  if (!event.shiftKey && document.activeElement === lastElement) {
    event.preventDefault();
    firstElement.focus();
  }
}
