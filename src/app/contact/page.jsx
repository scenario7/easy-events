import React from 'react'
import Navbar from '../components/Navbar'
import ContactForm from '../components/ContactForm'
import CustomFooter from '../components/CustomFooter'

const ContactPage = () => {
  return (
    <div>
        <div className='bg-gradient-to-b from-[#E21A59] to-[#F3733E] justify-start flex flex-col p-10 gap-10'>
            <Navbar/>
            <h1 className='text-white font-bold text-6xl pb-10'>Contact Us</h1>
        </div>
        <div className='py-10'>
            <ContactForm/>
        </div>
        <CustomFooter/>
    </div>
  )
}

export default ContactPage