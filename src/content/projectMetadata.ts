export const SITE_URL = "https://acelowder.com";
export const SOCIAL_PREVIEW_IMAGE = `${SITE_URL}/social-preview.png`;
export const SOCIAL_PREVIEW_ALT = "Screenshots of selected projects by Ace Lowder";
export const PORTFOLIO_METADATA = {
  title: "Ace Lowder | Full Stack Software Engineer",
  description:
    "Full-stack software engineer building production applications, backend systems, and cloud infrastructure. Explore work in automotive software, SaaS, and developer tools.",
};

export type ProjectName =
  | "OEM Calibrations"
  | "NCS Materials Audit"
  | "Instant Market Value"
  | "Crash"
  | "Journal of Academic Inquiry"
  | "Prep Pathways"
  | "UpdateTags"
  | "On Track"
  | "Diff"
  | "AI or Not";

type CaseStudyMetadata = {
  path: `/${string}`;
  title: string;
  description: string;
  socialImage?: { assetName: string; alt: string };
};

export const CASE_STUDY_METADATA: Record<ProjectName, CaseStudyMetadata> = {
  "OEM Calibrations": {
    path: "/oem-calibrations",
    title: "OEM Calibrations | Repair Quoting Platform | Ace Lowder",
    description:
      "Backend services and cloud infrastructure for an automated automotive repair-quoting platform supporting a major partner rollout.",
  },
  "NCS Materials Audit": {
    path: "/ncs-materials-audit",
    title: "NCS Materials Audit | Invoice Reconciliation | Ace Lowder",
    description:
      "An internal audit tool that compared vendor invoices with inventory records and identified $200K+ in materials and pricing discrepancies.",
  },
  "Instant Market Value": {
    path: "/instant-market-value",
    title: "Instant Market Value | Vehicle Valuation SaaS | Ace Lowder",
    description:
      "A production valuation app with comparable-vehicle matching, geographic search expansion, caching, and customer reports.",
    socialImage: {
      assetName: "instant-market-value-card",
      alt: "InstantMV vehicle valuation graphic in an auto repair shop",
    },
  },
  Crash: {
    path: "/crash",
    title: "Crash | Production Platform Support | Ace Lowder",
    description:
      "Maintaining customer account and billing workflows across Node.js, MongoDB, Redis, Stripe, Salesforce, and Azure.",
  },
  "Journal of Academic Inquiry": {
    path: "/journal-of-academic-inquiry",
    title: "Journal of Academic Inquiry | Enrollment Platform | Ace Lowder",
    description:
      "A client website and enrollment system with payments, customer data handling, email confirmations, and ongoing support.",
    socialImage: {
      assetName: "journal-of-academic-inquiry-card",
      alt: "Journal of Academic Inquiry website shown on a laptop",
    },
  },
  "Prep Pathways": {
    path: "/prep-pathways",
    title: "Prep Pathways | Client Website | Ace Lowder",
    description:
      "A responsive tutoring and college-prep website with service pages and inquiry forms, built in collaboration with the client.",
    socialImage: {
      assetName: "prep-pathways-card",
      alt: "Prep Pathways college counseling website preview",
    },
  },
  UpdateTags: {
    path: "/update-tags",
    title: "UpdateTags | SaaS Product | Ace Lowder",
    description: "A live Etsy listing tool with AI tag generation, account access, subscriptions, billing, and usage limits.",
    socialImage: {
      assetName: "update-tags-card",
      alt: "UpdateTags generating search tags for a product listing",
    },
  },
  "On Track": {
    path: "/on-track",
    title: "On Track | VS Code Extension | Ace Lowder",
    description: "A published VS Code extension for tracking multiple AI coding sessions and returning to active conversations.",
    socialImage: {
      assetName: "on-track-card",
      alt: "On Track extension showing coding session status in VS Code",
    },
  },
  Diff: {
    path: "/diff",
    title: "Diff | Browser-Based Text Comparison | Ace Lowder",
    description: "A browser-based editor for comparing drafts side by side while keeping text on the user's device.",
    socialImage: {
      assetName: "diff-card",
      alt: "Diff showing two drafts with highlighted changes",
    },
  },
  "AI or Not": {
    path: "/ai-or-not",
    title: "AI or Not | AI Comment Game | Ace Lowder",
    description: "A browser game that challenges players to tell AI-generated comments from real ones.",
    socialImage: {
      assetName: "ai-or-not-card",
      alt: "AI or Not game artwork with a cartoon robot",
    },
  },
};
