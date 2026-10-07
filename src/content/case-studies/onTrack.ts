import { contentSection, normal, paragraph, type CaseStudy } from "../caseStudy";

export const onTrackCaseStudy: CaseStudy = {
  sections: [
    contentSection(
      "Overview",
      paragraph(normal("On Track is a VS Code extension that shows the status of multiple AI coding sessions inside the editor and links developers back to their active chats.")),
    ),
    contentSection(
      "Problem",
      paragraph(normal("When several Codex chats and subagents run at once, it becomes easy to lose track of which are still working, which have finished, and where each conversation is.")),
    ),
    contentSection(
      "My Role",
      paragraph(normal("I built the extension end to end from a problem in my own workflow, then published it for other developers to use for free.")),
    ),
    contentSection(
      "Implementation",
      paragraph(normal("The extension tracks agent state and elapsed time, displays each session in the VS Code status bar, marks completed sessions, and opens the related chat when clicked.")),
    ),
    contentSection(
      "Challenges",
      paragraph(normal("The status bar has limited space, so the extension has to make several simultaneous sessions understandable without requiring developers to open each chat to check progress.")),
    ),
    contentSection(
      "Results",
      paragraph(normal("On Track is publicly available as a free VS Code extension, with status tracking and chat navigation in the editor.")),
    ),
  ],
};
