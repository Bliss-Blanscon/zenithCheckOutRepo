import React from "react";
import type { Route } from "./+types/Menu";
import { AuthProvider } from "~/Context/AuthContext";
import Header2 from "~/components/general/Header2";
import Auth from "~/auth/Auth";
import FullMenu from "~/components/Menu/FullMenu";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Our Menu | DE BLISS" },
    { name: "menu", content: "De Bliss menu" },
  ];
}

const Menu = () => {
  return (
    <div className="mt-20">
      <AuthProvider>
        <Auth />
        <Header2 />
        <FullMenu />
      </AuthProvider>
    </div>
  );
};

export default Menu;
