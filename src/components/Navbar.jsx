import React from 'react'
import myImage from '/assets/logo.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser} from '@fortawesome/free-solid-svg-icons';
import { NavLink,useNavigate } from 'react-router-dom';


const Navbar = () => {
const navigate = useNavigate();

  return (
    <div className='bg-black h-[117px] flex justify-between fixed  z-50 overflow-hidden w-full'>
        <div className='flex  ml-[20px] mt-[12px]'>
        <img className='w-[46px] h-[46px] mb-4 ml-4 flex justify-self-center mt-[26px]' src={myImage} alt="" />
        <span className="w-[178px] font-product-sans relative text-[45px] flex m-4 mb-4 italic text-left font-bold  text-white">
        <span>Max</span>
        <span className="text-lime">Paid</span>
        </span>
        
        </div>

        <div className='text-white flex gap-8 m-8 justify-items-center font-extrabold font-product-sans mt-12'>
            <h2 onClick={()=> navigate("/home")} className='hover:text-lime font-extrabold text-lg   hover:underline-offset-4 duration-300 ease-in-out cursor-pointer '>
             Home</h2>
            <h2 className='hover:text-lime font-extrabold text-lg  hover:underline-offset-4 duration-300 ease-in-out cursor-pointer '>Blog</h2>
            <h2 className='hover:text-lime font-extrabold text-lg  hover:underline-offset-4 duration-300 ease-in-out cursor-pointer '>explore</h2>
            <h2 className='hover:text-lime font-extrabold text-lg  hover:underline-offset-4 duration-300 ease-in-out cursor-pointer '>Find Jobs</h2>
            <h2 className='hover:text-lime font-extrabold text-lg  hover:underline-offset-4 duration-300 ease-in-out cursor-pointer '>Find Talent</h2>
            <button onClick={()=>navigate("/login")} className="h-[37.3px] w-[37.9px]   bg-black  outline-none cursor-pointer rounded-full border-4 border-slate-50   hover:border-lime " >
          <FontAwesomeIcon icon={faUser} className="hover:text-lime text-white 
            text-xl " /></button>
        </div>
      
      
    </div>
  )
}

export default Navbar
