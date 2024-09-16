import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import mask1 from "../assets/mask1.svg";
import rates from "../assets/rates.svg";

const Profile = () => {
  return (
    <div className="w-full">
      <div className="text-center font-product-sans italic font-bold text-4xl">
        <motion.button className="h-[60px]  mr-4 hover:text-[#1bb800]  hover:scale-125 ease-in-out duration-300  outline-none cursor-pointer ">
          <FontAwesomeIcon
            icon={faPlay}
            className="h-[40px] rotate-180   text-lime 
            text-xl "
          />
          <FontAwesomeIcon
            icon={faPlay}
            className="h-[40px] rotate-180   text-lime 
            text-xl "
          />
        </motion.button>
        Top freeLancers
        <button className="h-[60px]  ml-4 hover:text-[#1bb800]  hover:scale-125 ease-in-out duration-300  outline-none cursor-pointer ">
          <FontAwesomeIcon
            icon={faPlay}
            className="h-[40px]   text-lime 
            text-xl "
          />
          <FontAwesomeIcon
            icon={faPlay}
            className="h-[40px]    text-lime 
            text-xl "
          />
        </button>
      </div>
      <div className="flex justify-evenly mt-8">
      <div className="scale-90">
        <div className=" w-[600px] h-[350px] mb-4 rounded-3xl bg-fuchsia-200 ">
          <div className="flex p-8">
            <img className="bg-yellow-200 h-[100px] rounded-full " src={mask1} alt="" />
            <div className="pl-4 pt-4  w-[600px]">
              <span className="font-product-sans font-bold ">Rajat Dhona | 20 years old</span>
              <span className="italic font-product-sans font-semibold text-gray-500">
                <br />
                Backend Engineer
              </span>
              <div className="flex italic font-product-sans font-semibold text-gray-500">
              <img src={rates} alt="" />
              4.4/5 5K Reviews
              
              </div>
              
              
            </div>
          </div>
          <div className="w-[580px] pl-8 italic text-md font-product-sans">
              "I’m Rajat Dhona, a highly-rated backend engineer with a passion for creating reliable and scalable solutions. Proficient in languages like Python, Java, and Node.js, I've developed robust APIs, optimized databases, and built complex backend systems. My experience includes leading projects such as an e-commerce platform's backend overhaul and designing a microservices architecture for a fintech app. Lorem ipsum dolor sit, amet consectetur adipisicing elit. ."
              </div>
        </div>
      </div>
      <div className="scale-105">
        <div className=" w-[600px] h-[350px] mb-4 rounded-3xl bg-fuchsia-200 ">
          <div className="flex p-8">
            <img className="bg-yellow-200 h-[100px] rounded-full " src={mask1} alt="" />
            <div className="pl-4 pt-4  w-[600px]">
              <span className="font-product-sans font-bold ">Alaukik Mishra | 19 years old</span>
              <span className="italic font-product-sans font-semibold text-gray-500">
                <br />
                Frontend Engineer
              </span>
              <div className="flex italic font-product-sans font-semibold text-gray-500">
              <img src={rates} alt="" />
              4.6/5 5K Reviews
              
              </div>
              
              
            </div>
          </div>
          <div className="w-[580px] pl-8 italic text-md font-product-sans">
          
I’m a Frontend Engineer with a strong reputation for creating highly interactive, user-friendly, and visually captivating web pages. My technical expertise includes React, which I use to build dynamic, responsive interfaces that adapt seamlessly to user needs. I leverage Tailwind CSS for efficient and modern styling, ensuring that the design is both visually appealing and fully responsive across devices. Additionally, I specialize in GSAP, which allows me to implement smooth, sophisticated animations that enhance the user experience. ."              </div>
        </div>
      </div>
      <div className="scale-90">
        <div className=" w-[600px] h-[350px] mb-4 rounded-3xl bg-fuchsia-200 ">
          <div className="flex p-8">
            <img className="bg-yellow-200 h-[100px] rounded-full " src={mask1} alt="" />
            <div className="pl-4 pt-4  w-[600px]">
              <span className="font-product-sans font-bold ">Arhan Jain | 19 years old</span>
              <span className="italic font-product-sans font-semibold text-gray-500">
                <br />
                CyberSecurity Specialist
              </span>
              <div className="flex italic font-product-sans font-semibold text-gray-500">
              <img src={rates} alt="" />
              4.5/5 5K Reviews
              
              </div>
              
              
            </div>
          </div>
          <div className="w-[580px] pl-8 italic text-md font-product-sans">
          "I’m Arhan Jain, a well-rated cybersecurity specialist dedicated to protecting digital assets and ensuring robust security measures. With expertise in threat detection, vulnerability assessments, and ethical hacking, I’ve successfully secured networks for financial institutions and led a security overhaul for a major healthcare provider. I’m committed to staying ahead of evolving threats and delivering top-tier security solutions ."
              </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Profile;
