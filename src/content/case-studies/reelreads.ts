import { normal, paragraph, type CaseStudy } from "../caseStudy";

export const reelreadsCaseStudy: CaseStudy = {
  sections: [
    {
      id: "summary",
      type: "content",
      paragraphs: [
        paragraph(
          normal(
            "Reelreads is a landing site I built for a local book club concept centered on reading a book, watching its movie adaptation, and discussing both. I designed the site around a simple poster-driven layout inspired by Letterboxd, adapting that interaction style for books and films across desktop and mobile. The site includes responsive card interactions and a server-side newsletter signup flow that validates submissions, filters basic bots, and adds subscribers to MailerLite. It’s currently a concept project, but I built and launched the full experience so it’s ready to use if I restart the club.",
          ),
        ),
      ],
      bullets: [],
      image: null,
    },
  ],
};
