import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { TbDownload } from "react-icons/tb";
import { TbMailFilled } from "react-icons/tb";

function ProfileCard() {
  return (
    <aside className="grid h-130 w-full grid-cols-1 grid-rows-2 gap-0 self-start min-[785px]:relative min-[785px]:block min-[785px]:h-auto min-[785px]:overflow-hidden min-[785px]:bg-blue-200 min-[1209px]:grid min-[1209px]:h-130 min-[1209px]:bg-transparent min-[1209px]:sticky min-[1209px]:top-8 min-[1209px]:w-82 min-[1209px]:shrink-0 min-[1209px]:grid-cols-1 min-[1209px]:grid-rows-2">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 hidden h-30 bg-red-200 min-[785px]:block min-[1209px]:hidden"
      />
      <ProfileIdentity />
      <ProfileActions />
    </aside>
  );
}

export default ProfileCard;

// === Components ===

function ProfileIdentity() {
  return (
    <div className="flex flex-col items-center justify-center bg-red-200 p-6 text-center min-[785px]:relative min-[785px]:z-10 min-[785px]:items-start min-[785px]:justify-start min-[785px]:bg-transparent min-[785px]:text-left min-[1209px]:static min-[1209px]:items-center min-[1209px]:justify-center min-[1209px]:bg-red-200 min-[1209px]:text-center">
      <div
        aria-hidden="true"
        className="size-32 rounded-full bg-gray-300 mb-4 border-6 border-white"
      />
      <h1>Ace Lowder</h1>
      <p>Software Engineer</p>
    </div>
  );
}

function ProfileActions() {
  return (
    <div className="flex flex-col items-center justify-end gap-6 bg-blue-200 p-6 min-[785px]:absolute min-[785px]:bottom-6 min-[785px]:right-6 min-[785px]:z-10 min-[785px]:flex-row min-[785px]:items-center min-[785px]:gap-6 min-[785px]:bg-transparent min-[785px]:p-0 min-[1209px]:static min-[1209px]:flex-col min-[1209px]:items-center min-[1209px]:justify-end min-[1209px]:gap-6 min-[1209px]:bg-blue-200 min-[1209px]:p-6">
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
