import coverImage from "../assets/cover.png";
import profileImage from "../assets/profile.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { TbDownload } from "react-icons/tb";
import { TbMailFilled } from "react-icons/tb";

function ProfileCard() {
  return (
    <aside className="flex h-130 w-full flex-col justify-between gap-0 self-start overflow-hidden rounded-lg border border-card-border bg-card min-[785px]:relative min-[785px]:block min-[785px]:h-auto min-[1209px]:flex min-[1209px]:h-130 min-[1209px]:sticky min-[1209px]:top-8 min-[1209px]:w-82 min-[1209px]:shrink-0 min-[1209px]:flex-col min-[1209px]:justify-between">
      <img
        src={coverImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-x-0 top-0 hidden h-30 w-full object-cover object-bottom min-[785px]:block min-[1209px]:hidden"
      />
      <Profile />
      <Socials />
    </aside>
  );
}

export default ProfileCard;

// === Components ===

function Profile() {
  return (
    <div className="flex flex-col items-center justify-start p-6 text-center min-[785px]:relative min-[785px]:z-10 min-[785px]:items-start min-[785px]:justify-start min-[785px]:text-left min-[1209px]:static min-[1209px]:items-center min-[1209px]:justify-start min-[1209px]:text-center">
      <img
        src={profileImage}
        alt="Ace Lowder"
        className="mb-2 size-48 rounded-full border-6 border-card object-cover"
      />
      <h1>Ace Lowder</h1>
      <p>Software Engineer</p>
    </div>
  );
}

function Socials() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 bg-transparent p-6 min-[785px]:absolute min-[785px]:bottom-6 min-[785px]:right-6 min-[785px]:z-10 min-[785px]:flex-row min-[785px]:items-center min-[785px]:gap-6 min-[785px]:p-0 min-[1209px]:static min-[1209px]:z-10 min-[1209px]:flex-col min-[1209px]:items-center min-[1209px]:justify-center min-[1209px]:gap-6 min-[1209px]:p-6">
      <nav aria-label="Social links" className="flex gap-4">
        <a
          href="https://github.com/ace-lowder"
          target="_blank"
          rel="noreferrer"
          aria-label="Open Ace Lowder on GitHub"
          className="cursor-pointer rounded p-1 text-primary transition-colors hover:bg-gray-50 focus-visible:bg-gray-50"
        >
          <FaGithub className="size-6" aria-hidden="true" />
        </a>
        <a
          href="https://www.linkedin.com/in/ace-lowder/"
          target="_blank"
          rel="noreferrer"
          aria-label="Open Ace Lowder on LinkedIn"
          className="cursor-pointer rounded p-1 text-primary transition-colors hover:bg-gray-50 focus-visible:bg-gray-50"
        >
          <FaLinkedin className="size-6" aria-hidden="true" />
        </a>
        <a
          href="mailto:ace.lowder@gmail.com"
          aria-label="Email Ace Lowder"
          className="cursor-pointer rounded p-1 text-primary transition-colors hover:bg-gray-50 focus-visible:bg-gray-50"
        >
          <TbMailFilled className="size-6" aria-hidden="true" />
        </a>
      </nav>
      <a
        href="https://www.google.com/"
        target="_blank"
        rel="noreferrer"
        className="inline-flex cursor-pointer items-center gap-2 rounded bg-primary px-4 py-2 font-medium text-white transition-opacity hover:opacity-90 focus-visible:opacity-90"
      >
        <TbDownload className="size-5" aria-hidden="true" />
        Download Resume
      </a>
    </div>
  );
}
