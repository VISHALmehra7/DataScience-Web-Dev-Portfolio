import "./App.css";
import Navbar from "./components/NavbarComponents/Navbar";
import ContactSection from "./pages/ContactSection";
import EducationSection from "./pages/EducationSection";
import HeroSection from "./pages/HeroSection";
import MyProjects from "./pages/MyProjects";
import ResumeSection from "./pages/ResumeSection";
import SkillSection from "./pages/SkillSection";

function App() {
  return (
    <div className="min-h-screen w-screen dark:bg-black overflow-y-auto bg-white text-black dark:text-white transition-colors duration-800 ease-in-out">
      <div className="max-w-[700px] pl-6 pr-6 flex flex-col items-center justify-center m-auto gap-14 ">
        <Navbar />
        <HeroSection />
        <MyProjects />
        <SkillSection />
        <EducationSection />
        <ResumeSection />
        <ContactSection />
      </div>
    </div>
  );
}

export default App;
