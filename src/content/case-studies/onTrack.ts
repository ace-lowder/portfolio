import { normal, paragraph, type CaseStudy } from "../caseStudy";

export const onTrackCaseStudy: CaseStudy = {
  sections: [
    {
      id: "summary",
      type: "content",
      paragraphs: [
        paragraph(
          normal(
            "On Track is a VS Code extension I built to monitor multiple Codex agents while they work. I created it after running into the problem myself: once several chats and subagents are active, it becomes difficult to remember what is still running and where. The extension shows each active agent in the VS Code status bar, tracks how long it has been running, and marks when it finishes. Clicking an agent takes you directly back to its chat. I built the extension end to end, including the agent-state tracking, status bar integration, and navigation behavior, then released it publicly for free so other developers could use the same workflow.",
          ),
        ),
      ],
      bullets: [],
      image: null,
    },
  ],
};
