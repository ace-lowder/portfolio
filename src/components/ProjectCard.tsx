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
      className="group relative aspect-19/16 cursor-pointer overflow-hidden rounded-md bg-green-200 text-left"
      onClick={onOpen}
    >
      <img
        src={project.cardImage.src}
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />
      <span
        aria-hidden="true"
        className="absolute bottom-4 left-4 flex flex-col text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
      >
        {project.name}
      </span>
    </button>
  );
}
export default ProjectCard;
