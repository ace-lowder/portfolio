import aiOrNotCardImage from "../assets/case-studies/ai-or-not-card.png";
import diffCardImage from "../assets/case-studies/diff-card.png";
import instantMarketValueCardImage from "../assets/case-studies/instant-market-value-card.png";
import journalOfAcademicInquiryCardImage from "../assets/case-studies/journal-of-academic-inquiry-card.png";
import onTrackCardImage from "../assets/case-studies/on-track-card.png";
import prepPathwaysCardImage from "../assets/case-studies/prep-pathways-card.png";
import updateTagsCardImage from "../assets/case-studies/update-tags-card.png";
import {
  CASE_STUDY_METADATA,
  type ProjectName,
} from "./projectMetadata";
export type { ProjectName } from "./projectMetadata";
import {
  normal,
  strong,
  type CaseStudy,
  type CaseStudyTextSegment,
  type ProjectImage,
} from "./caseStudy";
import { aiOrNotCaseStudy } from "./case-studies/aiOrNot";
import { crashCaseStudy } from "./case-studies/crash";
import { diffCaseStudy } from "./case-studies/diff";
import { instantMarketValueCaseStudy } from "./case-studies/instantMarketValue";
import { journalOfAcademicInquiryCaseStudy } from "./case-studies/journalOfAcademicInquiry";
import { ncsMaterialsAuditCaseStudy } from "./case-studies/ncsMaterialsAudit";
import { oemCalibrationsCaseStudy } from "./case-studies/oemCalibrations";
import { onTrackCaseStudy } from "./case-studies/onTrack";
import { prepPathwaysCaseStudy } from "./case-studies/prepPathways";
import { updateTagsCaseStudy } from "./case-studies/updateTags";

export const PROJECT_NAMES = [
  "OEM Calibrations",
  "NCS Materials Audit",
  "Instant Market Value",
  "Crash",
  "UpdateTags",
  "On Track",
  "Journal of Academic Inquiry",
  "Prep Pathways",
  "Diff",
  "AI or Not",
] as const satisfies readonly ProjectName[];
export const COMPACT_PROJECT_NAMES = ["Diff", "AI or Not"] as const satisfies readonly ProjectName[];
export type ProjectType = "Personal" | "Freelance" | "Work";
export type ProjectStatus = "In development" | "Shipped" | "Deployed and maintained";
export type CaseStudyAction = {
  label: "View Live Site" | "View Extension";
  href: `http://${string}` | `https://${string}`;
};
export type CaseStudyTechnology = {
  name: string;
  role?: string;
};
export type ProjectAtAGlance = {
  type: string;
  role: string;
  dates: string;
  status: ProjectStatus;
  stack: readonly string[];
  contribution: string;
};
type CardHighlight = {
  kind: "money" | "info";
  text: string;
};
type ProjectSubtitle = string | readonly CaseStudyTextSegment[];

type ProjectMetadata = {
  name: ProjectName;
  path: `/${string}`;
  liveUrl?: `http://${string}` | `https://${string}`;
  liveUrlLabel?: string;
  githubUrl?: `https://github.com/${string}`;
  projectType: ProjectType;
  cardHighlight: CardHighlight;
  subtitle: ProjectSubtitle;
  caseStudyAction?: CaseStudyAction;
  caseStudyTechnologies: readonly CaseStudyTechnology[];
  atAGlance: ProjectAtAGlance;
  cardTechnologies: readonly string[];
  cardImage: ProjectImage;
  heroImages?: readonly ProjectImage[];
  caseStudy: CaseStudy;
};

