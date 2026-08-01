import journalOfAcademicInquiryCardImage from "../assets/case-studies/journal-of-academic-inquiry/card.png";
import journalOfAcademicInquiryCoverImage from "../assets/case-studies/journal-of-academic-inquiry/cover.png";

export const PROJECT_NAMES = [
  "UpdateTags",
  "DIFF",
  "Journal of Academic Inquiry",
  "Instant Market Value",
] as const;

export type ProjectName = (typeof PROJECT_NAMES)[number];

type ProjectImage = {
  src: string;
  alt: string;
};

type ProjectMetadata = {
  name: ProjectName;
  subtitle: string;
  cardImage: ProjectImage | null;
  caseStudyCoverImage: ProjectImage | null;
};

export const PROJECTS_BY_NAME: Record<ProjectName, ProjectMetadata> = {
  UpdateTags: {
    name: "UpdateTags",
    subtitle: "Project subtitle coming soon.",
    cardImage: null,
    caseStudyCoverImage: null,
  },
  DIFF: {
    name: "DIFF",
    subtitle: "Project subtitle coming soon.",
    cardImage: null,
    caseStudyCoverImage: null,
  },
  "Journal of Academic Inquiry": {
    name: "Journal of Academic Inquiry",
    subtitle:
      "An online academic journal platform to help high school students write and publish academic writing",
    cardImage: {
      src: journalOfAcademicInquiryCardImage,
      alt: "Journal of Academic Inquiry website shown on a laptop at a study desk.",
    },
    caseStudyCoverImage: {
      src: journalOfAcademicInquiryCoverImage,
      alt: "Journal of Academic Inquiry website shown across desktop and mobile screens.",
    },
  },
  "Instant Market Value": {
    name: "Instant Market Value",
    subtitle: "Project subtitle coming soon.",
    cardImage: null,
    caseStudyCoverImage: null,
  },
};
