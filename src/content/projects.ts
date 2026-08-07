import diffCardImage from "../assets/case-studies/diff/cover-placeholder.png";
import instantMarketValueCardImage from "../assets/case-studies/instant-market-value/cover-placeholder.png";
import journalOfAcademicInquiryCardImage from "../assets/case-studies/journal-of-academic-inquiry/card.png";
import updateTagsCardImage from "../assets/case-studies/update-tags/cover-placeholder.png";
import { type CaseStudy, type ProjectImage } from "./caseStudy";
import { diffCaseStudy } from "./case-studies/diff";
import { instantMarketValueCaseStudy } from "./case-studies/instantMarketValue";
import { journalOfAcademicInquiryCaseStudy } from "./case-studies/journalOfAcademicInquiry";
import { updateTagsCaseStudy } from "./case-studies/updateTags";

export const PROJECT_NAMES = [
  "UpdateTags",
  "Diff",
  "Journal of Academic Inquiry",
  "Instant Market Value",
] as const;

export type ProjectName = (typeof PROJECT_NAMES)[number];
export type ProjectType = "Personal" | "Freelance" | "Work";

type ProjectMetadata = {
  name: ProjectName;
  path: `/${string}`;
  projectType: ProjectType;
  subtitle: string;
  cardImage: ProjectImage;
  caseStudy: CaseStudy;
};

export const PROJECTS_BY_NAME: Record<ProjectName, ProjectMetadata> = {
  UpdateTags: {
    name: "UpdateTags",
    path: "/update-tags",
    projectType: "Personal",
    subtitle:
      "A live Etsy tag generator with saved history, paid plans, and quality safeguards",
    cardImage: {
      src: updateTagsCardImage,
      alt: "Marketplace listing form beside 13 generated search tags on a laptop.",
    },
    caseStudy: updateTagsCaseStudy,
  },
  Diff: {
    name: "Diff",
    path: "/diff",
    projectType: "Personal",
    subtitle:
      "A local-first writing editor for comparing a rough draft with its revision",
    cardImage: {
      src: diffCardImage,
      alt: "Two-pane writing editor comparing a draft with its revision on a laptop.",
    },
    caseStudy: diffCaseStudy,
  },
  "Journal of Academic Inquiry": {
    name: "Journal of Academic Inquiry",
    path: "/journal-of-academic-inquiry",
    projectType: "Freelance",
    subtitle:
      "An online academic journal platform to help high school students write and publish academic writing",
    cardImage: {
      src: journalOfAcademicInquiryCardImage,
      alt: "Journal of Academic Inquiry website shown on a laptop at a study desk.",
    },
    caseStudy: journalOfAcademicInquiryCaseStudy,
  },
  "Instant Market Value": {
    name: "Instant Market Value",
    path: "/instant-market-value",
    projectType: "Work",
    subtitle:
      "A paid vehicle valuation platform that turns current comparable listings into evidence-based market reports",
    cardImage: {
      src: instantMarketValueCardImage,
      alt: "Vehicle market valuation dashboard displayed on a laptop in an auto body shop office.",
    },
    caseStudy: instantMarketValueCaseStudy,
  },
};

export function getProjectNameByPath(pathname: string): ProjectName | null {
  return (
    PROJECT_NAMES.find(
      (projectName) => PROJECTS_BY_NAME[projectName].path === pathname,
    ) ?? null
  );
}
