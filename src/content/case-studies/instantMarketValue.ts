import { normal, paragraph, strong, type CaseStudy } from "../caseStudy";

export const instantMarketValueCaseStudy: CaseStudy = {
  sections: [
    {
      id: "summary",
      type: "content",
      paragraphs: [
        paragraph(
          normal(
            "InstantMV is a web app that helps auto body shops determine a vehicle's value using real-world evidence from dealership listings and recent sales across the country. Shops enter the vehicle information, and the app finds comparable vehicles, calculates a market value, and generates a branded PDF report with supporting evidence that can be used with insurance companies. I built and continue to maintain the product, working with valuation rules from the CEO, technical requirements from the CTO, and designs from a UI/UX designer. The valuation backend is also shared with Diminished Value, a related product that estimates how much value a vehicle loses after an accident. Together, the two products have generated ",
          ),
          strong("over $31,000 in paid invoices so far this year"),
          normal("."),
        ),
      ],
      bullets: [],
      image: null,
    },
  ],
};
