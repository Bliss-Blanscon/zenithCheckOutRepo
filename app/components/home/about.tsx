import React from "react";

const about = () => {
  return (
    <section
      id="about"
      className="flex flex-col lg:flex-row md:flex-row  gap-10 lg:gap-0 md:gap-0 lg:h-120 items-center justify-between my-20 px-8"
    >
      <div className="flex w-full min-w-70">
        <img
          src="https://chatgpt.com/backend-api/public_content/enc/eyJpZCI6Im1fNjg0MTlmZjY5NmUwODE5MWExMDQ0NjIyMzQ4YjNmOTU6ZmlsZV8wMDAwMDAwMDdiNjg2MjMwYTYwMDUyN2FkYzIyMWRiMyIsInRzIjoiNDg1ODY5IiwicCI6InB5aSIsInNpZyI6Ijg1NzQzMGE0NDVjOGRkZDNlZTI4NDI4YTk1MGM5MDczMWI3Nzk4ODUwMTc0ZjA2YTUzOWVjYmZjMjAyMTAyM2IiLCJ2IjoiMCIsImdpem1vX2lkIjpudWxsfQ=="
          alt="Soup"
          className="object-cover rounded-full"
        />
      </div>
      <div className="text-xl space-y-4 ">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
          ratione, quis nostrum ducimus at eaque. Corporis commodi distinctio,
          non molestiae fugiat iste ducimus doloremque, sequi maxime
          necessitatibus porro, recusandae omnis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
          incidunt quaerat ratione ut quas soluta dignissimos, tenetur alias
          asperiores iusto itaque distinctio aliquid. Deleniti sit accusamus
          assumenda vel voluptatibus veniam.
        </p>
      </div>
    </section>
  );
};

export default about;
