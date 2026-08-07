import { PROJECTS_BY_NAME, type ProjectName } from "../content/projects";

function ProjectCard({
  projectName,
  onOpen,
}: {
  projectName: ProjectName;
  onOpen: () => void;
}) {
  const project = PROJECTS_BY_NAME[projectName];
  const hasCaseStudy = project.caseStudy !== null;

  return (
    <button
      type="button"
      aria-label={
        hasCaseStudy
          ? `Open ${project.name} case study`
          : `${project.name} case study coming soon`
      }
      className={`group relative aspect-19/16 overflow-hidden rounded-md bg-green-200 text-left ${
        hasCaseStudy ? "cursor-pointer" : "cursor-default"
      }`}
      disabled={!hasCaseStudy}
      onClick={hasCaseStudy ? onOpen : undefined}
    >
      {project.cardImage ? (
        <img
          src={project.cardImage.src}
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
        />
      ) : null}
      <div
        className={`pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-black/60 to-transparent transition-opacity duration-300 ${
          hasCaseStudy
            ? "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
            : "opacity-100"
        }`}
      />
      <span
        aria-hidden="true"
        className={`absolute bottom-4 left-4 flex flex-col text-white transition-opacity duration-300 ${
          hasCaseStudy
            ? "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
            : "opacity-100"
        }`}
      >
        {project.name}
        {!hasCaseStudy ? (
          <span className="text-sm">Case study coming soon</span>
        ) : null}
      </span>
    </button>
  );
}
export default ProjectCard;
