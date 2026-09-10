import { normal, paragraph, type CaseStudy } from "../caseStudy";

export const diffCaseStudy: CaseStudy = {
  sections: [
    {
      id: "summary",
      type: "content",
      paragraphs: [
        paragraph(
          normal(
            "Diff is a browser-based text editor I built for comparing drafts and revisions while writing fiction. I designed the comparison logic myself with custom rules for identifying added, removed, and rewritten text, then kept refining the editor around problems I ran into while using it. Features include side-by-side comparison, line wrapping controls, adjustable layout, copy-by-line-number, and other small workflow improvements. Everything runs locally in the browser, so drafts stay on the user’s device and the tool works quickly across desktop and mobile. I still use Diff regularly and continue improving it based on my own writing workflow.",
          ),
        ),
      ],
      bullets: [],
      image: null,
    },
  ],
};
