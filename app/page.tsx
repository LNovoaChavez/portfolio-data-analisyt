import About from "@/components/About";
import CardsProjects from "@/components/CardsProjects";
import Footer from "@/components/Footer";
import Habilidades from "@/components/Habilidades";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar"
import Resumen from "@/components/Resumen";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero/>
      <About/>
      <Resumen/>
      {/* <Habilidades/> */}
      <CardsProjects/>
      <Footer />
    </div>
  );
}
