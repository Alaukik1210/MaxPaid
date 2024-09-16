import React from 'react'
import Carousel from './Slider'
import cute from '../assets/cute.svg';
import Xoxo from './Xoxo';
const Join = () => {
  return (
    <div className='w-full'>
    <Xoxo/>
    <div className='flex justify-between  '>
    <div className=' m-12 mt-20 w-[550px]'>

        <div className='flex gap-2'><span className='text-4xl flex font-product-sans italic font-bold'>UP </span>
        <div className='w-[12rem] overflow-hidden italic bg-black h-12'><Carousel/></div> 
        <div className='text-4xl font-product-sans italic font-bold'>YOUR WORK</div>
        </div>
        <div className='font-product-sans italic font-bold text-4xl mt-4'>
            WITH US .
        </div>
        <div className='font-product-sans mt-12 font-semibold text-xl'>
        MaxPaid connects you with clients who value your skills. Join a community of freelancers earning more and achieving their goals. Ready to take control of your future?
        </div>

        <button className='font-product-sans mt-12 text-3xl font-bold w-[250px] rounded-full  p-[4px] text-lime  bg-black hover:bg-lime hover:text-black duration-300 ease'>
          JOIN NOW
        </button>
      
    </div>
    
    <div>
    <img src={cute} alt="" />
    </div>

    </div>
    <div className='flex justify-end'> < Xoxo/></div>
    
    </div>
  )
}

export default Join
