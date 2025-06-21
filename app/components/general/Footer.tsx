import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="contact" className="bg-black mt-10 px-8 pt-10">
      <div className="border-b border-b-white pb-6">
        <h1 className="lg:text-3xl md:text-3xl text-2xl mb-1 font-semibold">
          Do you have any questions?
        </h1>
        <p>Contact us and we'll answer all your questions</p>
      </div>
      <div className="flex gap-10">
        <div className="py-4">
          <div className="flex flex-col gap-6">
            <h1 className="lg:text-xl md:text-xl">Contact Info</h1>
            <p>
              <span className="text-gray-300">Address:</span> 15 Something
              Street, Accra
            </p>
            <p>
              <span className="text-gray-300">Phone:</span> 0200000000 |
              0500000000
            </p>
            <p>
              <span className="text-gray-300">Email:</span> restaurant@gmail.com
            </p>
          </div>
        </div>
        <div className="py-4">
          <div className="flex flex-col gap-6">
            <h1 className="lg:text-xl md:text-xl">Opening Hours</h1>
            <p>
              <span className="text-gray-300">Mon-Fri:</span> 8:00 AM - 10:00 PM
            </p>
            <p>
              <span className="text-gray-300">Sat-Sun:</span> 8:00 AM - 9:00 Pm
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-8 py-4 text-xs lg:text-base md:text-base">
        <h1 className="font-bold">Nududu</h1>
        <p>© 2025 Nududu Restaurant</p>
        <div className="flex gap-4 justify-center items-center">
          <a href="">
            <FaFacebookF />
          </a>
          <a href="">
            <FaInstagram />
          </a>
          <a href="">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
