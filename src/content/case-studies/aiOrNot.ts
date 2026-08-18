import { normal, paragraph, type CaseStudy } from "../caseStudy";

export const aiOrNotCaseStudy: CaseStudy = {
  sections: [
    {
      id: "summary",
      type: "content",
      paragraphs: [
        paragraph(
          normal(
            "AI or Not is a browser game where players guess whether YouTube comments are real or AI-generated. I built it as a personal project, including the scoring, feedback, comment-loading system, and responsive game interface for desktop and mobile. The app mixes real YouTube comments with AI-generated alternatives and caches comments locally so rounds can start without waiting on new API requests. I also focused heavily on animations and interaction details so it feels fun to play.",
          ),
        ),
      ],
      bullets: [],
      image: null,
    },
  ],
};
