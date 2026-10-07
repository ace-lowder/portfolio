import { contentSection, normal, paragraph, strong, type CaseStudy } from "../caseStudy";

export const instantMarketValueCaseStudy: CaseStudy = {
  sections: [
    contentSection(
      "Overview",
      paragraph(normal("InstantMV helps auto body shops value vehicles using dealership listings and recent sales. It produces a branded PDF report with comparable vehicles that shops can share with insurers.")),
    ),
    contentSection(
      "Problem",
      paragraph(normal("Shops needed more defensible valuations than manual estimates could provide. Comparable local vehicles were sometimes scarce, and repeated vehicle-data requests carried a paid API cost.")),
    ),
    contentSection(
      "My Role",
      paragraph(normal("I lead the product end to end, translating valuation rules from the CEO, technical requirements from the CTO, and designs from a UI/UX designer into the working app. I also designed a shared valuation backend for Diminished Value, an existing product built by another developer.")),
    ),
    contentSection(
      "Implementation",
      paragraph(normal("I built the React/TypeScript application and Node.js backend, including vehicle search, comparable-listing selection, valuation calculations, and PDF reports. The engine expands searches geographically when local inventory is limited, ranks listings by distance, similarity, and mileage, and caches vehicle-data lookups in PostgreSQL on AWS RDS.")),
    ),
    contentSection(
      "Challenges",
      paragraph(normal("A local-only search could leave a report without enough comparable vehicles, so the search broadens its area while still ranking relevance. Caching also had to reduce paid provider calls without leaving the valuation workflow dependent on repeated requests.")),
    ),
    contentSection(
      "Results",
      paragraph(
        normal("The cache served "),
        strong("68% of vehicle-data lookups"),
        normal(" and kept usage within a lower API pricing tier, saving $299 per month. Together, InstantMV and Diminished Value generated over $31K in paid invoices."),
      ),
    ),
  ],
};
