import { useEffect, useRef, useState } from "react";
import { FaStar } from "react-icons/fa";
import { FiGithub, FiLink } from "react-icons/fi";
import {
  PROJECTS_BY_NAME,
  type ProjectName,
  type ProjectType,
} from "../content/projects";

const PROJECT_TYPE_DOT_COLOR: Record<ProjectType, string> = {
  Work: "bg-red-500",
  Freelance: "bg-blue-500",
  Personal: "bg-green-500",
};

function ProjectCard({
  projectName,
  onOpen,
  isActive = false,
  highlighted = false,
  wide = false,
  short = false,
  stackedOnTablet = false,
}: {
  projectName: ProjectName;
  onOpen: () => void;
  isActive?: boolean;
  highlighted?: boolean;
  wide?: boolean;
  short?: boolean;
  stackedOnTablet?: boolean;
}) {
  const project = PROJECTS_BY_NAME[projectName];
  const isFeaturedWork = projectName === "OEM Calibrations";
  const cardRef = useRef<HTMLElement>(null);
  const wasActiveRef = useRef(isActive);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [suppressHover, setSuppressHover] = useState(false);

  const openCaseStudy = () => {
    setSuppressHover(true);
    onOpen();
  };

  useEffect(() => {
    if (wasActiveRef.current && !isActive && !cardRef.current?.matches(":hover")) {
      setSuppressHover(false);
    }
    wasActiveRef.current = isActive;
  }, [isActive]);

  return (
    <article
      ref={cardRef}
      onPointerLeave={() => {
        if (!isActive) setSuppressHover(false);
      }}
      className={`${isActive || suppressHover ? "" : "group hover:ring-2 hover:ring-white/70"} ${highlighted ? "ring-2 ring-white/70" : ""} relative ${short ? "aspect-[19/8] self-start" : "flex min-w-0 flex-col self-start"} ${stackedOnTablet ? "md:aspect-auto md:h-full md:min-h-0 xl:aspect-[19/8] xl:h-auto" : ""} ${wide ? "md:col-span-2" : ""} rounded-md text-left transition-shadow duration-200 has-[button:focus-visible]:z-30 has-[button:focus-visible]:outline-2 has-[button:focus-visible]:outline-offset-2 has-[button:focus-visible]:outline-white`}
    >
      <div
        className={`relative overflow-hidden ${short ? "h-full rounded-md" : `aspect-19/16 rounded-t-md ${wide ? "md:aspect-[5/2]" : ""}`} ${imageLoaded ? "" : "animate-pulse bg-[#2a2d2e]"}`}
      >
        <img
          src={project.cardImage.src}
          alt={project.cardImage.alt}
          loading="lazy"
          decoding="async"
          className="pointer-events-none absolute inset-0 size-full object-cover object-center"
          onLoad={() => setImageLoaded(true)}
        />
        <button
          type="button"
          aria-label={`Open ${project.name} case study`}
          aria-haspopup="dialog"
          className="absolute inset-0 z-10 cursor-pointer focus-visible:outline-none"
          onClick={openCaseStudy}
        />
        <span className="pointer-events-none absolute left-2.5 top-3 z-20 flex items-center gap-1.5 rounded-full bg-[#1e1e1e]/80 px-3 py-1 text-xs font-semibold text-white">
          {isFeaturedWork ? (
            <FaStar className="size-2.5 text-yellow-400" aria-hidden="true" />
          ) : (
            <span
              aria-hidden="true"
              className={`size-[7px] rounded-full ${PROJECT_TYPE_DOT_COLOR[project.projectType]}`}
            />
          )}
          {isFeaturedWork ? "Featured" : project.projectType}
        </span>
        {!short ? (
          <>
            <ul
              aria-label={`${project.name} core technologies`}
              className="pointer-events-none absolute inset-x-3 bottom-3 z-20 flex flex-wrap justify-end gap-1.5 transition-opacity duration-300 group-hover:opacity-0 group-focus-within:opacity-0 sm:hidden"
            >
              {project.cardTechnologies.map((technology) => (
                <li
                  key={technology}
                  className="whitespace-nowrap rounded-full border border-white/20 bg-[#1e1e1e]/85 px-2 py-1 text-[11px] font-medium leading-none text-white"
                >
                  {technology}
                </li>
              ))}
            </ul>
            <span
              tabIndex={0}
              aria-describedby={`highlight-${project.path.slice(1)}`}
              aria-label={`${project.cardHighlight.kind === "money" ? "Business result" : "Project fact"} for ${project.name}`}
              className="group/highlight absolute right-2.5 top-3 z-20 flex size-6 cursor-help items-center justify-center rounded-full bg-[#1e1e1e]/70 text-sm font-semibold text-[#d4d4d4] transition-colors hover:bg-[#252526] focus-visible:bg-[#252526] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {project.cardHighlight.kind === "money" ? (
                "$"
              ) : (
                <span className="font-serif text-sm font-bold italic leading-none" aria-hidden="true">
                  i
                </span>
              )}
              <span
                id={`highlight-${project.path.slice(1)}`}
                role="tooltip"
                className="pointer-events-none absolute right-0 top-[calc(100%+0.5rem)] w-60 rounded-md bg-[#252526] px-3 py-2 text-left text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-150 group-hover/highlight:opacity-100 group-focus/highlight:opacity-100"
              >
                {project.cardHighlight.text}
              </span>
            </span>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/50 via-black/30 via-50% to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100" />
            {project.githubUrl || project.liveUrl ? <nav
              aria-label={`${project.name} links`}
              className="pointer-events-none absolute bottom-4 left-4 z-20 flex flex-wrap justify-start gap-2 opacity-0 transition-opacity duration-300 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100"
            >
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View ${project.name} repository on GitHub`}
                      className="inline-flex h-9 items-center gap-2 rounded-full bg-white px-3 text-xs font-semibold text-[#1e1e1e] shadow-sm transition-colors hover:bg-[#d4d4d4] focus-visible:bg-[#d4d4d4]"
                    >
                      <FiGithub className="size-4" strokeWidth={2} aria-hidden="true" />
                      View Repo
                    </a>
                  ) : null}
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.name} ${project.liveUrlLabel ?? "website"} in a new tab`}
                      className="inline-flex h-9 items-center gap-2 rounded-full bg-white px-3 text-xs font-semibold text-[#1e1e1e] shadow-sm transition-colors hover:bg-[#d4d4d4] focus-visible:bg-[#d4d4d4]"
                    >
                      <FiLink className="size-4" strokeWidth={2} aria-hidden="true" />
                      {project.caseStudyAction?.label === "View Extension"
                        ? "View Extension"
                        : "View Site"}
                    </a>
                  ) : null}
            </nav> : null}
          </>
        ) : null}
      </div>
      {!short ? (
        <div className={`relative rounded-b-md border-x border-b px-4 py-3 transition-colors duration-200 group-hover:border-transparent group-focus-within:border-transparent ${highlighted ? "border-transparent" : "border-[#3c3c3c]"}`}>
          <button
            type="button"
            aria-label={`Open ${project.name} case study`}
            aria-haspopup="dialog"
            className="absolute inset-0 z-10 w-full cursor-pointer rounded-b-md focus-visible:outline-none"
            onClick={openCaseStudy}
          />
          <div className="flex items-center justify-between gap-3">
            <h2 className="min-w-0 self-end text-sm font-semibold text-white">
              {projectName === "Journal of Academic Inquiry"
                ? "Journal of Inquiry"
                : project.name}
            </h2>
            <ul
              aria-label={`${project.name} core technologies`}
              className="hidden max-w-[60%] shrink-0 flex-wrap justify-end gap-1.5 self-center sm:flex"
            >
              {project.cardTechnologies.map((technology) => (
                <li
                  key={technology}
                  className="whitespace-nowrap rounded-full border border-[#3c3c3c] bg-[#2a2d2e] px-2 py-1 text-[11px] font-medium leading-none text-[#d4d4d4]"
                >
                  {technology}
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-2 text-xs leading-snug text-[#a0a0a0]">
            {typeof project.subtitle === "string"
              ? project.subtitle
              : project.subtitle.map((segment, index) =>
                  segment.emphasis === "strong" ? (
                    <strong key={`${index}-${segment.text}`}>{segment.text}</strong>
                  ) : (
                    <span key={`${index}-${segment.text}`}>{segment.text}</span>
                  ),
                )}
          </p>
        </div>
      ) : null}
    </article>
  );
}

export default ProjectCard;
