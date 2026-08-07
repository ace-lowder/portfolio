import {
  PROJECTS_BY_NAME,
  type ProjectName,
  type ProjectType,
} from "../content/projects";

const PROJECT_TYPE_STYLES: Record<ProjectType, string> = {
  Personal: "bg-green-600",
  Freelance: "bg-blue-600",
  Work: "bg-red-600",
};

function ProjectCard({
  projectName,
  showProjectType = false,
  onOpen,
}: {
  projectName: ProjectName;
  showProjectType?: boolean;
  onOpen: () => void;
}) {
  const project = PROJECTS_BY_NAME[projectName];

  return (
    <button
      type="button"
      aria-label={`Open ${project.name} case study`}
      aria-haspopup="dialog"
      className="group relative aspect-19/16 cursor-pointer overflow-hidden rounded-md bg-green-200 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      onClick={onOpen}
    >
      <img
        src={project.cardImage.src}
        alt=""
        decoding="async"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
      />
      {showProjectType ? (
        <span
          className={`absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-semibold text-white shadow-sm ${PROJECT_TYPE_STYLES[project.projectType]}`}
        >
          {project.projectType}
        </span>
      ) : null}
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
