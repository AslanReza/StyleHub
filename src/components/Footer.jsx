import React from "react";
import { FaHeart } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="fixed font-semibold bottom-0 text-neutral-800 w-full bg-[#f5961d] text-center">
      <div className="flex  justify-end px-1">
        <p className="flex items-center gap-1 text-xs hover:text-white">
          Made with <FaHeart color="red" /> and <FaReact color="cyan" />
        </p>
      </div>
    </div>
  );
};

export default Footer;
