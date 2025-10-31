import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from "./components/Navbar/navbar";
import Header from "./components/Header/header";
import About from "./components/About/about";
import Skills from "./components/Skills/skills";
import Education from "./components/Education/education";
import Experience from "./components/Experience/experience";
import Projects from "./components/Projects/projects";
import Activities from "./components/Activities/activities";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import AnimatedBackground from "./components/AnimatedBackground";

function App() {
  return (
    <LanguageProvider>
      <div className="app">
        <AnimatedBackground>
          <Navbar />
          <Header />
          <About />
          <Skills />
          <Education />
          <Experience />
          <Projects />
          <Activities />
          <Contact />
          <Footer />
        </AnimatedBackground>
      </div>
    </LanguageProvider>
  );
}

export default App;