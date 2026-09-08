import aiOrNotCardImage from "../assets/case-studies/ai-or-not/card.png";
import diffCardImage from "../assets/case-studies/diff/card.png";
import instantMarketValueCardImage from "../assets/case-studies/instant-market-value/card.png";
import journalOfAcademicInquiryCardImage from "../assets/case-studies/journal-of-academic-inquiry/card.png";
import onTrackCardImage from "../assets/case-studies/on-track/card.png";
import prepPathwaysCardImage from "../assets/case-studies/prep-pathways/card.png";
import updateTagsCardImage from "../assets/case-studies/update-tags/card.png";
import {
  normal,
  strong,
  type CaseStudy,
  type CaseStudyTextSegment,
  type ProjectImage,
} from "./caseStudy";
import { aiOrNotCaseStudy } from "./case-studies/aiOrNot";
import { diffCaseStudy } from "./case-studies/diff";
import { instantMarketValueCaseStudy } from "./case-studies/instantMarketValue";
import { journalOfAcademicInquiryCaseStudy } from "./case-studies/journalOfAcademicInquiry";
import { onTrackCaseStudy } from "./case-studies/onTrack";
import { prepPathwaysCaseStudy } from "./case-studies/prepPathways";
import { updateTagsCaseStudy } from "./case-studies/updateTags";

export const PROJECT_NAMES = [
  "Instant Market Value",
  "Journal of Academic Inquiry",
  "Prep Pathways",
  "UpdateTags",
  "Diff",
  "AI or Not",
  "On Track",
] as const;

export type ProjectName = (typeof PROJECT_NAMES)[number];
export type ProjectType = "Personal" | "Freelance" | "Work";
export type CaseStudyAction = {
  label: "View Live Site" | "View Extension";
  href: `http://${string}` | `https://${string}`;
};
export type CaseStudyTechnology = {
  name: string;
  role?: string;
};
type ProjectSubtitle = string | readonly CaseStudyTextSegment[];

type ProjectMetadata = {
  name: ProjectName;
  path: `/${string}`;
  liveUrl?: `http://${string}` | `https://${string}`;
  githubUrl?: `https://github.com/${string}`;
  projectType: ProjectType;
  impactLabel?: string;
  subtitle: ProjectSubtitle;
  caseStudyAction: CaseStudyAction;
  caseStudyTechnologies: readonly CaseStudyTechnology[];
  cardImage: ProjectImage;
  caseStudy: CaseStudy;
};

export const PROJECTS_BY_NAME: Record<ProjectName, ProjectMetadata> = {
  UpdateTags: {
    name: "UpdateTags",
    path: "/update-tags",
    liveUrl: "https://tagloom.app/",
    githubUrl: "https://github.com/ace-lowder/tagloom",
    projectType: "Personal",
    subtitle: [strong("saas"), normal(" for improving Etsy listings")],
    caseStudyAction: {
      label: "View Live Site",
      href: "https://tagloom.app/",
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
    cardImage: {
      src: updateTagsCardImage,
      alt: "Tagloom generating 13 search tags for a handmade ceramic mug.",
    },
    caseStudy: updateTagsCaseStudy,
  },
  Diff: {
    name: "Diff",
    path: "/diff",
    liveUrl: "http://diffedit.com/",
    githubUrl: "https://github.com/ace-lowder/diff",
    projectType: "Personal",
    subtitle: [strong("text editor"), normal(" for comparing drafts")],
    caseStudyAction: {
      label: "View Live Site",
      href: "http://diffedit.com/",
    },
    caseStudyTechnologies: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "Vite" },
      { name: "Tailwind CSS" },
      { name: "CodeMirror", role: "editor" },
      { name: "Netlify" },
    ],
    cardImage: {
      src: diffCardImage,
      alt: "Diff comparing two drafts with highlighted text changes.",
    },
    caseStudy: diffCaseStudy,
  },
  "Journal of Academic Inquiry": {
    name: "Journal of Academic Inquiry",
    path: "/journal-of-academic-inquiry",
    liveUrl: "https://journalofinquiry.org/",
    projectType: "Freelance",
    impactLabel: "$121,000 ARR (YTD)",
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
    cardImage: {
      src: journalOfAcademicInquiryCardImage,
      alt: "Journal of Academic Inquiry website on a laptop at a study desk.",
    },
    caseStudy: journalOfAcademicInquiryCaseStudy,
  },
  "Instant Market Value": {
    name: "Instant Market Value",
    path: "/instant-market-value",
    liveUrl: "https://www.instantmv.com/",
    projectType: "Work",
    impactLabel: "$31,000 ARR (YTD)",
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
    cardImage: {
      src: instantMarketValueCardImage,
      alt: "InstantMV vehicle valuation graphic in an auto repair shop.",
    },
    caseStudy: instantMarketValueCaseStudy,
  },
  "AI or Not": {
    name: "AI or Not",
    path: "/ai-or-not",
    liveUrl: "https://aiornot.site/",
    githubUrl: "https://github.com/ace-lowder/ai-or-not",
    projectType: "Personal",
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
    cardImage: {
      src: aiOrNotCardImage,
      alt: "AI or Not logo with a cartoon robot on a dark background.",
    },
    caseStudy: aiOrNotCaseStudy,
  },
  "Prep Pathways": {
    name: "Prep Pathways",
    path: "/prep-pathways",
    liveUrl: "https://preppathways.net/",
    projectType: "Freelance",
    impactLabel: "$35,000 ARR (YTD)",
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
    cardImage: {
      src: prepPathwaysCardImage,
      alt: "Prep Pathways college counseling website shown across several pages.",
    },
    caseStudy: prepPathwaysCaseStudy,
  },
  "On Track": {
    name: "On Track",
    path: "/on-track",
    githubUrl: "https://github.com/ace-lowder/on-track",
    projectType: "Personal",
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
    cardImage: {
      src: onTrackCardImage,
      alt: "On Track showing Codex agent statuses in the VS Code status bar.",
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
