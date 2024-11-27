
import HeroSection from "@/components/HeroSection";
import Header from "@/components/Header";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contactme from "@/components/Contactme";
import Footer from "@/components/Footer";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#df9535]">
      <Header />
      <div className="container mt-24 mx-auto px-12 py-4">
      <HeroSection />
      <About />
      <Projects />
      <Contactme />
      <Footer />
      </div>
    </main>
  );
}
