import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';


import menu from '../assets/icons/menu.svg'
import close from '../assets/icons/close.svg'
import ssglogo from '../assets/images/ssglogo.png' 


export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(true);

  return (
    <div>
        <div className='shadow flex flex-row justify-between items-center h-16 px-8  lg:px-44 xl:px-60 font-medium text-sm'>
          <div className='' onClick={() => setNavbarOpen(true)}>
          <Link to='/security-services'>
            <img src={ssglogo} className='md:w-23 md:h-23 my-2  w-24' />
          </Link>
          </div>

          <div className='flex flex-row m-5 invisible  md:visible'>
            <HashLink to='/#security-services'>
                <p className='mx-2'>Security Services</p>
            </HashLink>
            {/* <Link to='/clearning-services'>
                <p className='mx-2'>Cleaning Services</p>
            </Link> */}

           <a href ="http://www.ssgcleaning.co.uk/" target="_blank"> Cleaning Services </a>
            <Link to='/contactus'>
              <p className='mx-2'>Contact us</p>
            </Link>
          </div>

          {navbarOpen?
            <button onClick={() => setNavbarOpen(!navbarOpen)} className='flex flex-col justify-center items-center sm:block md:hidden'>
            <img src={menu} className='h-5' />
          </button>
          :
          <button onClick={() => setNavbarOpen(!navbarOpen)} className='flex flex-col justify-center items-center sm:block md:hidden'>
            <img src={close} className='h-5' />
          </button>
          }
        </div>

        {!navbarOpen &&
        <div className='px-6 font-medium text-sm pb-4 bg-red-700'>
          <Link to='/security-services' onClick={() => setNavbarOpen(!navbarOpen)}>
                <p className='py-3 text-white hover:text-black w-full'>Security Services</p>
            </Link>
            {/* <Link to='{http://www.ssgcleaning.co.uk/}' onClick={() => setNavbarOpen(!navbarOpen)}>
                <p className='py-3 text-white hover:text-black w-full'>Cleaning Services</p>
            </Link> */}
            
            <Link to='/contactus' onClick={() => setNavbarOpen(!navbarOpen)}>
              <p className='py-3 text-white hover:text-black w-full'>Contact us</p>
            </Link>
        </div>
        }
      </div>
  )
}
