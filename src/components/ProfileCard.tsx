import coverImage from "../assets/cover.png";
import profileImage from "../assets/profile.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { TbDownload } from "react-icons/tb";
import { TbMailFilled } from "react-icons/tb";

function ProfileCard() {
  return (
    <aside className="relative block h-auto w-full gap-0 self-start overflow-hidden rounded-lg border border-card-border bg-card min-[785px]:relative min-[785px]:block min-[785px]:h-auto min-[1209px]:flex min-[1209px]:h-122 min-[1209px]:sticky min-[1209px]:top-8 min-[1209px]:w-74 min-[1209px]:shrink-0 min-[1209px]:flex-col min-[1209px]:items-stretch min-[1209px]:justify-between">
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
    <div className="w-full flex flex-col items-center justify-start p-6 gap-1 text-center min-[785px]:relative min-[785px]:z-10 min-[785px]:flex-none min-[785px]:items-start min-[785px]:justify-start min-[785px]:text-left min-[1209px]:static min-[1209px]:items-center min-[1209px]:justify-start min-[1209px]:text-center">
      <img
        src={profileImage}
        alt="Ace Lowder"
        className="size-48 rounded-full border-6 border-card object-cover"
      />
      <h1 className="text-3xl">Ace Lowder</h1>
      <p>Software Engineer</p>
    </div>
  );
}

function Socials() {
  return (
    <div className="absolute inset-y-0 right-6 z-10 flex flex-col items-center justify-center bg-transparent min-[785px]:top-auto min-[785px]:bottom-6 min-[785px]:translate-y-0 min-[785px]:flex-row min-[785px]:items-center min-[785px]:gap-6 min-[785px]:p-0 min-[1209px]:static min-[1209px]:z-10 min-[1209px]:flex-col min-[1209px]:items-center min-[1209px]:justify-center min-[1209px]:gap-6 min-[1209px]:p-6">
      <nav
        aria-label="Social links"
        className="flex flex-col gap-4 min-[785px]:flex-row"
      >
        <a
          href="https://github.com/ace-lowder"
          target="_blank"
          rel="noreferrer"
          aria-label="Open Ace Lowder on GitHub"
          className="cursor-pointer rounded p-1 text-primary transition-colors hover:bg-gray-200 focus-visible:bg-gray-50"
        >
          <FaGithub className="size-6 scale-90" aria-hidden="true" />
        </a>
        <a
          href="https://www.linkedin.com/in/ace-lowder/"
          target="_blank"
          rel="noreferrer"
          aria-label="Open Ace Lowder on LinkedIn"
          className="cursor-pointer rounded p-1 text-primary transition-colors hover:bg-gray-200 focus-visible:bg-gray-50"
        >
          <FaLinkedin className="size-6 scale-100" aria-hidden="true" />
        </a>
        <a
          href="mailto:ace.lowder@gmail.com"
          aria-label="Email Ace Lowder"
          className="cursor-pointer rounded p-1 text-primary transition-colors hover:bg-gray-200 focus-visible:bg-gray-50"
        >
          <TbMailFilled className="size-6 scale-105" aria-hidden="true" />
        </a>
      </nav>
      <a
        href="https://www.google.com/"
        target="_blank"
        rel="noreferrer"
        className="hidden cursor-pointer items-center gap-2 rounded-md bg-primary px-5 py-2 font-medium text-white transition-opacity hover:opacity-90 focus-visible:opacity-90 min-[785px]:inline-flex"
      >
        <TbDownload className="size-5 scale-100" aria-hidden="true" />
        Download Resume
      </a>
    </div>
  );
}
