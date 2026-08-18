export type ProjectImage = {
  src: string;
  alt: string;
};

export type CaseStudyTextSegment = {
  text: string;
  emphasis: "normal" | "strong";
  previewImage?: ProjectImage;
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
      heading?: string;
      paragraphs: CaseStudyParagraph[];
      bullets: string[];
      image: ProjectImage | null;
      imageLayout?: "below" | "float-left";
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
  sections: CaseStudySection[];
};

export const normal = (text: string): CaseStudyTextSegment => ({
  text,
  emphasis: "normal",
});

export const strong = (text: string): CaseStudyTextSegment => ({
  text,
  emphasis: "strong",
});

export const imagePreview = (
  text: string,
  previewImage: ProjectImage,
): CaseStudyTextSegment => ({
  text,
  emphasis: "normal",
  previewImage,
});

export const paragraph = (
  ...segments: CaseStudyTextSegment[]
): CaseStudyParagraph => ({
  segments,
});
