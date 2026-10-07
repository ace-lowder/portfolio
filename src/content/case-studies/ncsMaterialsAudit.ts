import { contentSection, normal, paragraph, strong, type CaseStudy } from "../caseStudy";

export const ncsMaterialsAuditCaseStudy: CaseStudy = {
  sections: [
    contentSection(
      "Overview",
      paragraph(normal("An internal audit system that compares vendor invoices with purchase records to surface inventory quantity and pricing discrepancies.")),
    ),
    contentSection(
      "Problem",
      paragraph(normal("Reviewing invoice PDFs against internal records made it difficult to spot mismatched quantities and prices across line items.")),
    ),
    contentSection(
      "My Role",
      paragraph(normal("At KriTech, I designed and built the React/TypeScript interface and the Node.js processing system.")),
    ),
    contentSection(
      "Implementation",
      paragraph(normal("The system parses vendor invoice PDFs, matches their line items to internal purchase records, and presents discrepancies for review.")),
    ),
    contentSection(
      "Challenges",
      paragraph(normal("A useful comparison depends on matching information extracted from invoices to the right internal records before evaluating quantity and price differences.")),
    ),
    contentSection(
      "Results",
      paragraph(
        normal("The audit identified "),
        strong("$200K+ in inventory and pricing discrepancies"),
        normal(". That figure represents mismatches found, not money recovered."),
      ),
    ),
  ],
};
