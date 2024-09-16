import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import free from "../assets/free.svg";
import recru from "../assets/recru.svg";
import welcome from '../assets/welcome.png';

const Welcome = () => {
  return (
    <div>
      <div className="h-[90vh] pt-40 ml-20 ">
        <button className="text-2xl font-product-sans font-semibold hover:scale-105">
          <FontAwesomeIcon icon={faLeftLong} /> Back
        </button>
        <div className="flex justify-between">
        <div>
        <div className="font-product-sans ml-24 mt-20 font-semibold text-3xl">
          Hey There, <br /> <span className="text-4xl">Lets get started !</span>
        </div>
        <div className="ml-24 mt-20 flex gap-6">
          <div className="h-[20vh] w-[20vh]  bg-opacity-20 rounded-3xl cursor-pointer hover:bg-opacity-50 ease-in-out duration-300 hover:scale-105 bg-lime">
            <div className="flex items-center justify-center flex-col mt-8">
              <img className="" src={free} alt="" />
              <div className="text-center">FreeLancer</div>
            </div>
          </div>
          <div className="h-[20vh] w-[20vh]  bg-opacity-20 rounded-3xl cursor-pointer hover:bg-opacity-50 ease-in-out duration-300 hover:scale-105 bg-lime">
            <div className="flex items-center justify-center flex-col mt-8">
              <img className="" src={recru} alt="" />
              <div className="text-center mt-2">Recruiter</div>
            </div>
          </div>
        </div>
        </div>
        <div className="mr-20">
            <img src={welcome} alt="" />
        </div>
        </div>
        
       

        <div></div>
      </div>
    </div>
  );
};

export default Welcome;
