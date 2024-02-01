import React from 'react'

const HowItWorks = () => {

    const steps =[
        {
            number : 1,
            title : 'Download the App',
            description : 'Create your event by selecting co-organizers and providing necessary details'
        },
        {
            number : 2,
            title : 'Invitations',
            description : 'Automate e-invites with personalized cards, get attendee checklists from organizers, share unique RSVP links & suggestions.'
        },
        {
            number : 3,
            title : 'Organizing',
            description : 'Enter vendor details, assign tasks to co-organizers, and track payments for seamless event management, simplifying budgeting and expenses.'
        },
        {
            number : 4,
            title : 'Pre-Event',
            description : 'Share pre-event preparation media, photos, videos, and social links to notify and excite guests, fostering early engagement with your audience.'
        },
        {
            number : 5,
            title : 'D-Day',
            description : 'Team arrives with custom QR codes, uploads event media, assists guest registration, feedback options, connects guests with vendors, and creates instant highlight videos for widespread buzz.'
        },
        {
            number : 6,
            title : 'Post-Event',
            description : 'Effortlessly settle vendor payments, refine budgets, upload post-event media, use guest lists for future events, and stay connected with local social occasions.'
        }
    ]

  return (
    <div className='p-10'>
        <h1 className='font-semibold text-3xl pb-10'>How it works?</h1>
        <div className='grid grid-cols-3 gap-10'>
            {steps.map((step) => {
                return(
                    <div className={`${step.number % 3 === 0 ? 'bg-[#E21A59]' : step.number % 3 === 1 ? 'bg-[#EF5F46]' : 'bg-[#F3733E]'} flex flex-col items-center justify-center p-5 rounded-xl gap-5`} key={step.description}>
                        <h1 className='font-semibold text-3xl text-white'>{step.title}</h1>
                        <p className='text-[#FFEDEA] text-center'>{step.description}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default HowItWorks