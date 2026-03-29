import AboutSection from "./components/AboutSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip">
      <div className="mx-auto w-full max-w-[1480px] px-6 pb-8 pt-4 md:px-8 xl:px-10">
        <Navbar />
        <div className="pt-24 md:pt-28">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <EmailSection />
        </div>
        <Footer />
      </div>
    </main>
  );
}
