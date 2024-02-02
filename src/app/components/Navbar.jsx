import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='flex justify-between'>
        <a href="/" className='flex items-center gap-5 text-white font-semibold text-2xl'>
          <img src="https://play-lh.googleusercontent.com/c3yZ05kZ0ArQZ59j-4K64TeXRcTln3f1jKVGqeZZVOuOmr6weGJ16xFcZv78YFPmZbgt=w480-h960" alt="" className='h-14 rounded-xl'/>
          <h1>Easy Events</h1>
        </a>
        <button className='bg-white px-3 py-2 rounded-xl text-lg font-semibold tracking-wide'>
            <a href="">
                Download
            </a>
        </button>
    </div>
  )
}

export default Navbar