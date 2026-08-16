import { useEffect, useRef } from "react";
import { FiX } from "react-icons/fi";
import ProjectCard from "./ProjectCard";
import {
  type CaseStudyParagraph,
  type CaseStudySection as CaseStudySectionData,
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
  const open = activeProject !== null;
  const activeProjectDetails = activeProject
    ? PROJECTS_BY_NAME[activeProject]
    : null;
  const caseStudy = activeProjectDetails?.caseStudy;
  const otherProjectNames = PROJECT_NAMES.filter(
    (projectName) => projectName !== activeProject,
  );

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
        onClose();
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
  }, [activeProject]);

  return (
    <>
      <button
        ref={desktopCloseButtonRef}
        type="button"
        aria-label="Close project case study"
        className={`group fixed inset-0 z-30 hidden cursor-pointer transition-colors duration-300 motion-reduce:transition-none min-[785px]:block ${
          open
            ? "pointer-events-auto bg-gray-900/70"
            : "pointer-events-none bg-transparent"
        }`}
        onClick={onClose}
      >
        <FiX
          className={`absolute right-4 top-3 size-6 text-white/60 transition-transform duration-300 ease-out motion-reduce:transition-none ${
            open
              ? "translate-y-0 hover:text-white group-focus-visible:text-white"
              : "translate-y-[calc(100vh-3rem)]"
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
        className={`fixed inset-x-0 bottom-0 top-0 z-40 overscroll-contain overflow-y-auto bg-white transition-transform duration-300 ease-out motion-reduce:transition-none min-[785px]:top-12 ${
          open
            ? "pointer-events-auto translate-y-0"
            : "pointer-events-none translate-y-full"
        }`}
      >
        <header className="sticky top-0 z-10 bg-white">
          <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-8 py-8 min-[785px]:w-3xl min-[785px]:max-w-none min-[1209px]:w-full min-[1209px]:max-w-5xl">
            <div className="flex min-w-0 flex-1 flex-col gap-1 min-[785px]:flex-row min-[785px]:items-center min-[785px]:justify-between min-[785px]:gap-8">
              <h1 id="case-study-title">{activeProjectDetails?.name}</h1>
              <p className="text-gray-500 min-[785px]:text-right">
                {activeProjectDetails?.subtitle}
              </p>
            </div>
            <button
              ref={mobileCloseButtonRef}
              type="button"
              aria-label="Close project case study"
              className="shrink-0 cursor-pointer self-start text-black/60 hover:text-black min-[785px]:hidden"
              onClick={onClose}
            >
              <FiX className="size-6" />
            </button>
          </div>
        </header>

        <div className="mx-auto flex w-full max-w-5xl flex-col gap-12 px-8 pb-12 min-[785px]:w-3xl min-[785px]:max-w-none min-[1209px]:w-full min-[1209px]:max-w-5xl">
          {activeProjectDetails ? (
            <img
              src={activeProjectDetails.cardImage.src}
              alt={activeProjectDetails.cardImage.alt}
              decoding="async"
              className="block w-full rounded-md"
            />
          ) : null}
          {caseStudy ? (
            caseStudy.sections.map((section) => (
              <CaseStudySection key={section.id} section={section} />
            ))
          ) : null}

          {otherProjectNames.length > 0 ? (
            <section
              aria-labelledby="more-projects-heading"
              className="hidden pt-18 min-[785px]:block"
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
    </>
  );
}

export default CaseStudyPanel;

function CaseStudySection({
  section,
}: {
  section: CaseStudySectionData;
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
                />
              ))}
            </div>
          ))}
        </section>
      );
    case "content":
      return (
        <section className="space-y-6">
          <div className="space-y-4">
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph, index) => (
              <CaseStudyParagraph
                key={`${section.id}-paragraph-${index}`}
                paragraph={paragraph}
              />
            ))}
            {section.bullets.length > 0 ? (
              <ul className="list-disc space-y-2 pl-6 leading-7 text-gray-700">
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}
          </div>
          {section.image ? (
            <img
              src={section.image.src}
              alt={section.image.alt}
              loading="lazy"
              decoding="async"
              className="block w-full rounded-md"
            />
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
                <dd className="leading-6 text-gray-700">
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
}: {
  paragraph: CaseStudyParagraph;
}) {
  return (
    <p className="leading-7 text-gray-700">
      {paragraph.segments.map((segment, index) =>
        segment.emphasis === "strong" ? (
          <strong key={`${index}-${segment.text}`}>{segment.text}</strong>
        ) : (
          <span key={`${index}-${segment.text}`}>{segment.text}</span>
        ),
      )}
    </p>
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
