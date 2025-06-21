import React from "react";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <header className="flex absolute top-0 w-full justify-between items-center py-2 bg-gradient-to-b from-black to-transparent px-6">
      <div className="flex flex-1 justify-start">Logo</div>
      <div className="gap-4 flex-1 flex justify-center">
        <a href="#about">ABOUT</a>
        <a href="#menu">MENU</a>
        <a href="#contact">CONTACT</a>
      </div>
      <div className="gap-2 flex flex-1 justify-end text-center">
        <NavLink
          to="login"
          className="w-20 py-2 rounded-full bg-[#000000]  border border-[#ff2100] cursor-pointer"
        >
          Login
        </NavLink>
        <NavLink
          to="register"
          className="w-20 py-2 rounded-full bg-[#ff2100]  border border-[#ffffff] cursor-pointer"
        >
          Sign Up
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
