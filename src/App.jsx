import Navbar from "./components/Navbar";

import AboutPage from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Education from "./components/Education";
import Experience from "./components/Experience";
import { SpeedInsights } from "@vercel/speed-insights/react";
// const config = createConfig(
//   getDefaultConfig({
//     // Required API Keys
//     alchemyId: "O5NYvtwLMNG0LjAXPQEk0YJT2l3UxTAY", // or infuraId
//     walletConnectProjectId: "4c1fb4009a66dfd6a5f0c2babec3254b",

//     // Required
//     appName: "Your App Name",

//     // Optional
//     appDescription: "Your App Description",
//     appUrl: "https://family.co", // your app's url
//     appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
//   })
// );

function App() {
  return (
    <>
      <Navbar></Navbar>
      <AboutPage />
      <Projects />
      <Skills />
      <Education />
      <Experience />
      <Footer />
      <SpeedInsights />
    </>
  );
}

export default App;
