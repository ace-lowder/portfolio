import { contentSection, normal, paragraph, type CaseStudy } from "../caseStudy";

export const updateTagsCaseStudy: CaseStudy = {
  sections: [
    contentSection(
      "Overview",
      paragraph(normal("UpdateTags is a SaaS app that generates tailored search tags from Etsy product listings. Sellers can save past generations and manage a subscription in the same product.")),
    ),
    contentSection(
      "Problem",
      paragraph(normal("Writing listing tags by hand takes time, and a usable paid tool needs more than a generation form: accounts, billing, history, and usage limits all have to work together.")),
    ),
    contentSection(
      "My Role",
      paragraph(normal("I built and launched UpdateTags independently, taking it from idea through design, application development, billing, and deployment.")),
    ),
    contentSection(
      "Implementation",
      paragraph(normal("The Next.js/TypeScript app uses OpenAI for tag generation, Supabase and PostgreSQL for authentication and saved data, and Stripe for subscriptions. I implemented account-level usage limits, billing management, plan changes, cancellations, support tools, and a blog.")),
    ),
    contentSection(
      "Challenges",
      paragraph(normal("AI generation had to respect each account's plan while billing state could change through upgrades or cancellations. I tied usage limits and billing management to the account instead of treating the generator as a stand-alone feature.")),
    ),
    contentSection(
      "Results",
      paragraph(normal("The product is live with a complete customer account and subscription flow. I continue improving it while testing customer acquisition.")),
    ),
  ],
};
