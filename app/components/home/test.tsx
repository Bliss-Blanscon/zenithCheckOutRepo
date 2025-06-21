import React from "react";
import Header from "../general/Header";
import HeroSection from "./HeroSection";
import About from "./About";
import Menu from "./Menu";
import Footer from "../general/Footer";
import { useAuthContext } from "~/Context/AuthContext";
import Auth from "~/auth/Auth";

const test = () => {
  return (
    <div>
      <Auth />
      <Header />
      <HeroSection />
      <Menu />
      <About />
      <Footer />
    </div>
  );
};

export default test;
