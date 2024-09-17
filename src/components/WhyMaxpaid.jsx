import React from 'react'
import whymax from '/assets/whymax.svg'
import whymax2 from'/assets/whymax2.svg'
import book from '/assets/book.svg'
import star from '/assets/Star.svg'
import $ from '/assets/$.svg'
import design from '/assets/design.svg'

const WhyMaxpaid = () => {
  return (
    <div>
      <div className='font-product-sans bg-black w-[350px] rounded-r-2xl italic  p-[8px] text-4xl flex font-bold mt-32'>
        <di className='text-white '>WHY MAX</di>
        <div className='text-lime '>PAID?</div>
      </div>
      <div className='flex'>
        <div >
            <img className='mt-12' src={whymax} alt="" />
        </div>

        <div>
        <div className='' >
            <img className='absolute right-0 h-[58vh]' src={design} />
            <img  className='absolute object-cover h-[58vh]  right-0 -z-10' src={whymax2} alt="" />
            <div>
              <img className='mt-[74px]  absolute right-[610px] h-[60px] text-lime' src={book} alt="" />
            <div className=' mt-16 absolute right-16 w-[530px] ml-4 font-product-sans text-2xl text-white'>We offer courses tailored to the latest trends and your unique career needs, keeping you ahead in the freelancing world</div>
            </div>
            <div>
              <img className='mt-60  absolute right-[620px] h-[60px] text-lime' src={star}  alt="" />
            <div className=' mt-56 absolute right-16 w-[530px] ml-4 font-product-sans text-2xl text-white'>We offer a dual rating system that evaluates both freelancers and clients based on performance and professionalism.</div>
            </div>
            <div>
              <img className='mt-96  absolute right-[635px] h-[55px] text-lime' src={$} alt="" />
            <div className=' mt-96 absolute right-16 w-[530px] ml-4 font-product-sans text-2xl text-white'>We offer competitive base prices for freelancers, aligned with your skillset and experience.</div>
            </div>
            
        </div>
        
        
        </div>
        
       
      </div>
    </div>
  )
}

export default WhyMaxpaid
