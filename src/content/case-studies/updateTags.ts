import { normal, paragraph, type CaseStudy } from "../caseStudy";

export const updateTagsCaseStudy: CaseStudy = {
  sections: [
    {
      id: "summary",
      type: "content",
      paragraphs: [
        paragraph(
          normal(
            "UpdateTags is a SaaS app that helps Etsy sellers generate tailored search tags for their product listings. I built and launched it as a solo project, owning the product from idea through deployment. The app includes authentication, saved history, AI-generated tags, and a full Stripe subscription flow with secure billing, plan upgrades, cancellations, billing management, and usage limits tied to each account. I also built the surrounding customer experience, including support tools and a blog for inbound marketing. The product is live, and I’m continuing to improve it while testing customer acquisition.",
          ),
        ),
      ],
      bullets: [],
      image: null,
    },
  ],
};
