import React from "react";
import myphoto from "../assets/images/Myphoto.jpg";
import { TypeAnimation } from "react-type-animation";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
function Main() {
  return (
    <div id="main">
      <img
        src={myphoto}
        className="w-full h-screen object-cover object-left scale-x-[1]"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            I'm{" "}
            <span className="text-violet-600">
              <TypeAnimation
                className=" hover:text-pink-600"
                sequence={["CJVijay", 1000]}
              />
            </span>
          </h1>
          <h2 className="flex sm:text-3xl text-4xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[
                "Fresher",
                4000,
                "Full Stack Frontend Developer",
                2000,
                "Leaner",
                2000,
                "Dancer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", paddingLeft: "10px" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-4 w-full max-w-[200px]">
            <FaLinkedin size={20} className="cursor-pointer" />
            <FaTwitter size={20} className="cursor-pointer" />
            <FaInstagram size={20} className="cursor-pointer" />
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Main;
