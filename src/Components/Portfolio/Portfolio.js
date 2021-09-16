import HeroSection from "./HeroSection";
import TechnologyStack from "./TechnologyStack";
import Projects from "./Projects/Projects";
import CTA from "./CTA";

function Portfolio() {
  return (
    <div className="Portfolio">
      <HeroSection />
      <TechnologyStack />
      <Projects />
      <CTA />
    </div>
  );
}

export default Portfolio;
