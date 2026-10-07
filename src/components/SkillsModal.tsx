import { useEffect, useRef } from "react";
import type { IconType } from "react-icons";
import { FiX } from "react-icons/fi";
import {
  SiDocker,
  SiExpress,
  SiGithubactions,
  SiJest,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRedis,
  SiTerraform,
  SiTypescript,
} from "react-icons/si";
import { TbApi, TbArrowsExchange, TbBrandAws, TbBrandAzure } from "react-icons/tb";
import playwrightLogo from "../assets/technologies/playwright-logo.svg";

type Technology = { name: string; icon?: IconType; image?: string; color: string };

const SKILLS: { area: string; technologies: Technology[] }[] = [
  { area: "Frontend", technologies: [
    { name: "React", icon: SiReact, color: "bg-[#075985] text-[#67e8f9]" },
    { name: "TypeScript", icon: SiTypescript, color: "bg-[#3178c6] text-white" },
    { name: "Next.js", icon: SiNextdotjs, color: "bg-black text-white" },
  ] },
  { area: "Backend", technologies: [
    { name: "Node.js", icon: SiNodedotjs, color: "bg-[#339933] text-white" },
    { name: "Express", icon: SiExpress, color: "bg-[#f5f5f5] text-[#252526]" },
    { name: "REST APIs", icon: TbApi, color: "bg-[#315177] text-white" },
  ] },
  { area: "Data", technologies: [
    { name: "PostgreSQL", icon: SiPostgresql, color: "bg-[#4169e1] text-white" },
    { name: "MongoDB", icon: SiMongodb, color: "bg-[#00684a] text-white" },
    { name: "Redis", icon: SiRedis, color: "bg-[#d82c20] text-white" },
  ] },
  { area: "Cloud", technologies: [
    { name: "AWS", icon: TbBrandAws, color: "bg-[#ff9900] text-[#232f3e]" },
    { name: "Azure", icon: TbBrandAzure, color: "bg-[#0078d4] text-white" },
    { name: "Docker", icon: SiDocker, color: "bg-[#2496ed] text-white" },
    { name: "Terraform", icon: SiTerraform, color: "bg-[#7b42bc] text-white" },
  ] },
  { area: "Delivery", technologies: [
    { name: "GitHub Actions", icon: SiGithubactions, color: "bg-[#2088ff] text-white" },
    { name: "CI/CD", icon: TbArrowsExchange, color: "bg-[#4b5563] text-white" },
    { name: "Jest", icon: SiJest, color: "bg-[#99425b] text-white" },
    { name: "Playwright", image: playwrightLogo, color: "bg-white" },
  ] },
];

function SkillsModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const dialogRef = useRef<HTMLElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    if (!open) return;
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onCloseRef.current();
      }
      if (event.key !== "Tab" || !dialogRef.current) return;
      const elements = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(
        'button, [tabindex="0"]',
      ));
      const first = elements[0];
      const last = elements[elements.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus({ preventScroll: true });
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
      <button
        type="button"
        aria-label="Close skills"
        tabIndex={-1}
        className="absolute inset-0 cursor-pointer bg-[#111111]/80"
        onClick={onClose}
      />
      <section
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="skills-title"
        className="relative z-10 max-h-full w-full max-w-3xl overflow-y-auto rounded-xl border border-[#3c3c3c] bg-[#1e1e1e] p-5 shadow-2xl sm:p-8"
      >
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2 id="skills-title" className="text-white">Skills</h2>
          <button
            ref={closeRef}
            type="button"
            aria-label="Close skills"
            className="flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-full text-[#d4d4d4] transition-colors hover:bg-[#2a2d2e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            onClick={onClose}
          >
            <FiX className="size-5" aria-hidden="true" />
          </button>
        </div>
        <table className="w-full table-fixed border-collapse text-left">
          <thead>
            <tr className="border-b border-[#3c3c3c] text-xs uppercase tracking-wide text-[#a0a0a0]">
              <th scope="col" className="w-24 pb-3 font-semibold sm:w-32">Area</th>
              <th scope="col" className="pb-3 font-semibold">Technologies</th>
            </tr>
          </thead>
          <tbody>
            {SKILLS.map(({ area, technologies }) => (
              <tr key={area} className="border-b border-[#3c3c3c] last:border-0">
                <th scope="row" className="py-4 pr-3 align-top text-sm font-semibold text-white">{area}</th>
                <td className="py-3">
                  <ul className="flex flex-wrap gap-x-4 gap-y-2">
                    {technologies.map(({ name, icon: Icon, image, color }) => (
                      <li key={name}>
                        <span
                          tabIndex={0}
                          className="group/skill inline-flex items-center gap-2 rounded-md py-1 text-sm text-[#d4d4d4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                          <span className={`flex size-8 shrink-0 items-center justify-center rounded-full border-2 border-[#1e1e1e] p-1.5 transition-transform duration-150 group-hover/skill:scale-125 group-focus-visible/skill:scale-125 ${color}`}>
                            {Icon ? <Icon className="size-full" aria-hidden="true" /> : <img src={image} alt="" className="size-full object-contain" />}
                          </span>
                          {name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default SkillsModal;
