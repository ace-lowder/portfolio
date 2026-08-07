import { useCallback, useEffect, useState } from "react";
import CaseStudyPanel from "./components/CaseStudyPanel";
import ProfileCard from "./components/ProfileCard";
import ProjectCard from "./components/ProjectCard";
import {
  getProjectNameByPath,
  PROJECT_NAMES,
  PROJECTS_BY_NAME,
  type ProjectName,
} from "./content/projects";
import ResponsiveOverlay from "./components/ResponsiveOverlay";

const PORTFOLIO_TITLE = "Ace Lowder | Software Engineer";

function App() {
  const { activeProject, openProject, closeProject } = useProjectRoute();

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
              onOpen={() => openProject(projectName)}
            />
          ))}
        </section>
      </main>
      <CaseStudyPanel
        activeProject={activeProject}
        onOpenProject={openProject}
        onClose={closeProject}
      />
    </>
  );
}

export default App;

function useProjectRoute() {
  const [activeProject, setActiveProject] = useState<ProjectName | null>(() =>
    getProjectNameByPath(window.location.pathname),
  );

  useEffect(() => {
    function handlePopState() {
      setActiveProject(getProjectNameByPath(window.location.pathname));
    }

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    document.title = activeProject
      ? `${activeProject} Case Study | Ace Lowder`
      : PORTFOLIO_TITLE;
  }, [activeProject]);

  const openProject = useCallback((projectName: ProjectName) => {
    window.history.pushState(null, "", PROJECTS_BY_NAME[projectName].path);
    setActiveProject(projectName);
  }, []);

  const closeProject = useCallback(() => {
    window.history.pushState(null, "", "/");
    setActiveProject(null);
  }, []);

  return { activeProject, openProject, closeProject };
}
