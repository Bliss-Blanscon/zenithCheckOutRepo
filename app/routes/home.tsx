import Auth from "~/auth/Auth";
import type { Route } from "./+types/Home";
import { AuthProvider } from "~/Context/AuthContext";
import Header1 from "~/components/general/Header1";
import HeroSection from "~/components/home/HeroSection";
import ShortMenu from "~/components/home/ShortMenu";
import About from "~/components/home/About";
import Footer from "~/components/general/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "DE BLISS" },
    { name: "description", content: "Welcome to De Bliss!" },
  ];
}

export default function Home() {
  return (
    <AuthProvider>
      <div>
        <Auth />
        <Header1 />
        <HeroSection />
        <ShortMenu />
        <About />
        <Footer />
      </div>
    </AuthProvider>
  );
}
