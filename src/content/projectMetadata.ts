export const SITE_URL = "https://acelowder.com";
export const SOCIAL_PREVIEW_IMAGE = `${SITE_URL}/social-preview.png`;

export type ProjectName =
  | "Instant Market Value"
  | "Journal of Academic Inquiry"
  | "Prep Pathways"
  | "UpdateTags"
  | "On Track"
  | "Diff"
  | "AI or Not"
  | "Reelreads";

type CaseStudyMetadata = {
  path: `/${string}`;
  title: string;
  description: string;
};

export const CASE_STUDY_METADATA: Record<ProjectName, CaseStudyMetadata> = {
  "Instant Market Value": {
    path: "/instant-market-value",
    title: "Instant Market Value Case Study | Ace Lowder",
    description:
      "A case study of a full-stack web app for vehicle valuation reports.",
  },
  "Journal of Academic Inquiry": {
    path: "/journal-of-academic-inquiry",
    title: "Journal of Academic Inquiry Case Study | Ace Lowder",
    description:
      "A case study of ongoing website work for an academic journal client.",
  },
  "Prep Pathways": {
    path: "/prep-pathways",
    title: "Prep Pathways Case Study | Ace Lowder",
    description:
      "A case study of a website for a tutoring and college prep client.",
  },
  UpdateTags: {
    path: "/update-tags",
    title: "UpdateTags Case Study | Ace Lowder",
    description: "A case study of a SaaS product for improving Etsy listings.",
  },
  "On Track": {
    path: "/on-track",
    title: "On Track Case Study | Ace Lowder",
    description: "A case study of a VS Code extension for tracking Codex agents.",
  },
  Diff: {
    path: "/diff",
    title: "Diff Case Study | Ace Lowder",
    description: "A case study of a text editor for comparing drafts.",
  },
  "AI or Not": {
    path: "/ai-or-not",
    title: "AI or Not Case Study | Ace Lowder",
    description: "A case study of a browser game for spotting fake YouTube comments.",
  },
  Reelreads: {
    path: "/reelreads",
    title: "Reelreads Case Study | Ace Lowder",
    description: "A case study of a landing site for a local book club.",
  },
};
