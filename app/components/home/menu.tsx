const menu = () => {
  return (
    <section id="menu" className="px-8 h-[80vh]">
      <h1 className="text-3xl mb-6">Explore Our Menu</h1>
      <div className=" flex h-full gap-4">
        <div className=" h-full flex flex-col gap-4 flex-1">
          <div className="rounded-2xl flex-[0.5] w-full relative text-nowrap">
            <div className="absolute">
              <p className="text-xl">
                Signature dishes for every taste - from classic{" "}
              </p>
              <p className="text-xl">recipies to bold culinary experiments </p>
            </div>
          </div>
          <div className="bg-gray-300 rounded-2xl flex-2"></div>
          <div className="bg-gray-300 rounded-2xl flex-1"></div>
        </div>
        <div className=" h-full flex-col gap-4 flex flex-[1.5]">
          <div className=" rounded-2xl flex flex-1 items-end gap-4">
            <button className="px-4 py-2 rounded-full bg-green-900 text-white borders cursor-pointer">
              View Full Menu
            </button>
            <div className="bg-gray-300 flex flex-1 rounded-2xl h-full"></div>
          </div>
          <div className="bg-gray-300 rounded-2xl flex-3"></div>
        </div>
        <div className=" h-full flex-col gap-4 flex flex-[1.25]">
          <div className="bg-gray-300 rounded-2xl flex-[1.4]"></div>
          <div className="bg-gray-300 rounded-2xl flex-1"></div>
        </div>
      </div>
    </section>
  );
};

export default menu;
