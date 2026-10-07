import { contentSection, normal, paragraph, type CaseStudy } from "../caseStudy";

export const crashCaseStudy: CaseStudy = {
  sections: [
    contentSection(
      "Overview",
      paragraph(normal("Crash is an existing production platform with customer account, subscription, and billing workflows.")),
    ),
    contentSection(
      "Problem",
      paragraph(normal("Billing and account-access failures could involve the application, its data stores, or external services. Supporting the product meant tracing those paths through an unfamiliar codebase.")),
    ),
    contentSection(
      "My Role",
      paragraph(normal("At KriTech, I took over maintenance of the Azure-hosted application and investigated production issues across its frontend, Node.js services, and integrations.")),
    ),
    contentSection(
      "Implementation",
      paragraph(normal("I traced account and billing behavior across Node.js, MongoDB, Redis, Salesforce, and Stripe. I also expanded Jest integration tests and Playwright end-to-end coverage for important workflows.")),
    ),
    contentSection(
      "Challenges",
      paragraph(normal("The first task was understanding how an existing system and its external services handled customer state before making changes to production behavior.")),
    ),
    contentSection(
      "Results",
      paragraph(normal("I helped keep the production platform operating while adding automated coverage around the workflows most likely to affect customer access and billing.")),
    ),
  ],
};
