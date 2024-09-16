import React from 'react'
import Navbar from './Navbar'
import Hero  from './Hero'
import Jobs from './Jobs'
import Join from './Join'
import Bigbg2 from './Bigbg2'
import WhyMaxpaid from './WhyMaxpaid'
import Profile from './Profile'
import Footer from './Footer'


const Landing = () => {
  return (
    <div className='overflow-hidden'
    >
     
      <Hero/>
      <Jobs/>
      <Join/>
      <Bigbg2/>
      <WhyMaxpaid/>
      <Profile/>
      
     

     
    </div>
  )
}

export default Landing
