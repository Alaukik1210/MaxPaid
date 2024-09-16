import React from 'react'
import bg2 from '../assets/bg2.svg'

const Bigbg2 = () => {
  return (
    <div className='mt-12'>
      <div className=''>
        <div className='w-screen bg-hero-pattern bg-no-repeat bg-cover h-[100vh]'>
            {/* <img className='relative object-cover h-[90vh] w-full -z-10' src={bg2} alt="" /> */}
        
        <div className='pt-72 pl-16'>
            <div className='text-white text-7xl font-product-sans font-extrabold'>Find Jobs</div>
            <div  className='text-white text-7xl font-product-sans font-extrabold'>Tailored for you</div>
            <div className='text-white text-2xl pt-12 font-product-sans font-semibold w-[700px]'>Connect with the largest network of independent experts and tackle projects of any size, from fast turnarounds to major shifts</div>
        </div>
        <div className='flex h-[19vh] text-lime  font-bol font-product-sans text-4xl justify-around mt-20'>
            <div className='bg-black  w-[600px] rounded-3xl  p-8 cursor-pointer hover:bg-lime hover:text-black duration-300 ease-in-out'>
            <div className=' font-bold'>
            List a job and recruit </div>
            <div className='text-2xl pt-4'>Talent Catalog</div>
            </div>
            
            <div className='bg-black  w-[600px] rounded-3xl  p-8 cursor-pointer hover:bg-lime hover:text-black duration-300 ease-in-out'>
            <div className=' font-bold'>
            Browse Project</div>
            <div className='text-2xl pt-4'>Project Catalog</div>
            </div>

            <div className='bg-black  w-[600px] rounded-3xl  p-8 cursor-pointer hover:bg-lime hover:text-black duration-300 ease-in-out'>
            <div className=' font-bold'>
           
                Boost your skillset</div>
            <div className='text-2xl pt-4'>Courses Catalog</div>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Bigbg2
