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
      className="group relative aspect-19/16 cursor-pointer overflow-hidden bg-green-200 text-left rounded-md"
      onClick={onOpen}
    >
      {project.cardImage ? (
        <img
          src={project.cardImage.src}
          alt={project.cardImage.alt}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
        />
      ) : null}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-15.5 bg-linear-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />
      <span className="absolute bottom-4 left-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
        {project.name}
      </span>
    </button>
  );
}
export default ProjectCard;
