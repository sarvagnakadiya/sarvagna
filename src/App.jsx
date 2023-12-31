import Navbar from "./components/Navbar";
import { WagmiConfig, createConfig } from "wagmi";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import AboutPage from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Education from "./components/Education";
const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    alchemyId: "O5NYvtwLMNG0LjAXPQEk0YJT2l3UxTAY", // or infuraId
    walletConnectProjectId: "4c1fb4009a66dfd6a5f0c2babec3254b",

    // Required
    appName: "Your App Name",

    // Optional
    appDescription: "Your App Description",
    appUrl: "https://family.co", // your app's url
    appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
  })
);

function App() {
  return (
    <>
      <WagmiConfig config={config}>
        <ConnectKitProvider>
          <Navbar></Navbar>
          <AboutPage />
          <Projects />
          <Skills />
          <Education />
          <Footer />
        </ConnectKitProvider>
      </WagmiConfig>
    </>
  );
}

export default App;
