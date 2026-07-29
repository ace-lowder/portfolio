const PROJECT_NAMES = [
  "UpdateTags",
  "DIFF",
  "Journal of Inquiry",
  "Instant Market Value",
] as const;

type ProjectName = (typeof PROJECT_NAMES)[number];

function ProjectCard({
  projectName,
  onOpen,
}: {
  projectName: ProjectName;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      className="group relative aspect-19/16 cursor-pointer overflow-hidden bg-green-200 text-left"
      onClick={onOpen}
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-15.5 bg-linear-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />
      <span className="absolute bottom-4 left-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
        {projectName}
      </span>
    </button>
  );
}

export { PROJECT_NAMES };
export type { ProjectName };
export default ProjectCard;
