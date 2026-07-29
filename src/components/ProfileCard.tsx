import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { RiFileDownloadFill } from "react-icons/ri";

function ProfileCard() {
  return (
    <aside className="grid h-130 w-full grid-cols-1 grid-rows-2 gap-0 self-start min-[785px]:grid-cols-2 min-[785px]:grid-rows-1 min-[1209px]:sticky min-[1209px]:top-8 min-[1209px]:w-82 min-[1209px]:shrink-0 min-[1209px]:grid-cols-1 min-[1209px]:grid-rows-2">
      <div className="bg-red-200" />
      <div className="relative bg-blue-200">
        <nav
          aria-label="Social links"
          className="absolute inset-x-0 bottom-0 flex justify-center gap-6 p-6 min-[785px]:justify-end min-[1209px]:justify-center"
        >
          <a
            href="https://www.linkedin.com/in/ace-lowder/"
            target="_blank"
            rel="noreferrer"
            aria-label="Open Ace Lowder on LinkedIn"
            className="cursor-pointer rounded p-1 transition-colors hover:bg-gray-50 focus-visible:bg-gray-50"
          >
            <FaLinkedin className="size-6" aria-hidden="true" />
          </a>
          <a
            href="https://github.com/ace-lowder"
            target="_blank"
            rel="noreferrer"
            aria-label="Open Ace Lowder on GitHub"
            className="cursor-pointer rounded p-1 transition-colors hover:bg-gray-50 focus-visible:bg-gray-50"
          >
            <FaSquareGithub className="size-6" aria-hidden="true" />
          </a>
          <a
            href="https://www.google.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Download Ace Lowder resume"
            className="cursor-pointer rounded p-1 transition-colors hover:bg-gray-50 focus-visible:bg-gray-50"
          >
            <RiFileDownloadFill className="size-6" aria-hidden="true" />
          </a>
        </nav>
      </div>
    </aside>
  );
}

export default ProfileCard;
