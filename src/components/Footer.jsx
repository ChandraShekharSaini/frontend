import React from "react";
import { FaFacebook } from "react-icons/fa";

import { RiInstagramFill } from "react-icons/ri";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { FaYoutube } from "react-icons/fa";
import DeleteDiaglogBox from "./DeleteDiaglogBox"

const Footer = () => {
  return (
    <footer>

      <div className="flex justify-between bg-white  px-4 md:px-7 py-5 border-t-2 border-black">
        <div className=" sm:w-[60%] lg:w-[30%]  flex  items-center justify-start gap-2 sm:gap-4 pl-1 sm:pl-4 ">
          {/* <img className='w-12  h-12' src="/logoVideo.webp" /> */}

          <video
            className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full object-cover  hover:scale-125 transition duration-500"
            loop
            autoPlay
            muted
            playsInline
            src="/logo-black.mp4"
          />
          <p
            className={`font-mono font-bold text-xl  sm:text-3xl  md:text-4xl border-2 border-gray-500 rounded-sm  px-2 py-1 sm:px-4 sm:py-2 
          
            }`}
          >
            VidTrim
          </p>
        </div>

        <div className="flex gap-1  md:gap-3  items-center ">
          <FaFacebook className="text-[26px] text-[#1877F2] cursor-pointer hover:scale-110" />
          <RiInstagramFill className="text-[30px] text-[#d62976] cursor-pointer hover:scale-110" />
          <TbBrandLinkedinFilled className="text-[30px] text-[#0077b5] cursor-pointer hover:scale-110" />
          <FaYoutube className="text-[34px] text-[#FF0000] cursor-pointer hover:scale-110" />
        </div>
      </div>

      <div className="bg-black h-[80vh] text-white px-5 py-10"></div>
    </footer>
  );
};

export default Footer;
