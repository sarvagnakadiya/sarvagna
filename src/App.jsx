import Navbar from "./components/Navbar";

import AboutPage from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Education from "./components/Education";
import Experience from "./components/Experience";
// import Achievements from "./components/Achievements";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <AboutPage />
      <Projects />
      {/* <Achievements /> */}
      <Skills />
      <Education />
      <Experience />
      <Footer />
      <SpeedInsights />
    </>
  );
}

export default App;
