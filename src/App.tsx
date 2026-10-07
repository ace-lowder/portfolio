import { useCallback, useEffect, useState } from "react";
import CaseStudyPanel from "./components/CaseStudyPanel";
import ProfileCard from "./components/ProfileCard";
import ProfessionalImpact from "./components/ProfessionalImpact";
import ProjectCard from "./components/ProjectCard";
import SkillsModal from "./components/SkillsModal";
import {
  CASE_STUDY_METADATA,
  PORTFOLIO_METADATA,
  SITE_URL,
  SOCIAL_PREVIEW_ALT,
  SOCIAL_PREVIEW_IMAGE,
} from "./content/projectMetadata";
import {
  COMPACT_PROJECT_NAMES,
  getProjectNameByPath,
  PROJECT_NAMES,
  PROJECTS_BY_NAME,
  type ProjectName,
} from "./content/projects";

const STANDARD_PROJECT_NAMES = PROJECT_NAMES.filter(
  (projectName) => !(COMPACT_PROJECT_NAMES as readonly ProjectName[]).includes(projectName),
);

function App() {
  const { activeProject, openProject, closeProject } = useProjectRoute();
  const [highlightedProject, setHighlightedProject] = useState<ProjectName | null>(null);
  const [skillsOpen, setSkillsOpen] = useState(false);

  return (
    <>
      <main inert={skillsOpen || Boolean(activeProject)} className="mx-auto flex w-full max-w-[1604px] flex-col gap-8 px-6 py-12 md:px-8 xl:px-12">
        <ProfileCard onOpenSkills={() => setSkillsOpen(true)} />
        <ProfessionalImpact
          onOpenProject={openProject}
          onHighlightProject={setHighlightedProject}
        />
        <section
          id="projects"
          aria-label="Projects"
          tabIndex={-1}
          className="grid min-w-0 flex-1 grid-cols-1 gap-8 focus:outline-none md:grid-cols-2 xl:grid-cols-3"
        >
          {STANDARD_PROJECT_NAMES.map((projectName) => (
            <ProjectCard
              key={projectName}
              projectName={projectName}
              onOpen={() => openProject(projectName)}
              isActive={activeProject === projectName}
              highlighted={highlightedProject === projectName}
              wide={projectName === "OEM Calibrations"}
            />
          ))}
          <div className="contents md:grid md:h-full md:min-w-0 md:grid-cols-1 md:grid-rows-2 md:gap-3 xl:contents">
            {COMPACT_PROJECT_NAMES.map((projectName) => (
              <ProjectCard
                key={projectName}
                projectName={projectName}
                onOpen={() => openProject(projectName)}
                isActive={activeProject === projectName}
                short
                stackedOnTablet
              />
            ))}
          </div>
        </section>
      </main>
      <CaseStudyPanel
        activeProject={activeProject}
        onOpenProject={openProject}
        onClose={closeProject}
      />
      <SkillsModal open={skillsOpen} onClose={() => setSkillsOpen(false)} />
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
    const metadata = activeProject ? CASE_STUDY_METADATA[activeProject] : PORTFOLIO_METADATA;
    const socialImage = activeProject ? CASE_STUDY_METADATA[activeProject].socialImage : undefined;
    const image = socialImage
      ? new URL(PROJECTS_BY_NAME[activeProject!].cardImage.src, SITE_URL).href
      : SOCIAL_PREVIEW_IMAGE;
    const imageAlt = socialImage?.alt ?? SOCIAL_PREVIEW_ALT;
    const url = activeProject ? `${SITE_URL}${CASE_STUDY_METADATA[activeProject].path}` : `${SITE_URL}/`;

    document.title = metadata.title;
    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonical) canonical.href = url;
    setMeta('meta[name="description"]', metadata.description);
    setMeta('meta[property="og:type"]', activeProject ? "article" : "website");
    setMeta('meta[property="og:url"]', url);
    setMeta('meta[property="og:title"]', metadata.title);
    setMeta('meta[property="og:description"]', metadata.description);
    setMeta('meta[property="og:image"]', image);
    setMeta('meta[property="og:image:alt"]', imageAlt);
    setMeta('meta[property="og:image:width"]', socialImage ? "1520" : "1200");
    setMeta('meta[property="og:image:height"]', socialImage ? "1280" : "630");
    setMeta('meta[name="twitter:title"]', metadata.title);
    setMeta('meta[name="twitter:description"]', metadata.description);
    setMeta('meta[name="twitter:image"]', image);
    setMeta('meta[name="twitter:image:alt"]', imageAlt);
  }, [activeProject]);

  const openProject = useCallback(
    (projectName: ProjectName) => {
      const path = PROJECTS_BY_NAME[projectName].path;

      if (activeProject) {
        window.history.replaceState(window.history.state, "", path);
      } else {
        window.history.pushState({ portfolioCaseStudy: true }, "", path);
      }

      setActiveProject(projectName);
    },
    [activeProject],
  );

  const closeProject = useCallback(() => {
    if (window.history.state?.portfolioCaseStudy) {
      window.history.back();
      return;
    }

    window.history.replaceState(null, "", "/");
    setActiveProject(null);
  }, []);

  return { activeProject, openProject, closeProject };
}

function setMeta(selector: string, content: string) {
  const element = document.querySelector<HTMLMetaElement>(selector);
  if (element) element.content = content;
}
