import React from 'react'

const Hero = ({heading, message}) => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]'/>
            <div className='p-5 text-white z-[2] mt-[5rem] max-w-[510px] justify-center text-center'>
                
                    <h2 className='text-5xl font-bold text-white'>{heading}</h2>
                    <p className='py-5 text-xl pt-10 '>{message}</p>
                    
            </div>
    </div>
  )
}

export default Hero