import { motion } from "motion/react";
import { IoClose } from "react-icons/io5";

const FoodPopUp = ({
  close,
  isOrdering,
  name,
  description,
  price,
}: {
  close: () => void;
  isOrdering: boolean;
  name: string;
  description: string;
  price: string;
}) => {
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={isOrdering && { y: 0 }}
      exit={{ y: "100%" }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className="relative h-2/3 w-1/2 rounded-t-lg bg-[#0e1113] overflow-hidden"
    >
      <button
        className="absolute right-4 top-4 bg-white cursor-pointer rounded-full p-1"
        onClick={close}
      >
        <IoClose size={20} color="#ff1200" />
      </button>
      <div className="h-1/2 bg-gray-400"></div>
      <div className="flex flex-col justify-between h-1/2">
        <div className="px-4 pb-8 pt-4">
          <p>{name}</p>
          <p className="text-[#e87171] text-2xl font-bold">GH₵{price}</p>
          <p className="text-gray-400">{description}</p>
        </div>
        <div className="px-4 flex flex-col pb-6">
          <label htmlFor="note" className="text-gray-500">
            Add a note
          </label>
          <motion.input
            whileFocus={{
              borderBottomColor: "#ff2100",
            }}
            type="text"
            placeholder="It may not be possible to meet all requests"
            className="py-2 focus:outline-0 placeholder:text-gray-500 border-b border-b-[#e87171]"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default FoodPopUp;
