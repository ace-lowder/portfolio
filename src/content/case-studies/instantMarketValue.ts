import instantMarketValueCoverImage from "../../assets/case-studies/instant-market-value/cover-placeholder.png";
import instantMarketValueLaunchResultsImage from "../../assets/case-studies/instant-market-value/launch-results.svg";
import instantMarketValueReportFlowImage from "../../assets/case-studies/instant-market-value/report-flow.svg";
import {
  normal,
  paragraph,
  strong,
  type CaseStudy,
} from "../caseStudy";

export const instantMarketValueCaseStudy: CaseStudy = {
  coverImage: {
    src: instantMarketValueCoverImage,
    alt: "Laptop displaying a vehicle market valuation dashboard in an auto body shop office.",
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
                "Vehicle values can change faster than traditional pricing guides. Auto body shops needed a clearer way to compare a vehicle with current listings and recent sales, then produce evidence they could use in an appraisal or negotiation.",
              ),
            ),
          ],
        },
        {
          heading: "Role & Collaboration",
          paragraphs: [
            paragraph(
              normal("I was the "),
              strong("sole developer"),
              normal(
                ", working from technical requirements provided by the CTO, valuation rules from the CEO, and layouts from a UI/UX designer.",
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
            "I built the full application and production infrastructure, from the guided vehicle form through checkout, valuation, PDF generation, and saved reports.",
          ),
        ),
      ],
      bullets: [
        "React workflow for vehicle, accident, owner, and location details",
        "Node.js API for market data, valuation, checkout, and reports",
        "Comparable matching across active listings and recent sales",
        "Adjustments for geography, mileage, condition, and accident history",
        "Free-use, saved-card, hosted-invoice, and guest-card checkout",
        "Terraform-managed AWS infrastructure and deployment workflows",
      ],
      image: null,
    },
    {
      id: "launch-results",
      type: "content",
      heading: "Early Launch Results",
      paragraphs: [
        paragraph(
          normal("The product launched as a paid service at "),
          strong("$75 per report"),
          normal(
            " and processed 56 invoices during the initial period: 46 through free access and 10 paid. Six Stripe customers purchased reports, and three of them returned to buy another report.",
          ),
        ),
      ],
      bullets: [],
      image: {
        src: instantMarketValueLaunchResultsImage,
        alt: "Early launch results: 56 total invoices, 10 paid invoices at $75, six paying customers, and three repeat customers.",
      },
    },
    {
      id: "report-flow",
      type: "content",
      heading: "Valuation & Checkout Flow",
      paragraphs: [
        paragraph(
          normal(
            "Before charging, the backend confirms that enough market data exists for the vehicle. It then normalizes active listings and recent sales, filters for like-kind vehicles, and adjusts the result for the user’s location, mileage, condition, and accident history.",
          ),
        ),
        paragraph(
          normal(
            "After checkout, the server generates a PDF with the valuation and supporting comparables, stores it in Amazon S3, and saves the completed job to the company dashboard.",
          ),
        ),
      ],
      bullets: [],
      image: {
        src: instantMarketValueReportFlowImage,
        alt: "Four-step report flow: gather vehicle details, find comparable listings, confirm checkout after market data is found, and deliver a saved PDF report.",
      },
    },
    {
      id: "shared-foundation",
      type: "content",
      heading: "Adapting a Shared Valuation Backend",
      paragraphs: [
        paragraph(
          normal(
            "I started from an internal valuation backend that included Diminished Value-specific routes, fields, and PDF templates. I separated the reusable market-data and comparable-selection foundation, removed product-specific behavior, and rebuilt the report flow around InstantMV’s requirements.",
          ),
        ),
        paragraph(
          normal(
            "I also made the InstantMV Terraform stack the source of truth for the shared PostgreSQL cache, reducing repeat calls to paid market-data APIs while keeping infrastructure changes reviewable.",
          ),
        ),
      ],
      bullets: [],
      image: null,
    },
    {
      id: "production-reliability",
      type: "content",
      heading: "Production Reliability",
      paragraphs: [
        paragraph(
          normal(
            "I continued improving the product after launch as real vehicles exposed gaps in third-party data. I added fallback VIN decoding, broader comparable searches, body-type and version matching, payment failure handling, and request logging with safe shop and user context.",
          ),
        ),
      ],
      bullets: [
        "Jest coverage for valuation, auth, checkout, reports, caching, and logs",
        "Vitest component tests and Playwright guest-checkout coverage",
        "CloudWatch logs and health checks for the production API",
      ],
      image: null,
    },
    {
      id: "what-id-improve",
      type: "content",
      heading: "What I’d Improve",
      paragraphs: [
        paragraph(
          normal(
            "The usage database is shared across environments, which makes production-only reporting harder than it should be. I would add an environment field to every usage event and track each report through preflight, payment, generation, and delivery so product conversion and failures could be measured from one place.",
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
          value: "February–July 2026 initial build and launch, followed by ongoing maintenance",
          href: null,
        },
        {
          label: "Stack",
          value: "React, TypeScript, Node.js, Express, PostgreSQL, Stripe, AWS, Terraform",
          href: null,
        },
        {
          label: "Live Site",
          value: "View Instant Market Value",
          href: "https://instantmv.com/",
        },
      ],
    },
  ],
};
