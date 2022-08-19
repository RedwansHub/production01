import Image from 'next/image'
import React from 'react'

const EstateItem = ({title, backgroundImg}) => {
    return (
        <div className='relative flex items-center justify-center h-auto  md:w-[100%] shadow-xl shadow-gray-400 rounded-xl group hover:scale-105 duration-300'>
        <Image className='rounded-xl group-hover:opacity-70' src={backgroundImg} alt='/' /> 
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
            
        </div>
     </div>
      )
}

export default EstateItem