import { normal, paragraph, type CaseStudy } from "../caseStudy";

export const onTrackCaseStudy: CaseStudy = {
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
          label: "Source Code",
          value: "View On Track on GitHub",
          href: "https://github.com/ace-lowder/on-track",
        },
      ],
    },
  ],
};
