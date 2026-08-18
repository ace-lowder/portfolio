import { normal, paragraph, type CaseStudy } from "../caseStudy";

export const diffCaseStudy: CaseStudy = {
  sections: [
    {
      id: "summary",
      type: "content",
      paragraphs: [
        paragraph(
          normal(
            "Diff is a text editor for writers to compare a draft with a revision and quickly see what changed. I built it as a solo project for my own fiction writing, with side-by-side editing and highlighting for added, removed, and rewritten text. Everything runs in the browser, so drafts stay on the user’s device instead of being uploaded to a server. I use Diff regularly in my own writing workflow and continue improving it based on problems I run into while editing. It’s free for anyone to use.",
          ),
        ),
      ],
      bullets: [],
      image: null,
    },
  ],
};
