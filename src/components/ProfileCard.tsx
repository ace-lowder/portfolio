import profileImage from "../assets/profile.png";
import { FiDownload, FiGithub } from "react-icons/fi";
import { TbBrandLinkedin } from "react-icons/tb";

function ProfileCard() {
  return (
    <aside className="flex w-full flex-col items-start gap-5">
      <Profile />
      <Socials />
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
        alt="Ace Lowder"
        decoding="async"
        className="size-20 rounded-full object-cover"
      />
      <h1 className="mt-4 text-[1.8rem] font-bold uppercase">
        Ace Lowder
      </h1>
      <p className="text-[2.75rem] font-bold">Full Stack Software Engineer</p>
      <p className="flex flex-wrap justify-start gap-8 text-gray-500">
        <span>3+ years of experience</span>
        <span>4 case studies</span>
        <span>13 projects shipped</span>
      </p>
    </div>
  );
}

function Socials() {
  return (
    <div className="flex flex-col items-start gap-3 md:flex-row md:items-center">
      <a
        href="/ace-lowder-resume.pdf"
        download="Ace-Lowder-Resume.pdf"
        className="inline-flex h-12 cursor-pointer items-center gap-2 rounded-full bg-black px-5 text-xs font-semibold text-white transition-opacity hover:opacity-80 focus-visible:opacity-90"
      >
        <FiDownload className="size-4" strokeWidth={2.5} aria-hidden="true" />
        Download Resume
      </a>
      <nav aria-label="Social links" className="flex gap-2">
        <a
          href="https://www.linkedin.com/in/ace-lowder/"
          target="_blank"
          rel="noreferrer"
          aria-label="Open Ace Lowder on LinkedIn"
          className="inline-flex h-12 cursor-pointer items-center gap-2 rounded-full border border-gray-200 px-5 text-xs font-semibold text-black transition-colors hover:bg-gray-50 focus-visible:bg-gray-50"
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
          className="inline-flex h-12 cursor-pointer items-center gap-2 rounded-full border border-gray-200 px-5 text-xs font-semibold text-black transition-colors hover:bg-gray-50 focus-visible:bg-gray-50"
        >
          <FiGithub className="size-4" strokeWidth={2} aria-hidden="true" />
          GitHub
        </a>
      </nav>
    </div>
  );
}
