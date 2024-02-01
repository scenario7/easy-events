import React from 'react'

const Features = () => {

    const features = [
        {
          logo : `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25" />
                  </svg>
                  `,
          title : 'Instant Share',
          description :'',
          color : 'bg-[#E21A59]'
        },
        {
          logo : `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
        </svg>
        
                  `,
          title : 'Automated E-Invites',
          description :'',
          color : 'bg-[#ffffff]'
        },
        {
          logo : `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25" />
                  </svg>
                  `,
          title : 'Instant Share',
          description :'',
          color : 'bg-[#F3733E]'
        },
        {
          logo : `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25" />
                  </svg>
                  `,
          title : 'Instant Share',
          description :'',
          color : 'bg-[#EF5F46]'
        }
      ]


      const determineTextColor = (backgroundColor) => {
        return backgroundColor === 'bg-[#ffffff]' ? 'text-black' : 'text-white';
      };

  return (
    <div className='flex w-full justify-between'>
        {features.map((feature) => {
            return(
            <div className={`${feature.color} w-full flex flex-col items-center p-10`}>
                <svg className={`h-16 ${feature.color==='bg-[#ffffff]' ? 'text-black' : 'text-white'}`} dangerouslySetInnerHTML={{ __html: feature.logo }} />
                <h1 className={`font-semibold text-2xl ${feature.color==='bg-[#ffffff]' ? 'text-black' : 'text-white'}'`}>{feature.title}</h1>
            </div>
            )
        })}
    </div>
  )
}

export default Features