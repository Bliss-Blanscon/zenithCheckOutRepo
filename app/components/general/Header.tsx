import React from "react";
import { useAuthContext } from "~/Context/AuthContext";

const Header = () => {
  const { setAuth } = useAuthContext();

  return (
    <header className="z-10 flex absolute top-0 w-full justify-between items-center py-2 bg-gradient-to-b from-black to-transparent px-6">
      <div className="flex flex-1 justify-start">Logo</div>
      <div className="gap-4 flex-1 flex justify-center">
        <a href="#about">ABOUT</a>
        <a href="#menu">MENU</a>
        <a href="#contact">CONTACT</a>
      </div>
      <div className="gap-2 flex flex-1 justify-end">
        <button
          onClick={() => {
            setAuth("login");
          }}
          className="w-20 py-2 rounded-full bg-[#000000]  border border-[#ff2100] cursor-pointer"
        >
          Login
        </button>
        <button
          onClick={() => setAuth("register")}
          className="w-20 py-2 rounded-full bg-[#ff2100]  border border-[#ffffff] cursor-pointer"
        >
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;
