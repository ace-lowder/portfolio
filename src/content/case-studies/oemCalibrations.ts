import { contentSection, normal, paragraph, strong, type CaseStudy } from "../caseStudy";

export const oemCalibrationsCaseStudy: CaseStudy = {
  sections: [
    contentSection(
      "Overview",
      paragraph(normal("An automated repair-quoting platform for a major automotive partner. It uses repair documents and vehicle information to generate quotes for auto body shops.")),
    ),
    contentSection(
      "Problem",
      paragraph(normal("The quoting workflow depended on people interpreting repair documents and matching vehicle details. The partner needed that work turned into a repeatable service that could support a wider rollout.")),
    ),
    contentSection(
      "My Role",
      paragraph(normal("At KriTech, I owned the backend API architecture and cloud deployment. I worked on the boundary between partner-owned code and KriTech's proprietary processing services.")),
    ),
    contentSection(
      "Implementation",
      paragraph(normal("I architected multiple Node.js/Express REST APIs for PDF parsing and vehicle matching, then deployed the containerized platform to AWS ECS/Fargate with Terraform and GitHub Actions.")),
    ),
    contentSection(
      "Challenges",
      paragraph(normal("The services had to keep partner-owned functionality separate from proprietary logic while handling concurrent quote requests. I configured autoscaling and load-tested 100 simultaneous quote generations.")),
    ),
    contentSection(
      "Results",
      paragraph(
        normal("The engineering delivery supported a "),
        strong("$1M partner contract"),
        normal(". I monitored a pilot across 20 auto body shops ahead of the broader rollout."),
      ),
    ),
  ],
};
