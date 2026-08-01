import { useState } from "react";
import CaseStudyPanel from "./components/CaseStudyPanel";
import ProfileCard from "./components/ProfileCard";
import ProjectCard from "./components/ProjectCard";
import { PROJECT_NAMES, type ProjectName } from "./content/projects";
import ResponsiveOverlay from "./components/ResponsiveOverlay";

function App() {
  const [activeProject, setActiveProject] = useState<ProjectName | null>(null);

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

export default App;
