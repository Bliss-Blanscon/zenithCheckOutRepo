import type { Route } from "./+types/home";
import HeroSection from "../components/home/heroSection";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Nududu" },
    { name: "description", content: "Welcome to Nududu!" },
  ];
}

export default function Home() {
  return <HeroSection />;
}
