import {
  normal,
  paragraph,
  strong,
  type CaseStudy,
} from "../caseStudy";

export const updateTagsCaseStudy: CaseStudy = {
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
                "Etsy gives sellers 13 short tag slots, but product descriptions also contain shipping details, policies, dimensions, and other text that does not belong in search tags. Sellers need relevant phrases they can copy quickly and keep testing across their listings.",
              ),
            ),
          ],
        },
        {
          heading: "Role & Status",
          paragraphs: [
            paragraph(
              normal("I designed, built, and launched the product as a "),
              strong("solo personal project"),
              normal(
                ". It is currently live as Tagloom; UpdateTags is the planned next brand and broader product direction.",
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
            "I built a full SaaS product around the generator, including authentication, saved history, usage limits, paid plans, feedback, support content, and the internal tools needed to operate it.",
          ),
        ),
      ],
      bullets: [
        "Listing generator with title and optional description input",
        "Email, password, and Google authentication through Supabase",
        "Free, one-time, monthly, and yearly generation access",
        "Sortable history with draft recovery, archive, and restore actions",
        "Stripe checkout, plan switching, subscription state, and billing portal",
        "Feedback, support, error, usage, and health dashboards",
      ],
      image: null,
    },
    {
      id: "generation-quality",
      type: "content",
      heading: "Building a Quality Pipeline",
      paragraphs: [
        paragraph(
          normal(
            "A single prompt produced inconsistent tags when listing descriptions contained policies or fulfillment details. I built a pipeline that cleans and compacts the listing first, then separates likely buyer searches from broader discovery phrases across two model requests.",
          ),
        ),
        paragraph(
          normal(
            "The backend normalizes the result, removes weak or repeated phrases, enforces Etsy’s 20-character limit, and fills missing positions from relevant listing keywords so each successful result contains 13 usable tags.",
          ),
        ),
      ],
      bullets: [],
      image: null,
    },
    {
      id: "billing-reliability",
      type: "content",
      heading: "Protecting Paid AI Usage",
      paragraphs: [
        paragraph(
          normal(
            "Every generation has a real model cost and may consume a free credit, starter credit, or subscription allowance. The API reserves that access in PostgreSQL before calling OpenAI and refunds the exact entitlement if generation or saving fails.",
          ),
        ),
        paragraph(
          normal(
            "Stripe webhooks are claimed and deduplicated before updating the account. Checkout, invoices, renewals, cancellations, and plan changes are reconciled with Stripe so a delayed or repeated event cannot silently grant the wrong access.",
          ),
        ),
      ],
      bullets: [],
      image: null,
    },
    {
      id: "benchmarking",
      type: "content",
      heading: "Benchmarking Tag Quality",
      paragraphs: [
        paragraph(
          normal(
            "I saved 10 benchmark iterations while tuning the generation pipeline. Version 1.9 ran 30 listings from 10 Etsy categories twice—once with the full description and once with only the title—for 60 total generations.",
          ),
        ),
        paragraph(
          normal(
            "Every result averaged 13 tags, with no oversized, duplicate, or one-word tags. These checks prove consistent structure, but they do not prove search ranking or sales; that still requires real seller outcomes.",
          ),
        ),
      ],
      bullets: [],
      image: null,
    },
    {
      id: "operations",
      type: "content",
      heading: "Operating the Product",
      paragraphs: [
        paragraph(
          normal(
            "I added admin views for signups, generations, feedback, support messages, and production errors instead of relying on separate vendor dashboards. Users can rate generated tags, search the support center, or send a support request that is stored and delivered by email.",
          ),
        ),
        paragraph(
          normal("The current repository has "),
          strong("325 passing tests across 54 test files"),
          normal(
            ", covering generation, usage access, billing, auth, history, feedback, support, analytics, protection, and interface behavior.",
          ),
        ),
      ],
      bullets: [],
      image: null,
    },
    {
      id: "what-id-improve",
      type: "content",
      heading: "What I’d Improve",
      paragraphs: [
        paragraph(
          normal(
            "The current product is built specifically around Etsy’s fields and tag limits. Before expanding it, I would introduce platform profiles so each marketplace owns its input fields, limits, prompts, and validation rules instead of scattering platform checks through the generator.",
          ),
        ),
        paragraph(
          normal(
            "I would also migrate existing accounts and generation history carefully during the UpdateTags rename, then measure free-to-paid conversion and collect seller feedback. The benchmark verifies output structure, but the next useful proof is whether someone pays for the product and improves a real listing workflow.",
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
          value: "March–July 2026 initial development and launch",
          href: null,
        },
        {
          label: "Stack",
          value: "Next.js, TypeScript, OpenAI, Supabase, Stripe, Upstash, Vercel",
          href: null,
        },
        {
          label: "Current Site",
          value: "View the product currently branded Tagloom",
          href: "https://tagloom.app/",
        },
      ],
    },
  ],
};
