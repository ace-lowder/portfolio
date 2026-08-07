import diffCoverImage from "../../assets/case-studies/diff/cover-placeholder.png";
import diffEditorFlowImage from "../../assets/case-studies/diff/editor-flow.svg";
import diffTestCoverageImage from "../../assets/case-studies/diff/test-coverage.svg";
import {
  type CaseStudy,
  type CaseStudyParagraph,
  type CaseStudyTextSegment,
} from "../caseStudy";

const normal = (text: string): CaseStudyTextSegment => ({
  text,
  emphasis: "normal",
});

const strong = (text: string): CaseStudyTextSegment => ({
  text,
  emphasis: "strong",
});

const paragraph = (
  ...segments: CaseStudyTextSegment[]
): CaseStudyParagraph => ({
  segments,
});

export const diffCaseStudy: CaseStudy = {
  coverImage: {
    src: diffCoverImage,
    alt: "Two-pane writing editor comparing a draft with its revision on a laptop.",
  },
  sections: [
    {
      id: "problem-and-role",
      type: "split",
      columns: [
        {
          heading: "The Problem",
          paragraphs: [
            paragraph(
              normal(
                "Writers can compare two documents with generic diff tools, but those tools are built for code instead of prose. I wanted a focused editor where someone could write, revise, and understand every change without uploading their work.",
              ),
            ),
          ],
        },
        {
          heading: "Role",
          paragraphs: [
            paragraph(
              normal("I designed and built Diff as a "),
              strong("solo personal project"),
              normal(
                ", owning the editor behavior, comparison engine, responsive interface, and test suite.",
              ),
            ),
          ],
        },
      ],
    },
    {
      id: "what-i-built",
      type: "content",
      heading: "What I Built",
      paragraphs: [
        paragraph(
          normal(
            "Diff is a local-first editor with separate draft, revision, and split views. It aligns both versions, marks additions and deletions, and keeps the writing controls useful while the comparison updates.",
          ),
        ),
      ],
      bullets: [
        "Resizable two-pane editor with synchronized scrolling",
        "Inline and line-level addition and deletion highlights",
        "Bold, italic, and underline formatting with undo history",
        "Rich-text clipboard import and export",
        "Word and character totals with change counts",
        "Responsive menus, line numbers, wrapping, and spacing controls",
      ],
      image: null,
    },
    {
      id: "responsive-comparison",
      type: "content",
      heading: "Keeping Comparison Work Responsive",
      paragraphs: [
        paragraph(
          normal(
            "Comparing longer documents can be expensive, especially while someone is actively typing. I moved diff computation into a Web Worker so matching work happens away from the main interface thread.",
          ),
        ),
        paragraph(
          normal(
            "The result passes through custom word, line, and formatting refinement before CodeMirror paints the final decorations. This supports prose-specific changes while keeping both editor panes aligned.",
          ),
        ),
      ],
      bullets: [],
      image: {
        src: diffEditorFlowImage,
        alt: "Four-step editor flow: enter both versions, compare in a Web Worker, align changes, and review them in synchronized panes.",
      },
    },
    {
      id: "local-first",
      type: "content",
      heading: "Local-First by Design",
      paragraphs: [
        paragraph(
          normal(
            "The app has no backend or account system. Drafts, revisions, formatting, and display preferences stay in the browser, so private writing does not need to be sent to a server just to compare it.",
          ),
        ),
      ],
      bullets: [],
      image: null,
    },
    {
      id: "testing",
      type: "content",
      heading: "Testing Editor Behavior",
      paragraphs: [
        paragraph(
          normal(
            "Text editors have many small interactions that can break each other. I built focused coverage around comparison logic, typing, formatting history, clipboard HTML, saved state, commands, line copying, statistics, layout controls, and touch behavior.",
          ),
        ),
        paragraph(
          normal("The current repository has "),
          strong("455 passing tests across 26 test files"),
          normal(
            ". The suite made repeated improvements to diff painting and responsive behavior safer to ship.",
          ),
        ),
      ],
      bullets: [],
      image: {
        src: diffTestCoverageImage,
        alt: "Quality summary showing 26 test files, 455 passing tests, and no server accounts because drafts remain in browser storage.",
      },
    },
    {
      id: "what-id-improve",
      type: "content",
      heading: "What I’d Improve",
      paragraphs: [
        paragraph(
          normal(
            "The current editor grew through many small interaction fixes, leaving too much application state and rendering logic in a few large files. Known editor and layout edge cases also need a clear reproduction list before deeper changes.",
          ),
        ),
        paragraph(
          normal(
            "For the next release, I would split the editor state, diff computation, and paint layers by responsibility, then add browser-level tests for the complete typing, clipboard, split-view, and responsive flows before renaming and deploying the product.",
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
          label: "Timeline",
          value: "May–July 2026 initial development",
          href: null,
        },
        {
          label: "Stack",
          value: "React, TypeScript, CodeMirror, Web Workers, Tailwind CSS, Vitest",
          href: null,
        },
        {
          label: "Status",
          value: "Usable prototype with cleanup and deployment planned",
          href: null,
        },
      ],
    },
  ],
};
