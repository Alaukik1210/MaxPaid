import React from "react";
import clouds from "/assets/clouds.png";
import logo from "/assets/logo.svg";



const Footer = () => {
  return (
    <div>
      <div className="h-[50vh] bg-black mt-20 ">
        <div className="flex justify-end">
          <div className="flex ">
          <div className="">
           
          </div>

          <div className="rotate-90 w-[300px] absolute -left-28 mt-44 font-product-sans flex font-bold italic text-7xl">
          <img className=" mr-4" src={logo} alt="" />
            <span className="text-white"> Max</span>
            <span className="text-lime">Paid</span>
          </div>
        </div>
        <div className="text-white m-28 w-fit flex justify-evenly ml-32">
          <div className="m-4">
            <ul className="italic font-product-sans font-bold p-[4px]">
              About
            </ul>
            <ul className="font-product-sans text-gray-400 cursor-pointer p-[4px] ">
              Home
            </ul>
            <ul className="font-product-sans text-gray-400 cursor-pointer p-[4px]">
              Explore
            </ul>
            <ul className="font-product-sans text-gray-400 cursor-pointer p-[4px]">
              Blogs
            </ul>
            <ul className="font-product-sans text-gray-400 cursor-pointer p-[4px]">
              Find work
            </ul>
            <ul className="font-product-sans text-gray-400 cursor-pointer p-[4px]">
              Find talent
            </ul>
          </div>

          <div className="m-4">
            <ul className="italic font-product-sans font-bold p-[4px]">
              Categories
            </ul>
            <ul className="font-product-sans text-gray-400 cursor-pointer p-[4px] ">
              Writing & Translation
            </ul>
            <ul className="font-product-sans text-gray-400 cursor-pointer p-[4px]">
              Video & Animation
            </ul>
            <ul className="font-product-sans text-gray-400 cursor-pointer p-[4px]">
              Music & Audio
            </ul>
            <ul className="font-product-sans text-gray-400 cursor-pointer p-[4px]">
              Fiverr Logo Maker
            </ul>
            <ul className="font-product-sans text-gray-400 cursor-pointer p-[4px]">
              Programming & Tech
            </ul>
          </div>
          <div className="m-4">
            <ul className="italic font-product-sans font-bold p-[4px]">
              Support
            </ul>
            <ul className="font-product-sans text-gray-400 cursor-pointer p-[4px] ">
              Help & Support
            </ul>
            <ul className="font-product-sans text-gray-400 cursor-pointer p-[4px]">
              Trust & Safety
            </ul>
            <ul className="font-product-sans text-gray-400 cursor-pointer p-[4px]">
              Lear
            </ul>
            <ul className="font-product-sans text-gray-400 cursor-pointer p-[4px]">
              Quality Guide
            </ul>
            <ul className="font-product-sans text-gray-400 cursor-pointer p-[4px]">
              Guide
            </ul>
          </div>
          <div className="m-4">
            <ul className="italic font-product-sans font-bold p-[4px]">
              Community
            </ul>
            <ul className="font-product-sans text-gray-400 cursor-pointer p-[4px] ">
              Community Hub
            </ul>
            <ul className="font-product-sans text-gray-400 cursor-pointer p-[4px]">
              Forum
            </ul>
            <ul className="font-product-sans text-gray-400 cursor-pointer p-[4px]">
              Events
            </ul>
            <ul className="font-product-sans text-gray-400 cursor-pointer p-[4px]">
              Creators
            </ul>
            <ul className="font-product-sans text-gray-400 cursor-pointer p-[4px]">
              Affiliates
            </ul>
          </div>
          
        </div>
        <div className=''>
        <img className='h-[50vh] bg-inherit flex justify-end' src={clouds} alt="" />
        </div>
        </div>
     
       
        
      </div>
     
    </div>
  );
};

export default Footer;
