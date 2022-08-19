import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '../public/Assets/Logo.png'

const Footer = () => {
  return (
    <div className=' p-4 bg-white  shadow md:px-6 md:py-8 dark:bg-gray-900'>
        <div className=' sm:flex sm:items-center sm:justify-between'>
            <div className='flex items-center mb-4 sm:mb-0'>
                <Image src={Logo} width={80} height={60} alt=''/>
            <Link href="/" >
                <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>Marhaba Investment</span>
            </Link>

            </div>
            <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
                <Link href="/About"><span className="mr-4 hover:underline md:mr-6 ">About</span></Link>
            </li>
            <li>
                <Link href="/Investment"><span className="mr-4 hover:underline md:mr-6 ">Investment</span></Link>
            </li>
            <li>
                <Link href="/Service"><span className="mr-4 hover:underline md:mr-6 ">Services</span></Link>
            </li>
            <li>
                <Link href="/contact"><span className="hover:underline md:mr-6 ">Contact</span></Link>
            </li>
        </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 Marhaba Investment. All Rights Reserved.
        </span>
    </div>
  )
}

export default Footer