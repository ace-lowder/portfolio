import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import ResponsiveOverlay from "./ResponsiveOverlay";

const PROJECT_NAMES = [
  "UpdateTags",
  "DIFF",
  "Journal of Inquiry",
  "Instant Market Value",
] as const;

type ProjectName = (typeof PROJECT_NAMES)[number];

function App() {
  const [activeProject, setActiveProject] = useState<ProjectName | null>(null);
  const caseStudyOpen = activeProject !== null;

  useEffect(() => {
    if (!caseStudyOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [caseStudyOpen]);

  return (
    <>
      {import.meta.env.DEV && <ResponsiveOverlay />}
      <main className="mx-auto flex w-full max-w-150 flex-col gap-8 px-8 py-8 min-[785px]:w-3xl min-[785px]:max-w-none min-[1209px]:w-298 min-[1209px]:flex-row">
        <ProfileCard />
        <section className="grid min-w-0 flex-1 grid-cols-1 gap-8 min-[785px]:grid-cols-2">
          {PROJECT_NAMES.map((projectName) => (
            <ProjectCard
              key={projectName}
              projectName={projectName}
              onOpen={() => setActiveProject(projectName)}
            />
          ))}
        </section>
      </main>
      <CaseStudyPanel
        activeProject={activeProject}
        onOpenProject={(projectName) => setActiveProject(projectName)}
        onClose={() => setActiveProject(null)}
      />
    </>
  );
}

function ProfileCard() {
  return (
    <aside className="grid h-130 w-full grid-cols-1 grid-rows-2 gap-0 self-start min-[785px]:grid-cols-2 min-[785px]:grid-rows-1 min-[1209px]:sticky min-[1209px]:top-8 min-[1209px]:w-82 min-[1209px]:shrink-0 min-[1209px]:grid-cols-1 min-[1209px]:grid-rows-2">
      <div className="bg-red-200" />
      <div className="bg-blue-200" />
    </aside>
  );
}

function ProjectCard({
  projectName,
  onOpen,
}: {
  projectName: ProjectName;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      className="group relative aspect-19/16 cursor-pointer overflow-hidden bg-green-200 text-left"
      onClick={onOpen}
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-15.5 bg-linear-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />
      <span className="absolute bottom-4 left-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
        {projectName}
      </span>
    </button>
  );
}

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
        aria-label={open ? `${activeProject} case study` : "Project case study"}
        className={`fixed inset-x-0 bottom-0 top-0 z-40 overscroll-contain overflow-y-auto bg-white transition-transform duration-300 ease-out min-[785px]:top-12 ${
          open
            ? "pointer-events-auto translate-y-0"
            : "pointer-events-none translate-y-full"
        }`}
      >
        <header className="sticky top-0 z-10 bg-white">
          <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-8 py-8">
            <h1>{activeProject}</h1>
            <button
              type="button"
              aria-label="Close project case study"
              className="cursor-pointer text-black/60 hover:text-black min-[785px]:hidden"
              onClick={onClose}
            >
              <FiX className="size-6" />
            </button>
          </div>
        </header>

        <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-8 pb-8">
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

export default App;
