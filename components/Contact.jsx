import React from 'react'

const Contact = () => {
  return (
    <div className='max-w-[1240px] m-auto p-4 h-full'>
        
        <div className='md:flex'>
        <div className='md:w-1/2 w-full p-8'>
                <div className='uppercase tracking-wide text-sm w-[120px] bg-[#009FFD] border-2 border-[#009FFD] font-semibold'></div>
                <h2 className='block mt-2 leading-tight font-semibold text-black text-2xl '>
                    <span className='text-[#009FFD]'>Somalia Headquaters</span> 
                </h2>
                
                <p className='mt-5 text-lg font-bold'>Address: </p>
                <p className=' text-gray-500 text-lg'>
                Trepiano, Maka almukarama Street, Mogadishu – Somalia</p>
               
                <p className='mt-1 text-lg font-bold'>Telephone: </p>
                <p className=' text-gray-500 text-lg font-sans'>
                +252611111554, +252617994946</p>

                <p className='mt-1 text-lg font-bold'>Email: </p>
                <p className=' text-gray-500 text-lg font-sans'>
                 Info@Marhabainvestment.co</p>
                
                
                
                <div className='uppercase tracking-wide text-sm w-[120px] bg-[#78d251] border-2 border-[#78d251] font-semibold mt-10'></div>
                <h2 className='block mt-2 leading-tight font-semibold text-black text-2xl '>
                    <span className='text-[#78d251]'>Turkey Headquaters</span> 
                </h2>
                
                <p className='mt-5 text-lg font-bold'>Address: </p>
                <p className=' text-gray-500 text-lg lower'>
                Zafer Mah. 185. SK. Babacan Premium B
                Blok No: 4 B İÇ Kapi No: 10 Esnyurt/ İstanbul</p>
               
                <p className='mt-1 text-lg font-bold'>Telephone: </p>
                <p className=' text-gray-500 text-lg font-sans'>
                +905356621020</p>

                <p className='mt-1 text-lg font-bold'>Email: </p>
                <p className=' text-gray-500 text-lg font-sans'>
                 Info@Marhabainvestment.co</p>
               
                
            </div>
            <div className='md:w-1/2 w-full  mt-8 '>
            <h1 className='text-2xl font-bold text-center p-4'>Contact Us</h1>
        <form className='max-w-[500px] m-auto' action="https://getform.io/f/6403ba63-29e0-4418-8284-5656dd13180c" method="POST">
            <div className='grid grid-cols-2 gap-2'>
                <input className='border shadow-lg p-3' type="text" placeholder='Name' name='name'/>
                <input className='border shadow-lg p-3' type="email" placeholder='Email' name='email'/>
            </div>
            <input className='border shadow-lg p-3 w-full my-2' type="text" placeholder='Subject' name='subject'/>
            <textarea className='border shadow-lg p-3 w-full' cols="30" rows="10" placeholder='Message' name='message'></textarea>
            <button className='border shadow-lg p-3 w-full mt-2 bg-[#009FFD] text-xl text-white font-semibold'  >Submit</button>
        </form>

            </div>
        </div>
    </div>
  )
}

export default Contact


{/* 

*/}