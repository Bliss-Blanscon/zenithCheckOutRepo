import React from "react";
import { NavLink } from "react-router";
import { useAuthContext } from "~/Context/AuthContext";

const Header2 = () => {
  const { setAuth } = useAuthContext();

  const scroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView();
    }
  };

  return (
    <header className="z-10 flex absolute top-0 w-full justify-between items-center py-2 bg-gradient-to-b from-black to-transparent px-6">
      <NavLink to="/">
        <div className="flex flex-1 justify-start">Logo</div>
      </NavLink>
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

export default Header2;
