import React from 'react'

const CustomFooter = () => {
  return (
    <div className='bg-[#E31E58] flex items-end justify-between p-20 gap-5'>
        <div className='text-white flex font-semibold text-2xl items-center gap-5'>
        <img src="https://play-lh.googleusercontent.com/c3yZ05kZ0ArQZ59j-4K64TeXRcTln3f1jKVGqeZZVOuOmr6weGJ16xFcZv78YFPmZbgt=w480-h960" alt="" className='h-14 rounded-xl'/>
        Easy Events
        </div>
        <div className='flex flex-col gap-2 text-right text-[#FFEDEA] font-semibold text-sm'>
            <a href="/blog">Blog</a>
            <a href="/contact">Contact Us</a>
        </div>
    </div>
  )
}

export default CustomFooter