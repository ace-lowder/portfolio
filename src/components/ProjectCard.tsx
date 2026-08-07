import { PROJECTS_BY_NAME, type ProjectName } from "../content/projects";

function ProjectCard({
  projectName,
  onOpen,
}: {
  projectName: ProjectName;
  onOpen: () => void;
}) {
  const project = PROJECTS_BY_NAME[projectName];

  return (
    <button
      type="button"
      aria-label={`Open ${project.name} case study`}
      aria-haspopup="dialog"
      className="relative aspect-19/16 cursor-pointer overflow-hidden rounded-md bg-green-200 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      onClick={onOpen}
    >
      <img
        src={project.cardImage.src}
        alt=""
        decoding="async"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-black/70 to-transparent" />
      <span
        aria-hidden="true"
        className="absolute bottom-4 left-4 flex flex-col font-medium text-white"
      >
        {project.name}
      </span>
    </button>
  );
}
export default ProjectCard;
