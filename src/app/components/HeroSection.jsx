import React from 'react'
import Navbar from './Navbar'
import PhoneMockup from '../images/phone-mockup.png'
import Image from 'next/image'

const HeroSection = () => {



  return (
    <div className='bg-gradient-to-b from-[#E21A59] to-[#F3733E] justify-start flex flex-col'>
        <Navbar/>
        <div className='px-48 flex flex-col md:flex-row lg:flex-row h-full gap-10 pt-20 items-center'>
            <h1 className='text-white font-bold text-6xl'>Your VIP pass to unforgettable moments.</h1>
            <Image src={PhoneMockup} height={1500}/>
            <h1 className='text-white text-lg text-center'>Create a Buzz with Easy Events! India’s first event-specific app tailored for Personal & Social Events.</h1>
        </div>
    </div>
    
  )
}

export default HeroSection