import type { ProjectAtAGlance } from "../content/projects";

function CaseStudyAtAGlance({ details }: { details: ProjectAtAGlance }) {
  const items = [
    { label: "Type", value: details.type },
    { label: "Role", value: details.role },
    { label: "Dates", value: details.dates },
    { label: "Status", value: details.status },
    { label: "Contribution", value: details.contribution },
    { label: "Stack", value: details.stack.join(", ") },
  ];

  return (
    <section
      aria-label="At a glance"
      className="rounded-md border border-[#3c3c3c] p-4 min-[785px]:p-5 min-[1209px]:order-2 min-[1209px]:flex min-[1209px]:h-full min-[1209px]:flex-col"
    >
      <dl className="grid grid-cols-2 gap-x-5 gap-y-4 min-[785px]:grid-cols-3 min-[1209px]:flex min-[1209px]:flex-1 min-[1209px]:flex-col min-[1209px]:gap-5">
        {items.map(({ label, value }) => (
          <div key={label} className={`min-w-0 ${label === "Stack" ? "min-[1209px]:mt-auto" : ""}`}>
            <dt className="mb-1 text-xs font-semibold uppercase tracking-wide text-[#a0a0a0]">
              {label}
            </dt>
            <dd className="text-sm leading-snug text-white">{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export default CaseStudyAtAGlance;
