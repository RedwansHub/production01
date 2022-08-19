import React from 'react'
import Teamwork from '../public/Assets/teamwork.jpg'
import Invest from '../public/Assets/invest.jpeg'
import Image from 'next/image'
import Link from 'next/link'

const Info = () => {
  return (
    <div className='max-w-[1380px] mx-auto bg-whiet '>
        <div className='m-10 max-w-md mx-auto overflow-hidden md:max-w-7xl'>
            <div className='md:flex'>
                <div className='md:w-1/2 w-full '>
                    <Image src={Invest} width={725} height={450} className='object-cover h-full w-full' alt=''/>
                </div>
                <div className='md:w-1/2 w-full p-8'>
                    <div className=' tracking-wide text-sm w-[120px] bg-[#78d251] border-2 border-[#78d251] font-semibold'>
                        
                    </div>
                    <h2 className='block mt-3 leading-tight font-semibold text-black text-3xl '>
                        Who <span className='text-[#78d251]'>We Are</span> 
                    </h2>
                    <p className='mt-5 text-gray-500 text-lg'>
                    Marhaba Investment is the leading investment company specializing in general trading investment, real states investment, industries investment.
                    </p>
                    <p className='mt-5 text-gray-500 text-lg'>
                    Marhaba investment company ltd is a subsidiary of Marhaba group of companies, and we’re rooted in the best of international practice as well as the principles of Islamic law and Shariah-compliant investment.
                    </p>
                    <button className='px-8 py-2 border mt-10 bg-[#78d251] text-black font-semibold rounded-xl mx-auto'>
                    <Link href="/About"> Learn More</Link>
                    </button>
                </div>
            </div>
            <div className='m-10 max-w-md mx-auto overflow-hidden md:max-w-7xl'>
          <div className='md:flex'>
            
            <div className='md:w-1/2 w-full p-8'>
                <div className='uppercase tracking-wide text-sm w-[120px] bg-[#009FFD] border-2 border-[#009FFD] font-semibold'></div>
                <h2 className='block mt-2 leading-tight font-semibold text-black text-3xl '>
                    What <span className='text-[#009FFD]'>We Do</span> 
                </h2>
                <p className='mt-5 text-gray-500 text-lg'>
                Marhaba investment has contributed to the Somali economy by becoming a key player in the
                development of the country through multiple development projects that that prominently utilized the
                country natural resources, most recently Marhaba investment took part in the developed the first mill
                processing maize flour in Mogadishu. This utilized the large fields of agriculture available in the Somali
                nation.

                </p>
                <p className='mt-5 text-gray-500 text-lg'>
                      Marhaba investment commitment to establishing strong better communication as well understanding the
                      importance of excellence in customer service and unwavering quality standards ensure the growth and
                      success of Marhaba investment ltd.
                </p>
                <button className='px-8 py-2 border mt-10 bg-[#009FFD] text-black font-semibold rounded-xl mx-auto'>
                    <Link href="/About"> Learn More</Link>
                </button>
            </div>
            <div className='md:w-1/2 w-full  mt-8 '>
              <Image src={Teamwork} width={850} height={550} className='object-cover h-full w-full' alt=''/>

            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Info