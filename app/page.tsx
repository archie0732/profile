import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Research from "./components/Research";
import Projects from "./components/Projects";
import Contributions from "./components/Contributions";
import Skills from "./components/Skills";
import Awards from "./components/Awards";
import EasterEgg from "./components/EasterEgg";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-zinc-100 bg-grid-pattern selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero & About */}
        <Hero />

        {/* 1. 學術論文 (Research & Publications) */}
        <Research />

        {/* 2. 我自己開發的專案 (Self-Developed Projects) */}
        <Projects />

        {/* 3. 開源貢獻 (Open-Source Contributions) */}
        <Contributions />

        {/* 4. 競賽與殊榮 (Achievements & Competitions) */}
        <Awards />

        {/* 5. 技術能力 (Tech Stack & Skills) */}
        <Skills />

        {/* 6. 彩蛋 (Easter Egg) */}
        <EasterEgg />
      </main>

      {/* Bottom Footer & Contacts */}
      <Footer />
    </div>
  );
}
