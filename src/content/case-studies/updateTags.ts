import { normal, paragraph, type CaseStudy } from "../caseStudy";

export const updateTagsCaseStudy: CaseStudy = {
  sections: [
    {
      id: "summary",
      type: "content",
      paragraphs: [
        paragraph(
          normal(
            "UpdateTags is a SaaS app that helps Etsy sellers generate tailored search tags for their product listings. I built and launched it as a solo project to practice taking a small SaaS idea all the way from concept to a usable product. It includes authentication, saved history, Stripe billing, usage limits, customer support tools, and an AI pipeline that generates tags within Etsy’s listing rules. I also added a blog for inbound marketing and built the surrounding customer experience instead of stopping at the core feature. The product is now live, and I’m using it to experiment with advertising and customer acquisition while continuing to improve it.",
          ),
        ),
      ],
      bullets: [],
      image: null,
    },
  ],
};
