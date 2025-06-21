import React from "react";

const HeroSection = () => {
  return (
    <div>

      <section className="h-screen bg-[url(app/assets/images/hI2.png)] bg-origin-border bg-bottom flex px-4">
        <div className="flex flex-col justify-center ml-20">
          <h1 className="text-7xl sm:text-8xl font-bold font-serif text-[#fc0000]">
            DE BLISS
          </h1>
          <p className="sm:text-2xl text-xl font-bold mb-4">
            Lorem ipsum dolor sit amet consectetur
          </p>
          <div className="flex text-center gap-4">
            <a
              href="#menu"
              className="w-34 py-2 rounded-full bg-[#000000]  border border-[#ff2100] cursor-pointer"
            >
              SEE MENU
            </a>
            <a
              href="#contact"
              className="w-34 py-2 rounded-full bg-[#000000]  border border-[#ff2100] cursor-pointer"
            >
              CONTACT US
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
