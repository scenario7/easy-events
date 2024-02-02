import React from 'react'
import Image from 'next/image'

const BlogCard = ({props}) => {
  return (
    <div className='bg-white rounded-xl shadow-lg p-8 flex flex-col'>
        <img src={props.image} className='w-full h-44 object-cover rounded-xl pb-5'/>
        <h1 className='font-semibold text-xl'>{props.title}</h1>
        <h1 className='font-semibold text-lg text-stone-600'>{props.date}</h1>
        <p>{props.content}</p>
    </div>
  )
}

export default BlogCard