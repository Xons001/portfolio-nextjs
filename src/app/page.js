import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <div className="container mx-auto px-14 py-4">
        <Navbar />
        <HeroSection />
      </div>
    </main>
  );
}
