import React from "react";
import login from "../assets/login1.svg";
import register from "../assets/register.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();
  return (
    <div onClick={()=> navigate("/loginn")} className="h-[100vh] p-40">
        <button className="ml-20 text-2xl font-product-sans font-semibold hover:scale-105" ><FontAwesomeIcon icon={faLeftLong} /> Back</button>
      <div className="flex justify-evenly">
        <div className="hover:scale-105 ease-linear duration-300 cursor-pointer">
          <img className="h-[70vh]" src={login} alt="" />
          <div className="text-center">
          <button className="font-product-sans font-bold text-4xl bg-black text-lime px-24 rounded-full py-2 hover:bg-lime hover:text-black ease-in-out duration-300 ">Login</button>
          </div>
         
        </div>
        <div className="hover:scale-105 ease-linear duration-300 cursor-pointer">
          <img className="h-[70vh]" src={register} alt="" />
          <div className="text-center">
          <button className="font-product-sans font-bold text-4xl bg-black text-lime px-24 rounded-full py-2  hover:bg-lime hover:text-black ease-in-out duration-300 ">Register </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
