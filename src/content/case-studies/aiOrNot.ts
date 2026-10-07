import { contentSection, normal, paragraph, type CaseStudy } from "../caseStudy";

export const aiOrNotCaseStudy: CaseStudy = {
  sections: [
    contentSection(
      "Overview",
      paragraph(normal("AI or Not is a browser game where players decide whether YouTube comments are real or AI-generated.")),
    ),
    contentSection(
      "Problem",
      paragraph(normal("The game needed believable generated comments beside real ones, clear scoring and feedback, and rounds that load quickly enough to keep play moving.")),
    ),
    contentSection(
      "My Role",
      paragraph(normal("I built the game logic, scoring, feedback, responsive interface, comment-loading system, and AI prompts.")),
    ),
    contentSection(
      "Implementation",
      paragraph(normal("The game combines real YouTube comments with AI-generated ones. It increases difficulty as players score more points, uses animations to pace each round, and caches real comments locally to reduce repeat API requests.")),
    ),
    contentSection(
      "Challenges",
      paragraph(normal("Generated comments had to feel plausible next to real ones without making every round equally difficult. I tuned the prompts and progression while using a local cache to limit repeated comment requests.")),
    ),
    contentSection(
      "Results",
      paragraph(normal("I launched a playable experience across desktop and mobile, with scoring, increasing difficulty, and locally cached real comments.")),
    ),
  ],
};
