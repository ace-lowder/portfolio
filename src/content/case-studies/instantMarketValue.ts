import { normal, paragraph, strong, type CaseStudy } from "../caseStudy";

export const instantMarketValueCaseStudy: CaseStudy = {
  sections: [
    {
      id: "summary",
      type: "content",
      paragraphs: [
        paragraph(
          normal(
            "InstantMV is a web app that helps auto body shops determine a vehicle’s value using real dealership listings and recent sales. Shops enter the vehicle information, and the app finds comparable vehicles, calculates a market value, and generates a branded PDF report with evidence that can be shared with insurance companies. I lead the product end to end, translating valuation rules from the CEO, technical requirements from the CTO, and designs from a UI/UX designer into the working app. I also designed the shared valuation backend so Diminished Value, an existing product built by another developer, could use real comparable-vehicle data instead of relying on manual calculations and estimates. That made both products more accurate and gave shops stronger evidence when dealing with insurers, which has helped reduce rejections. Together, the two products have generated ",
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
