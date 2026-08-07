import journalOfAcademicInquiryCoverImage from "../../assets/case-studies/journal-of-academic-inquiry/cover.png";
import journalOfAcademicInquiryImpactImage from "../../assets/case-studies/journal-of-academic-inquiry/impact.png";
import journalOfAcademicInquiryPaymentFlowImage from "../../assets/case-studies/journal-of-academic-inquiry/payment-flow.png";
import {
  type CaseStudy,
  type CaseStudyParagraph,
  type CaseStudyTextSegment,
} from "../caseStudy";

const normal = (text: string): CaseStudyTextSegment => ({
  text,
  emphasis: "normal",
});

const strong = (text: string): CaseStudyTextSegment => ({
  text,
  emphasis: "strong",
});

const paragraph = (
  ...segments: CaseStudyTextSegment[]
): CaseStudyParagraph => ({
  segments,
});

export const journalOfAcademicInquiryCaseStudy: CaseStudy = {
  coverImage: {
    src: journalOfAcademicInquiryCoverImage,
    alt: "Journal of Academic Inquiry website shown across desktop and mobile screens.",
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
                "The client had tested an academic coaching program in person and wanted to reach more students online. The platform needed to explain the program, accept payments, send enrollment emails, collect finished papers, and publish student work.",
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
                ", turning the client’s requirements into mockups and owning implementation, deployment, and ongoing maintenance.",
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
            "I built and continue to maintain the full platform, including the public website, enrollment and payment flow, automated emails, paper submissions, and article publishing.",
          ),
        ),
      ],
      bullets: [
        "Reusable layouts for landing, coaching, submission, issue, and article pages",
        "PayPal checkout and payment verification",
        "Automated enrollment and confirmation emails",
        "PDF paper submission forms",
        "Journal issue and article publishing system",
        "Netlify deployment and Google Workspace setup",
      ],
      image: null,
    },
    {
      id: "impact",
      type: "content",
      heading: "Impact",
      paragraphs: [
        paragraph(
          normal(
            "The platform gave the client a complete online path from enrollment to payment and helped support ",
          ),
          strong("$190,470 in sales over two years"),
          normal(
            ". Annual sales grew from $69,270 to $121,200, a 75% increase. It turned an in-person coaching program into a service the client could sell and manage online.",
          ),
        ),
      ],
      bullets: [],
      image: {
        src: journalOfAcademicInquiryImpactImage,
        alt: "Sales dashboard showing $121,200 in annual sales, up 74.97% from $69,270 the prior year.",
      },
    },
    {
      id: "payment-flow",
      type: "content",
      heading: "Payment & Enrollment Flow",
      paragraphs: [
        paragraph(
          normal(
            "Students needed to pay before their enrollment could be confirmed, but PayPal sends them away from the site during checkout. I built a flow that saves their enrollment information, creates the PayPal order on the server, and restores the enrollment when they return.",
          ),
        ),
        paragraph(
          normal(
            "After PayPal approves the payment, the site captures the order and verifies the amount and currency before sending confirmation emails to the student and client through Gmail. I tested the full process with PayPal Sandbox before launch.",
          ),
        ),
      ],
      bullets: [],
      image: {
        src: journalOfAcademicInquiryPaymentFlowImage,
        alt: "Four-step enrollment flow: a student signs up, pays with PayPal, the server verifies payment, and confirmation emails are sent.",
      },
    },
    {
      id: "ongoing-maintenance",
      type: "content",
      heading: "Ongoing Maintenance",
      paragraphs: [
        paragraph(
          normal(
            "After launch, I published new journal issues and updated the platform as the client’s program expanded. That included publishing four issues with 90 student articles, changing pricing and enrollment details, improving payment checks, filtering spam, blocking problem email domains, and reorganizing article data so future issues were easier to publish.",
          ),
        ),
      ],
      bullets: [
        "Four journal issues and 90 student articles",
        "Reusable templates for new articles and journal issues",
        "Fixes for payments, forms, email, and publishing",
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
            "The platform was built quickly around the client’s immediate needs, so I kept the architecture simple and avoided adding a database. That worked well at launch, but managing more articles, files, and enrollment records through the code has become less efficient as the program has grown.",
          ),
        ),
        paragraph(
          normal(
            "With more time, I would add a lightweight content management system so the client could publish issues, update pricing, and change program details without needing me to edit the site. I would also store enrollment records in a database and add more automated tests around payments and email delivery.",
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
          value: "Two-month initial build with ongoing maintenance",
          href: null,
        },
        {
          label: "Stack",
          value: "Next.js, TypeScript, Tailwind CSS, PayPal and Gmail APIs, Netlify",
          href: null,
        },
        {
          label: "Live Site",
          value: "View Journal of Academic Inquiry",
          href: "https://journalofinquiry.org/",
        },
      ],
    },
  ],
};
