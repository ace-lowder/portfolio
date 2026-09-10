import { useState } from "react";
import { FiGithub } from "react-icons/fi";
import { PiShareFat } from "react-icons/pi";
import { PROJECTS_BY_NAME, type ProjectName } from "../content/projects";

function ProjectCard({
  projectName,
  onOpen,
}: {
  projectName: ProjectName;
  onOpen: () => void;
}) {
  const project = PROJECTS_BY_NAME[projectName];
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <article
      className={`group relative aspect-19/16 overflow-hidden rounded-md text-left has-[button:focus-visible]:z-30 has-[button:focus-visible]:outline-2 has-[button:focus-visible]:outline-offset-2 has-[button:focus-visible]:outline-white ${imageLoaded ? "" : "animate-pulse bg-[#2a2d2e]"}`}
    >
      <img
        src={project.cardImage.src}
        alt=""
        loading="lazy"
        decoding="async"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
        onLoad={() => setImageLoaded(true)}
      />
      <button
        type="button"
        aria-label={`Open ${project.name} case study`}
        aria-haspopup="dialog"
        className="absolute inset-0 z-10 cursor-pointer focus-visible:outline-none"
        onClick={onOpen}
      />
      {project.projectType !== "Personal" && project.impactLabel ? (
        <span
          tabIndex={0}
          aria-describedby={`impact-${projectName}`}
          aria-label={`Project impact: ${project.impactLabel}`}
          className="group/impact absolute right-2.5 top-3 z-20 flex size-6 cursor-help items-center justify-center rounded-full bg-[#1e1e1e]/70 text-sm font-semibold text-[#d4d4d4] transition-colors hover:bg-[#252526] focus-visible:bg-[#252526] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          $
          <span
            id={`impact-${projectName}`}
            role="tooltip"
            className="pointer-events-none absolute right-0 top-[calc(100%+0.5rem)] w-max rounded-md bg-[#252526] px-3 py-2 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-150 group-hover/impact:opacity-100 group-focus-visible/impact:opacity-100"
          >
            {project.impactLabel}
          </span>
        </span>
      ) : null}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/50 via-black/30 via-50% to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-has-[a:focus-visible]:opacity-100" />
      <div className="pointer-events-none absolute inset-x-4 bottom-3.5 z-20 flex items-center justify-between gap-2 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-has-[a:focus-visible]:opacity-100">
        <span
          aria-hidden="true"
          className="min-w-0 flex-1 truncate text-sm font-semibold"
        >
          {project.name}
        </span>
        <nav
          aria-label={`${project.name} links`}
          className="pointer-events-auto flex shrink-0 gap-2"
        >
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${project.name} on GitHub`}
              className="inline-flex size-9 items-center justify-center rounded-full bg-white text-[#1e1e1e] transition-colors hover:bg-[#d4d4d4] focus-visible:bg-[#d4d4d4]"
            >
              <FiGithub className="size-4" strokeWidth={2} aria-hidden="true" />
            </a>
          ) : null}
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${project.name} ${project.liveUrlLabel ?? "website"} in a new tab`}
              className="inline-flex size-9 items-center justify-center rounded-full bg-white text-[#1e1e1e] transition-colors hover:bg-[#d4d4d4] focus-visible:bg-[#d4d4d4]"
            >
              <PiShareFat className="size-5" aria-hidden="true" />
            </a>
          ) : null}
        </nav>
      </div>
    </article>
  );
}
export default ProjectCard;
