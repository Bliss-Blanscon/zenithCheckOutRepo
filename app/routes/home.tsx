import type { Route } from "./+types/Home";
import Menu from "~/components/home/Menu";
import Footer from "~/components/general/Footer";
import Header from "~/components/general/Header";
import HeroSection from "~/components/home/HeroSection";
import About from "~/components/home/About";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "DE BLISS" },
    { name: "description", content: "Welcome to De Bliss!" },
  ];
}

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <About />
      <Menu />
      <Footer />
    </div>
  );
}
