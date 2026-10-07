import journalOfAcademicInquiryImpactImage from "../../assets/case-studies/journal-of-academic-inquiry-impact.png";
import {
  contentSection,
  imagePreview,
  normal,
  paragraph,
  strong,
  type CaseStudy,
} from "../caseStudy";

const paypalSalesImage = {
  src: journalOfAcademicInquiryImpactImage,
  alt: "PayPal sales dashboard showing $121,200 in annual sales, up 74.97% from $69,270 the prior year.",
  caption: "PayPal sales dashboard for the journal client. These are the client's sales, not my revenue.",
};

export const journalOfAcademicInquiryCaseStudy: CaseStudy = {
  sections: [
    contentSection(
      "Overview",
      paragraph(normal("The Journal of Academic Inquiry platform lets students enroll in writing coaching courses, pay online, and submit articles for publication. It also hosts published journal issues and student writing.")),
    ),
    contentSection(
      "Problem",
      paragraph(normal("The client needed enrollment, payment, student information, confirmation emails, and publication content to work together in one site rather than as separate manual steps.")),
    ),
    contentSection(
      "My Role",
      paragraph(normal("I built and continue to maintain the platform as the sole developer. I own the enrollment flow, PayPal integration, email automation, and published content.")),
    ),
    contentSection(
      "Implementation",
      paragraph(normal("I built the site with Next.js and TypeScript. Checkout preserves student information through the PayPal redirect and restores it when the student returns. The platform then sends confirmation emails to the student and client through Gmail, and it hosts journal issues and more than 90 student articles.")),
    ),
    contentSection(
      "Challenges",
      paragraph(normal("The payment redirect interrupts the normal page flow, so student details had to survive the round trip and still be available for accurate confirmations after checkout.")),
    ),
    contentSection(
      "Results",
      paragraph(
        normal("Over two years, the platform supported "),
        strong("$190K+ in customer purchases for the client"),
        normal(". A "),
        imagePreview("PayPal", paypalSalesImage),
        normal(" sales dashboard shows one year of those sales; the figure is the client's revenue, not my own."),
      ),
    ),
  ],
};
