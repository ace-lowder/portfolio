export type ProjectImage = {
  src: string;
  alt: string;
};

export type CaseStudyTextSegment = {
  text: string;
  emphasis: "normal" | "strong";
};

export type CaseStudyParagraph = {
  segments: CaseStudyTextSegment[];
};

export type CaseStudySection =
  | {
      id: string;
      type: "split";
      columns: [
        { heading: string; paragraphs: CaseStudyParagraph[] },
        { heading: string; paragraphs: CaseStudyParagraph[] },
      ];
    }
  | {
      id: string;
      type: "content";
      heading: string;
      paragraphs: CaseStudyParagraph[];
      bullets: string[];
      image: ProjectImage | null;
    }
  | {
      id: string;
      type: "details";
      heading: string;
      items: {
        label: string;
        value: string;
        href: string | null;
      }[];
    };

export type CaseStudy = {
  coverImage: ProjectImage | null;
  sections: CaseStudySection[];
};
