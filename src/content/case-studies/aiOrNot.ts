import { normal, paragraph, type CaseStudy } from "../caseStudy";

export const aiOrNotCaseStudy: CaseStudy = {
  sections: [
    {
      id: "summary",
      type: "content",
      paragraphs: [
        paragraph(
          normal(
            "AI or Not is a browser game where players guess whether YouTube comments are real or AI-generated. I built the game logic, scoring, feedback, responsive interface, and comment-loading system, then tuned the AI prompts to generate comments that feel believable next to real YouTube comments. As players score more points, the generated comments become harder to distinguish from the real ones. I also focused heavily on animation, pacing, and interaction details so the game feels smooth and fun across desktop and mobile. Real comments are cached locally to reduce repeat API requests and keep rounds loading quickly.",
          ),
        ),
      ],
      bullets: [],
      image: null,
    },
  ],
};
