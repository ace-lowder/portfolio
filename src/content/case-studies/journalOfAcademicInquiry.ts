import journalOfAcademicInquiryImpactImage from "../../assets/case-studies/journal-of-academic-inquiry/impact.png";
import {
  imagePreview,
  normal,
  paragraph,
  strong,
  type CaseStudy,
} from "../caseStudy";

const paypalSalesImage = {
  src: journalOfAcademicInquiryImpactImage,
  alt: "Sales dashboard showing $121,200 in annual sales, up 74.97% from $69,270 the prior year.",
};

export const journalOfAcademicInquiryCaseStudy: CaseStudy = {
  sections: [
    {
      id: "summary",
      type: "content",
      paragraphs: [
        paragraph(
          normal(
            "The Journal of Academic Inquiry is a website where students can enroll in writing coaching courses and submit articles for publication. I built and continue to maintain the platform as the sole developer, owning the enrollment flow, payments, email automation, and published content. The site uses PayPal checkout while preserving student information through the redirect and restoring it when they return, then sends automated confirmation emails through Gmail to both the student and client. It also hosts published journal issues and more than 90 student articles. In the two years since launch, the platform has supported ",
          ),
          strong("over $190,000 in client sales"),
          normal(" on "),
          imagePreview("PayPal", paypalSalesImage),
          normal("."),
        ),
      ],
      bullets: [],
      image: null,
    },
  ],
};
