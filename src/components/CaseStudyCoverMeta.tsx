import type { IconType } from "react-icons";
import { TbBrandAws, TbBrandOpenai, TbBrandVscode } from "react-icons/tb";
import nodemailerLogo from "../assets/technologies/nodemailer.png";
import mailerLiteLogo from "../assets/technologies/mailerlite.png";
import reactPdfLogo from "../assets/technologies/react-pdf.png";
import {
  SiCodemirror,
  SiCloudflare,
  SiDrizzle,
  SiExpress,
  SiFramer,
  SiGmail,
  SiJavascript,
  SiNextdotjs,
  SiNetlify,
  SiNodedotjs,
  SiPaypal,
  SiPostgresql,
  SiReact,
  SiReactrouter,
  SiRedux,
  SiResend,
  SiStripe,
  SiSupabase,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
  SiUpstash,
  SiVercel,
  SiVite,
  SiYoutube,
  SiZod,
} from "react-icons/si";
import type {
  CaseStudyAction,
  CaseStudyTechnology,
} from "../content/projects";

type TechnologyBadge = {
  icon?: IconType;
  image?: string;
  imageMode?: "cropped" | "full" | "mailerLite";
  color: string;
  initials?: string;
};

const TECHNOLOGY_BADGES: Record<string, TechnologyBadge> = {
  "Next.js": { icon: SiNextdotjs, color: "bg-black text-white" },
  TypeScript: { icon: SiTypescript, color: "bg-[#3178c6] text-white" },
  OpenAI: { icon: TbBrandOpenai, color: "bg-[#10a37f] text-white" },
  Supabase: { icon: SiSupabase, color: "bg-[#3ecf8e] text-white" },
  Stripe: { icon: SiStripe, color: "bg-[#635bff] text-white" },
  React: { icon: SiReact, color: "bg-[#075985] text-[#67e8f9]" },
  CodeMirror: { icon: SiCodemirror, color: "bg-[#d94f4f] text-white" },
  Nodemailer: {
    image: nodemailerLogo,
    imageMode: "cropped",
    color: "bg-[#1e1e1e]",
  },
  MailerLite: {
    image: mailerLiteLogo,
    imageMode: "mailerLite",
    color: "bg-white",
  },
  "Tailwind CSS": { icon: SiTailwindcss, color: "bg-[#0f172a] text-[#38bdf8]" },
  PayPal: { icon: SiPaypal, color: "bg-[#003087] text-white" },
  Gmail: { icon: SiGmail, color: "bg-[#ea4335] text-white" },
  "Node.js": { icon: SiNodedotjs, color: "bg-[#339933] text-white" },
  PostgreSQL: { icon: SiPostgresql, color: "bg-[#4169e1] text-white" },
  AWS: { icon: TbBrandAws, color: "bg-[#ff9900] text-[#232f3e]" },
  Express: { icon: SiExpress, color: "bg-[#f5f5f5] text-[#252526]" },
  "Framer Motion": { icon: SiFramer, color: "bg-black text-white" },
  Drizzle: { icon: SiDrizzle, color: "bg-[#c5f74f] text-[#252526]" },
  Zod: { icon: SiZod, color: "bg-[#1b1c1e] text-[#4b64c0]" },
  "React PDF": {
    image: reactPdfLogo,
    imageMode: "full",
    color: "bg-black",
  },
  Terraform: { icon: SiTerraform, color: "bg-[#7b42bc] text-white" },
  Vite: { icon: SiVite, color: "bg-[#646cff] text-white" },
  "VS Code": { icon: TbBrandVscode, color: "bg-[#007acc] text-white" },
  JavaScript: { icon: SiJavascript, color: "bg-[#f7df1e] text-[#252526]" },
  Upstash: { icon: SiUpstash, color: "bg-[#00e9a3] text-[#252526]" },
  Cloudflare: { icon: SiCloudflare, color: "bg-[#f38020] text-white" },
  Resend: { icon: SiResend, color: "bg-[#f5f5f5] text-[#252526]" },
  Vercel: { icon: SiVercel, color: "bg-black text-white" },
  Netlify: { icon: SiNetlify, color: "bg-[#00c7b7] text-white" },
  Redux: { icon: SiRedux, color: "bg-[#764abc] text-white" },
  YouTube: { icon: SiYoutube, color: "bg-[#ff0000] text-white" },
  "React Router": { icon: SiReactrouter, color: "bg-[#ca4245] text-white" },
};

function CaseStudyCoverMeta({
  action,
  technologies,
}: {
  action: CaseStudyAction;
  technologies: readonly CaseStudyTechnology[];
}) {
  return (
    <section
      aria-label="Project stack and action"
      className="flex flex-col gap-5 min-[785px]:flex-row min-[785px]:items-center min-[785px]:justify-between"
    >
      <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
        <p className="text-sm text-gray-300">Built using</p>
        <ul
          aria-label="Technologies used"
          className="flex max-w-full flex-wrap gap-y-1 [&>li]:-ml-2 [&>li:first-child]:ml-0"
        >
          {technologies.map((technology, index) => {
            const badge = TECHNOLOGY_BADGES[technology.name] ?? {
              color: "bg-[#4b5563] text-white",
              initials: technology.name.slice(0, 2),
            };
            const Icon = badge.icon;
            const tooltipId = `technology-${index}`;
            const tooltip = technology.role
              ? `${technology.name} (${technology.role})`
              : technology.name;

            return (
              <li key={tooltip} className="group/badge relative">
                <span
                  tabIndex={0}
                  aria-describedby={tooltipId}
                  aria-label={tooltip}
                  className={`flex size-8 items-center justify-center rounded-full border-2 border-[#1e1e1e] p-1.5 transition-transform duration-150 group-hover/badge:z-10 group-hover/badge:scale-125 group-has-[span:focus-visible]:z-10 group-has-[span:focus-visible]:scale-125 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${badge.color}`}
                >
                  {Icon ? (
                    <Icon aria-hidden="true" className="size-full" />
                  ) : badge.image ? (
                    badge.imageMode === "cropped" ? (
                      <span className="relative h-[0.625rem] w-full overflow-hidden">
                        <img
                          src={badge.image}
                          alt=""
                          className="absolute left-0 top-0 w-full max-w-none"
                        />
                      </span>
                    ) : badge.imageMode === "mailerLite" ? (
                      <span className="relative size-full overflow-hidden">
                        <img
                          src={badge.image}
                          alt=""
                          className="absolute left-[-200%] top-0 h-full max-w-none"
                        />
                      </span>
                    ) : (
                      <img
                        src={badge.image}
                        alt=""
                        className="size-full object-contain"
                      />
                    )
                  ) : (
                    <span className="text-[0.55rem] font-bold">
                      {badge.initials}
                    </span>
                  )}
                </span>
                <span
                  id={tooltipId}
                  role="tooltip"
                  className="pointer-events-none absolute bottom-[calc(100%+0.5rem)] left-1/2 z-20 w-max max-w-48 -translate-x-1/2 rounded-md bg-[#252526] px-3 py-2 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-150 group-hover/badge:opacity-100 group-has-[span:focus-visible]:opacity-100"
                >
                  {tooltip}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
      <a
        href={action.href}
        target="_blank"
        rel="noreferrer"
        className="inline-flex h-12 w-full items-center justify-center rounded-full bg-white px-5 text-xs font-semibold text-[#1e1e1e] transition-opacity hover:opacity-80 focus-visible:opacity-90 min-[785px]:w-auto"
      >
        {action.label}
      </a>
    </section>
  );
}

export default CaseStudyCoverMeta;
