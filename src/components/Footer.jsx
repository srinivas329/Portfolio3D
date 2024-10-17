import React from "react";
import { FaRegCopyright, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { styles } from "../style";

const Footer = () => {
  const linkedIn = "https://www.linkedin.com/in/srinivasulu-nagalapuram/";
  const gitHub = "https://github.com/srinivas329";
  const twitter = "https://x.com/Sriniva41815640";

  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-10">
        <p className={`${styles.sectionSubText}`}>Follow Me</p>
        <div className="flex w-[200px] justify-between mt-4 mb-5">
          <div
            onClick={() => window.open(linkedIn, "_blank")}
            className=" w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <FaLinkedin size={35} />
          </div>
          <div
            onClick={() => window.open(gitHub, "_blank")}
            className=" w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <FaGithub size={35} />
          </div>
          <div
            onClick={() => window.open(twitter, "_blank")}
            className=" w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <BsTwitterX size={35} />
          </div>
        </div>
      </div>
      <hr className="border-t-2 border-gray-500" />
      <div className="flex flex-row justify-center items-center h-20">
        <FaRegCopyright />
        <p className="ml-2">Copyright 2024 by Srinivasulu Nagalapuram</p>
      </div>
    </div>
  );
};

export default Footer;
