import React from "react";

const heroSection = () => {
  return (
    <div>
      <section className="bg-[url(https://plus.unsplash.com/premium_photo-1694141250007-fc4711bb9df1?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen ">
        <div className=" bg-black/25 flex flex-col text-center justify-center items-center gap-4 h-screen">
          <div className="flex gap-4 text-white absolute top-4 left-4 font-bold text-xs">
            <a href="#about">ABOUT</a>
            <a href="#menu">MENU</a>
            <a href="">SERVICES</a>
            <a href="">CONTACT</a>
          </div>

          <h1 className="text-9xl font-bold font-[croissant-one] text-white">
            Nududu
          </h1>
          <p className="text-2xl font-bold text-white">
            Lorem ipsum dolor sit amet consectetur
          </p>
          <a
            href="#menu"
            className="px-4 py-2 border cursor-pointer font-semibold bg-white rounded-full mt-2"
          >
            SEE MENU
          </a>
        </div>
      </section>
    </div>
  );
};

export default heroSection;
