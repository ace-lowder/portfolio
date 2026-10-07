import { contentSection, normal, paragraph, type CaseStudy } from "../caseStudy";

export const diffCaseStudy: CaseStudy = {
  sections: [
    contentSection(
      "Overview",
      paragraph(normal("Diff is a browser-based editor for comparing drafts and revisions side by side, built around my fiction-writing workflow.")),
    ),
    contentSection(
      "Problem",
      paragraph(normal("I wanted to spot additions, removals, and rewrites between drafts while keeping line-level copying and layout controls close to the comparison.")),
    ),
    contentSection(
      "My Role",
      paragraph(normal("I designed the comparison rules, built the editor, and continue refining it based on my own use.")),
    ),
    contentSection(
      "Implementation",
      paragraph(normal("The React/TypeScript app uses custom comparison logic and an editing interface with side-by-side views, line wrapping controls, adjustable layout, and copy-by-line-number. Comparison runs locally in the browser.")),
    ),
    contentSection(
      "Challenges",
      paragraph(normal("A useful result needed rules that distinguish rewritten passages from simple additions or removals. I also kept processing on the user's device so drafts do not need to be uploaded.")),
    ),
    contentSection(
      "Results",
      paragraph(normal("Diff runs on desktop and mobile, and I still use it regularly for my own drafts. I continue improving the workflow as I write.")),
    ),
  ],
};
