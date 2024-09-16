import React from 'react';
import bgImage from '../assets/bg1.svg'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <div className='font-product-sans-black '>
      

      <div className={`w-full   border-black border-1 pt-[110px] `}>

        <img className=' w-full h-[53vh] object-cover absolute  -z-10' src={bgImage} alt="Background"  /> {/* I saif , added this line for background Image, widht Height of 60 viewport height and width full -z z axis pr -10 value peche chali jayegi image  */}
          
          <div className='text-6xl mb-20  font-bold font-product-sans italic'>
          <span className='text-white flex justify-center justify-items-center pt-28'>Unlock  Your Potential,</span> 
         <div className='flex justify-center  '>
         <span className='text-white flex justify-center'>Get Max</span>
         <span className='text-lime flex justify-center'>Paid!</span>
         </div>
          </div>
        
       <div className='w-full flex justify-center items-center '>  
        <div className='flex justify-center items-center  border-white overflow-hidden rounded-full border-1  px-5 bg-white w-[520px]'>
        
        <input className='outline-none font-semibold w-full h-[6vh]  pl-4' type="text" placeholder='search for jobs...'/>
        <button className="bg-transparent">
            <FontAwesomeIcon icon={faSearch} className="text-slate-800 text-xl" />
          </button>
        
        </div>
</div>
      </div>

    </div>
  );
};

export default Hero;
