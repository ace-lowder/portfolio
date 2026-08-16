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
      <main className="mx-auto flex w-full max-w-[1604px] flex-col gap-8 px-6 py-12 md:px-8 xl:px-12">
        <ProfileCard />
        <section
          aria-label="Projects"
          className="grid min-w-0 flex-1 grid-cols-1 gap-8 border-t border-gray-200 pt-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {PROJECT_NAMES.map((projectName) => (
            <ProjectCard
              key={projectName}
              projectName={projectName}
              showProjectType
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
