import { contentSection, normal, paragraph, strong, type CaseStudy } from "../caseStudy";

export const prepPathwaysCaseStudy: CaseStudy = {
  sections: [
    contentSection(
      "Overview",
      paragraph(normal("Prep Pathways is a website for a college counseling, test prep, and tutoring business. It explains the services and gives prospective clients a direct way to inquire.")),
    ),
    contentSection(
      "Problem",
      paragraph(normal("The client had a rough list of pages but needed a complete site that clearly presented the business and routed inquiries to their email.")),
    ),
    contentSection(
      "My Role",
      paragraph(normal("I worked directly with the client and owned the design, page structure, written content, build, launch, and ongoing updates.")),
    ),
    contentSection(
      "Implementation",
      paragraph(normal("I built the service pages, business information, and contact form in a React/TypeScript site. Form submissions go to the client's email.")),
    ),
    contentSection(
      "Challenges",
      paragraph(normal("I had to turn an incomplete brief into clear pages and a working contact flow within a one-month delivery window.")),
    ),
    contentSection(
      "Results",
      paragraph(
        normal("The site launched within one month and has generated "),
        strong("25+ inbound inquiries"),
        normal(". It also supported $35K in client sales; that sales figure is not a claim that every purchase came directly from the website."),
      ),
    ),
  ],
};
