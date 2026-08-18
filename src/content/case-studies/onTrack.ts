import { normal, paragraph, type CaseStudy } from "../caseStudy";

export const onTrackCaseStudy: CaseStudy = {
  sections: [
    {
      id: "summary",
      type: "content",
      paragraphs: [
        paragraph(
          normal(
            "On Track is a VS Code extension for monitoring multiple Codex agents while they work. Codex makes it difficult to keep track of several chats and their subagents at once, so I built On Track to show every active agent directly in the VS Code status bar, including how long each has been running and when it finishes. Clicking an agent takes you straight back to its chat, making it much easier to multitask without constantly switching between conversations to check their status. I originally built it for myself to manage the agents I use at work, then released it publicly for free so other developers could use it too.",
          ),
        ),
      ],
      bullets: [],
      image: null,
    },
  ],
};
