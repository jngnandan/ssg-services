import React from 'react'

import facebook from '../assets/icons/facebook.svg'
import instagram from '../assets/icons/instagram.svg'
import twitter from '../assets/icons/twitter.svg'
import ssglogo from '../assets/images/ssglogo.png' 
import {Link} from 'react-router-dom'




export default function Footer() {
  return (
    <div className='my-10 px-6 md:px-16 h-16 lg:px-44 xl:px-60 font-medium text-sm flex flex-row justify-between items-center mt-0'>
          <div className='grid grid-cols-2 gap-2 justify-center items-center'>
          <Link to='/security-services'>
            <img src={ssglogo} className='md:w-20 md:h-20 my-2 w-24' />
          </Link>
          <Link to='/policies'>
          <p>Policies</p>
          </Link>

          </div>
      <div className='grid grid-cols-3 gap-4 text-center'>
      <a href="https://www.facebook.com/SSGSUK/">
      <img src={facebook} className='h-8' />
      </a>
      <a href='https://www.instagram.com/ssgsukofficial/'>
      <img src={instagram} className='h-8' />
      </a>
      <a href='https://twitter.com/SecuritySSG'>
      <img src={twitter} className='h-8' />
      </a>
      </div>
    </div>
  )
}
