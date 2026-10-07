import type { ProjectName } from "../content/projects";

const IMPACT_ITEMS: {
  amount: string;
  description: string;
  projectName: ProjectName;
}[] = [
  {
    amount: "$1M",
    description: "Partner contract supported through engineering delivery",
    projectName: "OEM Calibrations",
  },
  {
    amount: "$200K+",
    description: "Inventory and pricing discrepancies identified",
    projectName: "NCS Materials Audit",
  },
  {
    amount: "3",
    description: "Revenue-generating SaaS products launched",
    projectName: "Instant Market Value",
  },
];

function ProfessionalImpact({
  onOpenProject,
  onHighlightProject,
}: {
  onOpenProject: (projectName: ProjectName) => void;
  onHighlightProject: (projectName: ProjectName | null) => void;
}) {
  return (
    <section
      aria-label="Professional impact"
      className="grid w-full gap-3 border-t border-[#3c3c3c] pt-8 sm:grid-cols-3"
    >
      {IMPACT_ITEMS.map(({ amount, description, projectName }) => (
        <button
          key={projectName}
          type="button"
          aria-label={`${amount}: ${description}. Open ${projectName} case study`}
          className="h-full cursor-pointer rounded-md border border-[#3c3c3c] p-4 text-left transition-shadow duration-200 hover:border-transparent hover:ring-2 hover:ring-white/70 focus-visible:border-transparent focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:outline-none"
          onPointerEnter={() => onHighlightProject(projectName)}
          onPointerLeave={() => onHighlightProject(null)}
          onFocus={() => onHighlightProject(projectName)}
          onBlur={() => onHighlightProject(null)}
          onClick={() => {
            onHighlightProject(null);
            onOpenProject(projectName);
          }}
        >
          <span className="block text-2xl font-bold text-white">{amount}</span>
          <span className="mt-1 block text-sm text-[#d4d4d4]">
            {description}
          </span>
        </button>
      ))}
    </section>
  );
}

export default ProfessionalImpact;
