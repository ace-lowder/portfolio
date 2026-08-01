import { useEffect } from "react";
import { FiX } from "react-icons/fi";
import ProjectCard from "./ProjectCard";
import {
  PROJECT_NAMES,
  PROJECTS_BY_NAME,
  type ProjectName,
} from "../content/projects";

function CaseStudyPanel({
  activeProject,
  onOpenProject,
  onClose,
}: {
  activeProject: ProjectName | null;
  onOpenProject: (projectName: ProjectName) => void;
  onClose: () => void;
}) {
  const open = activeProject !== null;
  const activeProjectDetails = activeProject
    ? PROJECTS_BY_NAME[activeProject]
    : null;

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  return (
    <>
      <button
        type="button"
        aria-label="Close project case study"
        className={`group fixed inset-0 z-30 hidden cursor-pointer transition-colors duration-300 min-[785px]:block ${
          open
            ? "pointer-events-auto bg-gray-900/70"
            : "pointer-events-none bg-transparent"
        }`}
        onClick={onClose}
      >
        <FiX
          className={`absolute right-4 top-3 size-6 text-white/60 transition-transform duration-300 ease-out ${
            open
              ? "translate-y-0 hover:text-white group-focus-visible:text-white"
              : "translate-y-[calc(100vh-3rem)]"
          }`}
        />
      </button>
      <section
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        aria-label={
          open
            ? `${activeProjectDetails?.name ?? activeProject} case study`
            : "Project case study"
        }
        className={`fixed inset-x-0 bottom-0 top-0 z-40 overscroll-contain overflow-y-auto bg-white transition-transform duration-300 ease-out min-[785px]:top-12 ${
          open
            ? "pointer-events-auto translate-y-0"
            : "pointer-events-none translate-y-full"
        }`}
      >
        <header className="sticky top-0 z-10 bg-white">
          <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-8 py-8 min-[785px]:w-3xl min-[785px]:max-w-none min-[1209px]:w-full min-[1209px]:max-w-5xl">
            <div className="min-w-0 flex-1">
              <h1>{activeProjectDetails?.name}</h1>
              <p className="text-lg">{activeProjectDetails?.subtitle}</p>
            </div>
            <button
              type="button"
              aria-label="Close project case study"
              className="cursor-pointer text-black/60 hover:text-black min-[785px]:hidden shrink-0 self-start"
              onClick={onClose}
            >
              <FiX className="size-6" />
            </button>
          </div>
        </header>

        <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-8 pb-8 min-[785px]:w-3xl min-[785px]:max-w-none min-[1209px]:w-full min-[1209px]:max-w-5xl">
          {activeProjectDetails?.caseStudyCoverImage ? (
            <img
              src={activeProjectDetails.caseStudyCoverImage.src}
              alt={activeProjectDetails.caseStudyCoverImage.alt}
              className="block w-full rounded-md"
            />
          ) : null}
          <div className="space-y-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
              nec, ultricies sed, dolor.
            </p>
            <p>
              Cras elementum ultrices diam. Maecenas ligula massa, varius a,
              semper congue, euismod non, mi. Proin porttitor, orci nec nonummy
              molestie, enim est eleifend mi, non fermentum diam nisl sit amet
              erat.
            </p>
          </div>

          <div className="hidden min-[785px]:block">
            <h2 className="mb-8">More projects</h2>
            <section className="grid grid-cols-2 gap-8 min-[1209px]:grid-cols-4">
              {PROJECT_NAMES.map((projectName) => (
                <ProjectCard
                  key={projectName}
                  projectName={projectName}
                  onOpen={() => onOpenProject(projectName)}
                />
              ))}
            </section>
          </div>
        </div>
      </section>
    </>
  );
}

export default CaseStudyPanel;
