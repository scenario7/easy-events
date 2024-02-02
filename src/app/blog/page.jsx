import React from 'react'
import Navbar from '../components/Navbar'
import BlogCard from '../components/BlogCard'
import CustomFooter from '../components/CustomFooter'

const BlogsPage = () => {


    const blogs = [
        {
            image : 'https://t4.ftcdn.net/jpg/00/75/96/07/360_F_75960735_m5TDL2Uc90PQhZag5cSEOwSuRyKH5Glh.jpg',
            date : '23rd January, 2024',
            title : 'Birthday Parties 101',
            content : 'In this edition of the Easy Events blog, we take you through the best way to organize a memorable birthday party for a loved one.'
        },
        {
            image : 'https://t4.ftcdn.net/jpg/00/75/96/07/360_F_75960735_m5TDL2Uc90PQhZag5cSEOwSuRyKH5Glh.jpg',
            date : '24th January, 2024',
            title : 'Birthday Parties 101',
            content : 'In this edition of the Easy Events blog, we take you through the best way to organize a memorable birthday party for a loved one.'
        },
        {
            image : 'https://t4.ftcdn.net/jpg/00/75/96/07/360_F_75960735_m5TDL2Uc90PQhZag5cSEOwSuRyKH5Glh.jpg',
            date : '25th January, 2024',
            title : 'Birthday Parties 101',
            content : 'In this edition of the Easy Events blog, we take you through the best way to organize a memorable birthday party for a loved one.'
        },
        {
            image : 'https://t4.ftcdn.net/jpg/00/75/96/07/360_F_75960735_m5TDL2Uc90PQhZag5cSEOwSuRyKH5Glh.jpg',
            date : '26th January, 2024',
            title : 'Birthday Parties 101',
            content : 'In this edition of the Easy Events blog, we take you through the best way to organize a memorable birthday party for a loved one.'
        },
        {
            image : 'https://t4.ftcdn.net/jpg/00/75/96/07/360_F_75960735_m5TDL2Uc90PQhZag5cSEOwSuRyKH5Glh.jpg',
            date : '23rd January, 2024',
            title : 'Birthday Parties 101',
            content : 'In this edition of the Easy Events blog, we take you through the best way to organize a memorable birthday party for a loved one.'
        }
    ]

  return (
    <div>
        <div className='bg-gradient-to-b from-[#E21A59] to-[#F3733E] justify-start flex flex-col p-10 gap-10'>
            <Navbar/>
            <h1 className='text-white font-bold text-6xl pb-10'>The Easy Events Blog</h1>
        </div>
        <div className='grid grid-cols-3 gap-8 px-10 py-10'>
            {blogs.map((blog) => {
                return(
                    <BlogCard props={blog} key={blog.date}/>
                )
            })}
        </div>
        <CustomFooter/>
    </div>
  )
}

export default BlogsPage