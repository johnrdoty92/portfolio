import HeroSection from "./HeroSection";
import TechnologyStack from "./TechnologyStack";
import Projects from "./Projects/Projects";
import CTA from "./CTA";
import { useRef } from "react";

function Portfolio() {
  const projectsRef = useRef(null);
  return (
    <>
      <HeroSection projectsRef={projectsRef}/>
      <TechnologyStack />
      <Projects projectsRef={projectsRef} />
      <CTA />
    </>
  );
}

export default Portfolio;
