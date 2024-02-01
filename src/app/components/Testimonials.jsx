import React from 'react'

const Testimonials = () => {

    const testimonials = [
        {
            image : 'https://a.espncdn.com/combiner/i?img=/i/headshots/rpm/players/full/868.png',
            name : 'Lewis Hamilton',
            stars : '⭐⭐⭐⭐',
            review : 'I used Easy Events to plan my championship celebration party and nothing comes close to it!'
        },
        {
            image : 'https://cdn-3.motorsport.com/images/mgl/Y99d13AY/s800/max-verstappen-red-bull-racing-1.jpg',
            name : 'Max Verstappen',
            stars : '⭐⭐⭐⭐⭐',
            review : 'I used Easy Events to plan my championship celebration party and nothing comes close to it!'
        },
        {
            image : 'https://a.espncdn.com/combiner/i?img=/i/headshots/rpm/players/full/348.png&w=350&h=254',
            name : 'Fernando Alonso',
            stars : '⭐⭐⭐⭐⭐',
            review : 'I used Easy Events to plan my championship celebration party and nothing comes close to it!'
        }
    ]

  return (
    <div className='p-10'>
        <h1 className='font-semibold text-3xl pb-10'>What our users have to say</h1>
        <div className='flex w-full justify-between gap-20'>
            {testimonials.map((testimonial) => {
                return(
                    <div className='flex flex-col items-center text-center bg-white rounded-xl p-10 shadow-lg'>
                        <img src={testimonial.image} alt="" className='rounded-full h-24 w-24 object-cover'/>
                        <h1 className='text-2xl font-semibold'>{testimonial.name}</h1>
                        <h1 className='text-3xl'>{testimonial.stars}</h1>
                        <h1 className='text-lg'>{testimonial.review}</h1>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Testimonials