export const PROJECTS_BY_NAME: Record<ProjectName, ProjectMetadata> = {
  "OEM Calibrations": {
    name: "OEM Calibrations",
    path: CASE_STUDY_METADATA["OEM Calibrations"].path,
    projectType: "Work",
    cardHighlight: {
      kind: "money",
      text: "$1M partner contract supported through engineering delivery.",
    },
    subtitle: [
      strong("repair-quoting platform"),
      normal(" for an automotive partner"),
    ],
    caseStudyTechnologies: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "AWS", role: "ECS/Fargate" },
      { name: "Terraform" },
      { name: "GitHub Actions" },
    ],
    cardTechnologies: ["Node.js", "AWS", "Terraform"],
    atAGlance: {
      type: "Production platform",
      role: "Backend and cloud engineer",
      dates: "Feb 2025–Sep 2026",
      status: "Deployed and maintained",
      stack: ["Node.js", "Express", "AWS", "Terraform"],
      contribution: "API architecture and deployment",
    },
    cardImage: {
      src: instantMarketValueCardImage,
      alt: "InstantMV automotive artwork used as a temporary image for OEM Calibrations.",
      caption: "Illustrative automotive artwork for the OEM repair-quoting project.",
    },
    caseStudy: oemCalibrationsCaseStudy,
  },
  "NCS Materials Audit": {
    name: "NCS Materials Audit",
    path: CASE_STUDY_METADATA["NCS Materials Audit"].path,
    projectType: "Work",
    cardHighlight: {
      kind: "money",
      text: "$200K+ in inventory and pricing discrepancies identified.",
    },
    subtitle: [
      strong("internal audit system"),
      normal(" for invoice reconciliation"),
    ],
    caseStudyTechnologies: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "Node.js" },
    ],
    cardTechnologies: ["React", "TypeScript", "Node.js"],
    atAGlance: {
      type: "Internal business tool",
      role: "Full-stack engineer",
      dates: "Oct 2024–Mar 2025",
      status: "Shipped",
      stack: ["React", "TypeScript", "Node.js"],
      contribution: "Invoice reconciliation system",
    },
    cardImage: {
      src: instantMarketValueCardImage,
      alt: "InstantMV automotive artwork used as a temporary image for NCS Materials Audit.",
      caption: "Illustrative automotive artwork for the materials audit project.",
    },
    caseStudy: ncsMaterialsAuditCaseStudy,
  },
  UpdateTags: {
    name: "UpdateTags",
    path: CASE_STUDY_METADATA.UpdateTags.path,
    liveUrl: "https://updatetags.com/",
    githubUrl: "https://github.com/ace-lowder/updatetags",
    projectType: "Personal",
    cardHighlight: {
      kind: "info",
      text: "Live SaaS with Stripe subscriptions, billing, and account-level usage limits.",
    },
    subtitle: [strong("saas"), normal(" for improving Etsy listings")],
    caseStudyAction: {
      label: "View Live Site",
      href: "https://updatetags.com/",
    },
    caseStudyTechnologies: [
      { name: "Next.js" },
      { name: "React" },
      { name: "TypeScript" },
      { name: "Node.js" },
      { name: "Tailwind CSS" },
      { name: "Supabase", role: "auth" },
      { name: "PostgreSQL" },
      { name: "OpenAI", role: "generation" },
      { name: "Stripe" },
      { name: "Upstash", role: "limits" },
      { name: "Cloudflare", role: "security" },
      { name: "Resend", role: "email" },
      { name: "Vercel" },
    ],
    cardTechnologies: ["Next.js", "PostgreSQL", "Stripe"],
    atAGlance: {
      type: "Independent SaaS",
      role: "Solo developer",
      dates: "Mar–Aug 2026",
      status: "Deployed and maintained",
      stack: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
      contribution: "Product, billing, and deployment",
    },
    cardImage: {
      src: updateTagsCardImage,
      alt: "Tagloom generating 13 search tags for a handmade ceramic mug.",
      caption: "Tag generator showing suggested search tags for a sample listing.",
    },
    caseStudy: updateTagsCaseStudy,
  },
  Diff: {
    name: "Diff",
    path: CASE_STUDY_METADATA.Diff.path,
    liveUrl: "https://diffedit.com/",
    githubUrl: "https://github.com/ace-lowder/diff",
    projectType: "Personal",
    cardHighlight: {
      kind: "info",
      text: "Drafts stay on the user's device; comparisons run entirely in the browser.",
    },
    subtitle: [strong("text editor"), normal(" for comparing drafts")],
    caseStudyAction: {
      label: "View Live Site",
      href: "https://diffedit.com/",
    },
    caseStudyTechnologies: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "Vite" },
      { name: "Tailwind CSS" },
      { name: "CodeMirror", role: "editor" },
      { name: "Netlify" },
    ],
    cardTechnologies: ["React", "TypeScript", "CodeMirror"],
    atAGlance: {
      type: "Independent web app",
      role: "Solo developer",
      dates: "May–Sep 2026",
      status: "Deployed and maintained",
      stack: ["React", "TypeScript", "CodeMirror"],
      contribution: "Comparison logic and editor",
    },
    cardImage: {
      src: diffCardImage,
      alt: "Diff comparing two drafts with highlighted text changes.",
      caption: "Side-by-side draft comparison with changes highlighted.",
    },
    caseStudy: diffCaseStudy,
  },
  "Journal of Academic Inquiry": {
    name: "Journal of Academic Inquiry",
    path: CASE_STUDY_METADATA["Journal of Academic Inquiry"].path,
    liveUrl: "https://journalofinquiry.org/",
    projectType: "Freelance",
    cardHighlight: {
      kind: "money",
      text: "$190K+ in customer purchases processed for this client.",
    },
    subtitle: [strong("website"), normal(" for academic journal client")],
    caseStudyAction: {
      label: "View Live Site",
      href: "https://journalofinquiry.org/",
    },
    caseStudyTechnologies: [
      { name: "Next.js" },
      { name: "React" },
      { name: "TypeScript" },
      { name: "Node.js" },
      { name: "Tailwind CSS" },
      { name: "PayPal" },
      { name: "Gmail" },
      { name: "Nodemailer", role: "email" },
      { name: "Netlify" },
    ],
    cardTechnologies: ["Next.js", "TypeScript", "PayPal"],
    atAGlance: {
      type: "Client web platform",
      role: "Sole developer",
      dates: "Aug 2024–Sep 2026",
      status: "Deployed and maintained",
      stack: ["Next.js", "TypeScript", "PayPal"],
      contribution: "Enrollment and payment flow",
    },
    cardImage: {
      src: journalOfAcademicInquiryCardImage,
      alt: "Journal of Academic Inquiry website on a laptop at a study desk.",
      caption: "The academic journal website displayed on a laptop.",
    },
    caseStudy: journalOfAcademicInquiryCaseStudy,
  },
  "Instant Market Value": {
    name: "Instant Market Value",
    path: CASE_STUDY_METADATA["Instant Market Value"].path,
    liveUrl: "https://www.instantmv.com/",
    projectType: "Work",
    cardHighlight: {
      kind: "money",
      text: "$31K+ in paid invoices across InstantMV and Diminished Value.",
    },
    subtitle: [strong("web app"), normal(" for vehicle valuation reports")],
    caseStudyAction: {
      label: "View Live Site",
      href: "https://www.instantmv.com/",
    },
    caseStudyTechnologies: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "Vite" },
      { name: "Tailwind CSS" },
      { name: "React Router" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "Zod" },
      { name: "PostgreSQL" },
      { name: "Drizzle", role: "ORM" },
      { name: "Stripe" },
      { name: "React PDF", role: "reports" },
      { name: "AWS", role: "hosting" },
      { name: "Terraform" },
    ],
    cardTechnologies: ["React", "Node.js", "AWS"],
    atAGlance: {
      type: "Production SaaS",
      role: "Lead full-stack engineer",
      dates: "Feb–Sep 2026",
      status: "Deployed and maintained",
      stack: ["React", "TypeScript", "Node.js", "AWS"],
      contribution: "End-to-end application delivery",
    },
    cardImage: {
      src: instantMarketValueCardImage,
      alt: "InstantMV vehicle valuation graphic in an auto repair shop.",
      caption: "Instant Market Value cover artwork for the vehicle valuation product.",
    },
    caseStudy: instantMarketValueCaseStudy,
  },
  Crash: {
    name: "Crash",
    path: CASE_STUDY_METADATA.Crash.path,
    projectType: "Work",
    cardHighlight: {
      kind: "info",
      text: "Maintained a production platform across billing, account access, and integrations.",
    },
    subtitle: [strong("production app"), normal(" for account and billing workflows")],
    caseStudyTechnologies: [
      { name: "React" },
      { name: "Node.js" },
      { name: "MongoDB" },
      { name: "Redis" },
      { name: "Salesforce" },
      { name: "Stripe" },
      { name: "Azure" },
      { name: "Jest", role: "integration tests" },
      { name: "Playwright", role: "end-to-end tests" },
    ],
    cardTechnologies: ["React", "Node.js", "Azure"],
    atAGlance: {
      type: "Production SaaS",
      role: "Full-stack engineer",
      dates: "Sep 2025–Sep 2026",
      status: "Deployed and maintained",
      stack: ["React", "Node.js", "MongoDB", "Azure"],
      contribution: "Production support and test coverage",
    },
    cardImage: {
      src: instantMarketValueCardImage,
      alt: "InstantMV automotive artwork used as a temporary image for Crash.",
      caption: "Illustrative automotive artwork; the Crash application interface is not shown.",
    },
    caseStudy: crashCaseStudy,
  },
  "AI or Not": {
    name: "AI or Not",
    path: CASE_STUDY_METADATA["AI or Not"].path,
    liveUrl: "https://aiornot.site/",
    githubUrl: "https://github.com/ace-lowder/ai-or-not",
    projectType: "Personal",
    cardHighlight: {
      kind: "info",
      text: "Caches real comments locally to reduce repeat API requests.",
    },
    subtitle: [strong("browser game"), normal(" for spotting fake YouTube comments")],
    caseStudyAction: {
      label: "View Live Site",
      href: "https://aiornot.site/",
    },
    caseStudyTechnologies: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "Vite" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion", role: "animation" },
      { name: "Redux", role: "state" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "PostgreSQL" },
      { name: "YouTube", role: "comments" },
      { name: "OpenAI", role: "generation" },
    ],
    cardTechnologies: ["React", "Express", "OpenAI"],
    atAGlance: {
      type: "Independent browser game",
      role: "Solo developer",
      dates: "Aug 2024–Sep 2026",
      status: "Shipped",
      stack: ["React", "Node.js", "PostgreSQL", "OpenAI"],
      contribution: "Game logic and AI integration",
    },
    cardImage: {
      src: aiOrNotCardImage,
      alt: "AI or Not logo with a cartoon robot on a dark background.",
      caption: "AI or Not game artwork and branding.",
    },
    caseStudy: aiOrNotCaseStudy,
  },
  "Prep Pathways": {
    name: "Prep Pathways",
    path: CASE_STUDY_METADATA["Prep Pathways"].path,
    liveUrl: "https://preppathways.net/",
    projectType: "Freelance",
    cardHighlight: {
      kind: "money",
      text: "25+ inbound inquiries generated; $35K in client sales supported.",
    },
    subtitle: [strong("website"), normal(" for tutoring & college prep client")],
    caseStudyAction: {
      label: "View Live Site",
      href: "https://preppathways.net/",
    },
    caseStudyTechnologies: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "Vite" },
      { name: "Tailwind CSS" },
      { name: "React Router" },
      { name: "Netlify" },
    ],
    cardTechnologies: ["React", "TypeScript", "Netlify"],
    atAGlance: {
      type: "Client website",
      role: "Designer and developer",
      dates: "Dec 2024–Apr 2026",
      status: "Deployed and maintained",
      stack: ["React", "TypeScript", "Netlify"],
      contribution: "Design, build, and updates",
    },
    cardImage: {
      src: prepPathwaysCardImage,
      alt: "Prep Pathways college counseling website shown across several pages.",
      caption: "Prep Pathways website shown across several service pages.",
    },
    caseStudy: prepPathwaysCaseStudy,
  },
  "On Track": {
    name: "On Track",
    path: CASE_STUDY_METADATA["On Track"].path,
    liveUrl:
      "https://marketplace.visualstudio.com/items?itemName=ace-lowder.on-track",
    liveUrlLabel: "extension in the Visual Studio Marketplace",
    githubUrl: "https://github.com/ace-lowder/on-track",
    projectType: "Personal",
    cardHighlight: {
      kind: "info",
      text: "Published VS Code extension that tracks active AI coding sessions.",
    },
    subtitle: [
      strong("vs code extension"),
      normal(" for tracking codex agents"),
    ],
    caseStudyAction: {
      label: "View Extension",
      href: "https://marketplace.visualstudio.com/items?itemName=ace-lowder.on-track",
    },
    caseStudyTechnologies: [
      { name: "VS Code" },
      { name: "Node.js" },
      { name: "JavaScript" },
    ],
    cardTechnologies: ["VS Code", "Node.js", "JavaScript"],
    atAGlance: {
      type: "Published VS Code extension",
      role: "Solo developer",
      dates: "Aug–Sep 2026",
      status: "Shipped",
      stack: ["VS Code", "Node.js", "JavaScript"],
      contribution: "End-to-end extension",
    },
    cardImage: {
      src: onTrackCardImage,
      alt: "On Track showing Codex agent statuses in the VS Code status bar.",
      caption: "On Track session indicators inside the VS Code status bar.",
    },
    caseStudy: onTrackCaseStudy,
  },
};

export function getProjectNameByPath(pathname: string): ProjectName | null {
  return (
    PROJECT_NAMES.find(
      (projectName) => PROJECTS_BY_NAME[projectName].path === pathname,
    ) ?? null
  );
}
