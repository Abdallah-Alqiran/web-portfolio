import { lazy, Suspense } from "react";
import Nav from "../layouts/nav";

// Lazy loaded components
const Home = lazy(() => import("../pages/home"));
const About = lazy(() => import("../pages/about"));
const Education = lazy(() => import("../pages/education"));
const Skills = lazy(() => import("../pages/skills"));
const Technology = lazy(() => import("../pages/technology"));
const Projects = lazy(() => import("../pages/projects"));
const Courses = lazy(() => import("../pages/courses"));
const Experience = lazy(() => import("../pages/experience"));
const Contact = lazy(() => import("../pages/contact"));

export default function HomePage() {
  return (
    <>
      <Nav />
      <Suspense fallback={<div className="text-center mt-10 text-gray-400">Loading...</div>}>
        <Home />
        <About />
        <Education />
        <Skills />
        <Technology />
        <Projects />
        <Courses />
        <Experience />
        <Contact />
      </Suspense>
    </>
  );
}
