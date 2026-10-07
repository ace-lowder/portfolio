import { contentSection, normal, paragraph, type CaseStudy } from "../caseStudy";

export const reelreadsCaseStudy: CaseStudy = {
  sections: [
    contentSection(
      "Overview",
      paragraph(normal("Reelreads is a landing site for a book club concept built around reading a book, watching its film adaptation, and discussing both.")),
    ),
    contentSection(
      "Problem",
      paragraph(normal("The concept needed a clear way to present its book-and-film format and collect interest through a newsletter signup.")),
    ),
    contentSection(
      "My Role",
      paragraph(normal("I designed and built the site, including the visual direction, responsive interactions, and newsletter flow.")),
    ),
    contentSection(
      "Implementation",
      paragraph(normal("The poster-driven layout adapts a film-discovery style to books and movies. The server-side signup validates submissions, filters basic bots, and adds subscribers to MailerLite.")),
    ),
    contentSection(
      "Challenges",
      paragraph(normal("The visual concept had to work across desktop and mobile while keeping the signup flow functional beyond the landing page itself.")),
    ),
    contentSection(
      "Results",
      paragraph(normal("I launched the complete site, but Reelreads remains a concept project rather than an active book club. The site is ready to use if I restart it.")),
    ),
  ],
};
