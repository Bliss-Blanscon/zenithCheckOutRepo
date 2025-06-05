import type { Route } from "./+types/home";
import HeroSection from "../components/home/heroSection";
import About from "~/components/home/about";
import Menu from "~/components/home/menu";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Nududu" },
    { name: "description", content: "Welcome to Nududu!" },
  ];
}

export default function Home() {
  return (
    <div>
      <HeroSection />
      <About />
      <Menu />
    </div>
  );
}
