import React from 'react';
import I1 from '/assets/Group 7.svg';
import I2 from '/assets/Group 10.svg';
import I3 from '/assets/Group 13.svg';
import I4 from '/assets/Group 11.svg';
import I5 from '/assets/Group 12.svg';
import I6 from '/assets/Group 14.svg';
import I7 from '/assets/image 2.svg';
import I8 from '/assets/Vector 15.svg';
import I9 from '/assets/Group 8.png';



const Jobs = () => {
  return (
    <div className="grid grid-cols-9  ml-32 mr-32 mt-52 gap-20 -z-20">
     <button className="text-black text-sm drop-shadow-2xl   cursor-pointer font-product-sans rounded-2xl h-[140px] w-[140px] font-bold text-center bg-white transition hover:-translate-y-3 ease-in-out duration-300">
<div className='w-10 h-10 hover:bg-lime blur-xl  absolute top-10 left-14'/>
  <div className="flex justify-items-center justify-between">
    <img className="flex justify-center pl-12 pb-8" src={I1} alt="" />
  </div>
  <div className="mb-12">
    <div>Graphic</div>
    <div>Design</div>
  </div>
</button>

<button className="text-black text-sm drop-shadow-2xl cursor-pointer font-product-sans rounded-2xl h-[140px] w-[140px] font-bold text-center bg-white transition hover:-translate-y-3 ease-in-out duration-300">
<div className='w-10 h-10 hover:bg-lime blur-xl border-3 bord absolute top-10 left-14'/>
  <div className="flex justify-items-center justify-between">
    <img className="flex justify-center pl-12 pb-8" src={I2} alt="" />
  </div>
  <div className="pb-8">
    <div>Video</div>
    <div>Animation</div>
  </div>
</button>

<button className="text-black text-sm drop-shadow-2xl cursor-pointerfont-product-sans rounded-2xl h-[140px] w-[140px] font-bold text-center bg-white transition hover:-translate-y-3 ease-in-out duration-300">
<div className='w-10 h-10 hover:bg-lime blur-xl  absolute top-10 left-14'/>
  <div className="flex justify-items-center justify-between">
    <img className="flex justify-center pl-12 pb-8" src={I3} alt="" />
  </div>
  <div className="pb-8">
    <div>Programming</div>
    <div>& Tech</div>
  </div>
</button>

<button className="text-black text-sm drop-shadow-2xl cursor-pointer  font-product-sans rounded-2xl h-[140px] w-[140px] font-bold text-center bg-white transition hover:-translate-y-3 ease-in-out duration-300">
<div className='w-10 h-10 hover:bg-lime blur-xl  absolute top-10 left-14'/>
  <div className="flex justify-items-center justify-between">
    <img className="flex justify-center pl-12 pb-8" src={I4} alt="" />
  </div>
  <div className="pb-8">
    <div>Video</div>
    <div>Editing</div>
  </div>
</button>

<button className="text-black text-sm drop-shadow-2xl cursor-pointer  font-product-sans rounded-2xl h-[140px] w-[140px] font-bold text-center bg-white transition hover:-translate-y-3 ease-in-out duration-300">
<div className='w-10 h-10 hover:bg-lime blur-xl  absolute top-10 left-14'/>
  <div className="flex justify-items-center justify-between">
    <img className="flex justify-center pl-12 pb-12" src={I5} alt="" />
  </div>
  <div className="pb-8">
    <div>Business</div>
  </div>
</button>

<button className="text-black text-sm drop-shadow-2xl cursor-pointer   font-product-sans rounded-2xl h-[140px] w-[140px] font-bold text-center bg-white transition hover:-translate-y-3 ease-in-out duration-300">
<div className='w-10 h-10 hover:bg-lime blur-xl  absolute top-10 left-14'/>
  <div className="flex justify-items-center justify-between">
    <img className="flex justify-center pl-12 pb-12" src={I6} alt="" />
  </div>
  <div className="pb-8">
    <div>Consulting</div>
  </div>
</button>

<button className="text-black text-sm drop-shadow-2xl cursor-pointer items-start flex flex-col   font-product-sans rounded-2xl h-[140px] w-[140px] font-bold text-center bg-white transition hover:-translate-y-3 ease-in-out duration-300">
<div className='w-10 h-10 hover:bg-lime blur-xl  absolute top-10 left-14'/>
  <div className="flex justify-center -translate-y-3  w-full">
    <img className="" src={I7} alt="" />
  </div>
  <div className="w-full mt-7">
    <div>Music</div>
    <div>& Audio</div>
  </div>
</button>

<button className="text-black text-sm drop-shadow-2xl cursor-pointer  font-product-sans rounded-2xl h-[140px] w-[140px] font-bold text-center bg-white transition hover:-translate-y-3 ease-in-out duration-300">
<div className='w-10 h-10 hover:bg-lime blur-xl  absolute top-10 left-14'/>
  <div className="flex justify-items-center justify-between">
    <img className="flex justify-center pl-12 pb-8" src={I8} alt="" />
  </div>
  <div className="pb-8 pt-[12px]">
    <div>Writing</div>
    <div>& Translation</div>
  </div>
</button>

<button className="text-black text-sm drop-shadow-2xl cursor-pointer  font-product-sans flex flex-col justify-center items-center gap-4  rounded-2xl h-[140px] w-[140px] font-bold text-center bg-white transition hover:-translate-y-3 ease-in-out duration-300">
<div className='w-10 h-10 hover:bg-lime blur-xl  absolute top-10 left-14'/>
  <div className="flex   justify-center">
    <img className="  -translate-y-6 items-start " src={I9} alt="" />
  </div>
  <div className="w-full">
    <div>Digital</div>
    <div>Marketing</div>
  </div>
</button>

    </div>
  );
};

export default Jobs;
