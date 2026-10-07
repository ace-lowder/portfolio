import profileImage from "../assets/profile.png";
import { FiDownload, FiGithub, FiMail } from "react-icons/fi";
import { TbBrandLinkedin, TbBulb } from "react-icons/tb";

function ProfileCard({ onOpenSkills }: { onOpenSkills: () => void }) {
  return (
    <aside className="flex w-full flex-col items-start gap-5">
      <Profile />
      <Socials onOpenSkills={onOpenSkills} />
    </aside>
  );
}

export default ProfileCard;

// === Components ===

function Profile() {
  return (
    <div className="mt-4 flex w-full flex-col items-start justify-start gap-1 text-left">
      <img
        src={profileImage}
        alt="Portrait of Ace Lowder"
        decoding="async"
        className="size-20 rounded-full object-cover"
      />
      <h1 className="mt-4 text-[1.8rem] font-bold uppercase text-white">
        Ace Lowder
      </h1>
      <p className="text-[2.75rem] font-bold text-white">
        Full Stack Software Engineer
      </p>
      <p className="flex flex-wrap justify-start text-[#a0a0a0]">
        Full-stack engineer building production SaaS across frontend, backend,
        and cloud infrastructure. I own projects from planning through
        deployment, turning business requirements into reliable software.
      </p>
    </div>
  );
}

function Socials({ onOpenSkills }: { onOpenSkills: () => void }) {
  return (
    <div className="flex w-full flex-wrap items-center justify-between gap-3">
      <div className="flex flex-wrap items-center gap-3">
        <a
          href="/ace-lowder-resume.pdf"
          download="Ace-Lowder-Resume.pdf"
          className="inline-flex h-12 cursor-pointer items-center gap-2 rounded-full bg-white px-5 text-xs font-semibold text-[#1e1e1e] transition-opacity hover:opacity-80 focus-visible:opacity-90"
        >
          <FiDownload className="size-4" strokeWidth={2.5} aria-hidden="true" />
          Download Resume
        </a>
        <nav aria-label="Contact and social links" className="flex flex-wrap gap-2">
          <a
            href="https://www.linkedin.com/in/ace-lowder/"
            target="_blank"
            rel="noreferrer"
            aria-label="Open Ace Lowder on LinkedIn"
            className="inline-flex h-12 cursor-pointer items-center gap-2 rounded-full border border-[#3c3c3c] px-5 text-xs font-semibold text-[#d4d4d4] transition-colors hover:bg-[#2a2d2e] focus-visible:bg-[#2a2d2e]"
          >
            <TbBrandLinkedin
              className="size-5"
              strokeWidth={1.5}
              aria-hidden="true"
            />
            LinkedIn
          </a>
          <a
            href="https://github.com/ace-lowder"
            target="_blank"
            rel="noreferrer"
            aria-label="Open Ace Lowder on GitHub"
            className="inline-flex h-12 cursor-pointer items-center gap-2 rounded-full border border-[#3c3c3c] px-5 text-xs font-semibold text-[#d4d4d4] transition-colors hover:bg-[#2a2d2e] focus-visible:bg-[#2a2d2e]"
          >
            <FiGithub className="size-4" strokeWidth={2} aria-hidden="true" />
            GitHub
          </a>
          <a
            href="mailto:ace.lowder@gmail.com"
            aria-label="Email Ace Lowder"
            className="inline-flex h-12 cursor-pointer items-center gap-2 rounded-full border border-[#3c3c3c] px-5 text-xs font-semibold text-[#d4d4d4] transition-colors hover:bg-[#2a2d2e] focus-visible:bg-[#2a2d2e]"
          >
            <FiMail className="size-4" strokeWidth={2} aria-hidden="true" />
            Email
          </a>
        </nav>
      </div>
      <button
        type="button"
        onClick={onOpenSkills}
        aria-haspopup="dialog"
        className="inline-flex h-12 cursor-pointer items-center gap-2 rounded-full border border-[#3c3c3c] px-5 text-xs font-semibold text-[#d4d4d4] transition-colors hover:bg-[#2a2d2e] focus-visible:bg-[#2a2d2e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <TbBulb className="size-5" strokeWidth={1.5} aria-hidden="true" />
        Skills
      </button>
    </div>
  );
}
