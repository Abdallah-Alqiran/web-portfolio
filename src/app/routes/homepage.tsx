import Nav from "../layouts/nav";
import About from "../pages/about";
import Contact from "../pages/contact";
import Courses from "../pages/courses";
import Education from "../pages/education";
import Experience from "../pages/experience";
import Home from "../pages/home";
import Projects from "../pages/projects";
import Skills from "../pages/skills";
import Technology from "../pages/technology";

export default function HomePage() {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Education />
      <Skills />
      <Technology />
      <Projects />
      <Courses />
      <Experience/>
      <Contact/>
    </>
  );
}
