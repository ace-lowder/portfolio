import { normal, paragraph, type CaseStudy } from "../caseStudy";

export const aiOrNotCaseStudy: CaseStudy = {
  sections: [
    {
      id: "case-study-placeholder",
      type: "content",
      heading: "Case Study Coming Soon",
      paragraphs: [
        paragraph(
          normal(
            "A full write-up of the problem, my role, the implementation, and the results will be added here.",
          ),
        ),
      ],
      bullets: [],
      image: null,
    },
    {
      id: "project-details",
      type: "details",
      heading: "Project Details",
      items: [
        {
          label: "Live Site",
          value: "Play AI or Not",
          href: "https://aiornot.site/",
        },
      ],
    },
  ],
};
