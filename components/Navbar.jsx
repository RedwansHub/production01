import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Logo from '../public/Assets/Logo.png'
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 590) {
        setColor('#0E0F19');
        setTextColor('#ffffff');
      } else {
        setColor('transparent');
        setTextColor('#ffffff');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className='fixed left-0 top-0 w-full z-10 ease-in duration-300'
    >
      <div className='max-w-[1240px] m-auto flex justify-between items-center p-1 text-white'>
          <div className='flex justify-center items-center'>
            <div className='col'>
              <Image src={Logo} width={100} height={80} alt=''/>
            </div>
              <Link href='/' className=''>
                <h1 style={{ color: `${textColor}` }} className='font-bold text-2xl'>
                  Marhaba <span className='text-[#78d251]'>Investment</span>
                </h1>
              </Link>

          </div>
        <ul style={{ color: `${textColor}` }} className='hidden sm:flex'>
          <li className='p-4'>
            <Link href='/'>Home</Link>
          </li>
          <li className='p-4'>
            <Link href='/About'>About</Link>
          </li>
          <li className='p-4'>
            <Link href='/Investment'>Investment</Link>
          </li>
          <li className='p-4'>
            <Link href='/Services'>Services</Link>
          </li>
          <li className='p-4'>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className='block sm:hidden z-10'>
          {nav ? (
            <AiOutlineClose size={30} style={{ color: 'white',}} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300]  ease-in-out duration-500'
                             : 'fixed left-[100%] ease-in-out duration-500'}>
          <div className='flex justify-center items-center p-2'>
            <div className='col'>
              <Image src={Logo} width={100} height={80} alt=''/>
            </div>
              <Link href='/' className=''>
                <h1 style={{ color: `${textColor}` }} className='font-bold text-2xl'>
                  Marhaba <span className='text-[#78d251]'>Investment</span>
                </h1>
              </Link>
          </div>
           <ul className='uppercase p-4'>
              <li className='p-4'><Link href="/" >Home</Link> </li>
              <li className='p-4'><Link href="/About" >About</Link> </li>
              <li className='p-4'><Link href="/Investment" >Investment</Link> </li>
              <li className='p-4'><Link href="/Services" >Services</Link> </li>
              <li className='p-4'><Link href="/contact" >Contact</Link> </li>
          </ul>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
