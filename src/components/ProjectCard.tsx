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
      className={`group relative aspect-19/16 overflow-hidden rounded-md text-left ${imageLoaded ? "" : "animate-pulse bg-gray-100"}`}
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
        className="absolute inset-0 z-10 cursor-pointer focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
        onClick={onOpen}
      />
      {project.projectType !== "Personal" ? (
        <span
          aria-label="Paid project"
          className="pointer-events-none absolute right-2.5 top-3 z-20 flex size-6 items-center text-sm justify-center rounded-full bg-black/40 font-semibold text-white"
        >
          $
        </span>
      ) : null}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/40 via-black/20 via-50% to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100" />
      <div className="pointer-events-none absolute inset-x-4 bottom-3.5 z-20 flex items-center justify-between gap-2 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
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
              className="inline-flex size-9 items-center justify-center rounded-full bg-white text-black transition-colors hover:bg-gray-100 focus-visible:bg-gray-50"
            >
              <FiGithub className="size-4" strokeWidth={2} aria-hidden="true" />
            </a>
          ) : null}
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${project.name} website in a new tab`}
              className="inline-flex size-9 items-center justify-center rounded-full bg-white text-black transition-colors hover:bg-gray-100 focus-visible:bg-gray-50"
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
