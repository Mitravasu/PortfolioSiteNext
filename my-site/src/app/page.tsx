import Education from "./components/Education";
import Experience from "./components/Experience";
import Intro from "./components/Intro";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main>
      <NavBar />
      <div className="pt-48 sm:py-8 min-h-screen snap-center" id="intro">
        <Intro />
      </div>
      <div className="min-h-screen snap-center" id="experience">
        <div className="pt-48 sm:py-8"></div>
        <Experience />
      </div>
      <div className="min-h-screen snap-center" id="education">
        <div className="pt-48 sm:py-8"></div>
        <Education />
      </div>
      <div className="min-h-screen snap-center" id="projects">
        <div className="pt-48 sm:py-8"></div>
        <Projects />
      </div>
      <div className="min-h-screen snap-center" id="skills">
        <div className="pt-48 sm:py-8"></div>
        <Skills />
      </div>
    </main>
  );
}
