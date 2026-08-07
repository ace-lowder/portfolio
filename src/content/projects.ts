import journalOfAcademicInquiryCardImage from "../assets/case-studies/journal-of-academic-inquiry/card.png";
import instantMarketValueCardImage from "../assets/case-studies/instant-market-value/cover-placeholder.png";
import { type CaseStudy, type ProjectImage } from "./caseStudy";
import { instantMarketValueCaseStudy } from "./case-studies/instantMarketValue";
import { journalOfAcademicInquiryCaseStudy } from "./case-studies/journalOfAcademicInquiry";

export const PROJECT_NAMES = [
  "UpdateTags",
  "DIFF",
  "Journal of Academic Inquiry",
  "Instant Market Value",
] as const;

export type ProjectName = (typeof PROJECT_NAMES)[number];

type ProjectMetadata = {
  name: ProjectName;
  subtitle: string;
  cardImage: ProjectImage | null;
  caseStudy: CaseStudy | null;
};

export const PROJECTS_BY_NAME: Record<ProjectName, ProjectMetadata> = {
  UpdateTags: {
    name: "UpdateTags",
    subtitle: "Project subtitle coming soon.",
    cardImage: null,
    caseStudy: null,
  },
  DIFF: {
    name: "DIFF",
    subtitle: "Project subtitle coming soon.",
    cardImage: null,
    caseStudy: null,
  },
  "Journal of Academic Inquiry": {
    name: "Journal of Academic Inquiry",
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
    subtitle:
      "A paid vehicle valuation platform that turns current comparable listings into evidence-based market reports",
    cardImage: {
      src: instantMarketValueCardImage,
      alt: "Vehicle market valuation dashboard displayed on a laptop in an auto body shop office.",
    },
    caseStudy: instantMarketValueCaseStudy,
  },
};
