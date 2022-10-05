
import React from 'react'
import sia from '../../src/assets/icons/sia-approved.svg'
import flexible from '../assets/icons/flexible.svg'
import established from '../../src/assets/icons/established.svg'
import header from '../../src/assets/images/header.png'
import eventSecurity from '../../src/assets/images/event_security.png'
import ccvSurvilance from '../../src/assets/images/cctv_survilance.png'
import retailSecurity from '../../src/assets/images/retail_security.png'
import keyHolding from '../../src/assets/images/key_holding.png'
import doorSupervision from '../../src/assets/images/door_supervision.png'
import mobilePatrol from '../../src/assets/images/mobile_patrol.png'
import o2 from '../../src/assets/icons/o2.svg'
import alexander_palace from '../../src/assets/icons/alexander_palace.svg'
import wembley from '../../src/assets/icons/wembley.svg'
import ap from '../../src/assets/icons/ap.svg'
import gallow_glass from '../../src/assets/icons/gallow_glass.svg'


export default function Home() {

  return (
    <div>
        {/* Header */}
      <div className='pt-7 px-6 lg:px-44 xl:px-60 grid-row-2 items-start grid md:grid-cols-2 gap-1'>
        {/* Text */}
        <div>
        <h1 className='text-xl md:text-3xl font-semibold text-gray-800'>
            We Solve your Security Needs
        </h1>
        <p className='text-sm text-gray-500 my-4 lg:w-120'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco </p>
        </div>
        {/* Image */}
        <img src={header} className='h-auto w-full md:h-56 lg:h-80' alt='Security Needs' />
        
      </div>
         {/* Companies */} 
      <div className='grid grid-cols-5 gap-2 items-center px-6 lg:px-44 xl:px-60 my-4'>
          <img src={o2} />
          <img src={wembley} />
          <img src={alexander_palace} />
          <img src={ap} />
          <img src={gallow_glass} />
      </div>


      {/* Here's how SSG Security can benefit your business */}
      <div className='bg-red-700 px-6 lg:px-44 xl:px-60 py-10'>
        <h2 className='text-2xl text-white font-semibold'>Here's how SSG Security can benefit your business</h2>
        <div className='grid grid-cols-3 gap-4 mt-4'>
          <div className='bg-white p-4 rounded-md'>
            <img src={sia} className='h-28 my-0' alt='Security' />
            <hr className='border-sky-600 pb-3'/>
            <p className='text-sm md:text-md font-medium text-sky-600 pb-2'>We are licensed SIA contractor</p>
            <p className='text-sm text-sky-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
          <div className='bg-red-800 p-4 rounded-md'>
          <img src={established} className='h-20 my-4 md:pl-2' alt='Security' />
            <hr className='pb-3'/>
            <p className='text-sm md:text-md font-medium text-white pb-2'>We are licensed SIA contractor</p>
            <p className='text-sm text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
          <div className='bg-red-800 p-4 rounded-md text-white'>
          <img src={flexible} className='h-20 my-4 md:pl-2' alt='Security' />
            <hr className='pb-3'/>
            <p className='text-sm md:text-md font-medium pb-2'>We are Flexible for all your security needs</p>
            <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
        </div>
      </div>
      {/* Our services */}
      <div className='bg-gray-200 px-6 lg:px-44 xl:px-60 py-10'>
      <h2 className='text-2xl text-gray-800 font-semibold'>Our Services</h2>
          <hr className='border-gray-500 my-4 mb-6' />
    <div className='grid-cols-2 grid lg:grid-cols-3 gap-4'>
        <div className='bg-white rounded-md shadow-md'>
            <img src={eventSecurity} className='h-auto w-full' alt='Security' />
            <div className='p-4 mb-4'>
            <p className='font-medium text-gray-600 pb-2'>Event Security</p>
            <p className='text-sm text-gray-800'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
          </div>
          <div className='bg-white rounded-md shadow-md'>
            <img src={retailSecurity} className='h-auto w-full' alt='Security' />
            <div className='p-4'>
            <p className='font-medium text-gray-600 pb-2'>Retail Security</p>
            <p className='text-sm text-gray-800'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
          </div>
          <div className='bg-white rounded-md shadow-md'>
            <img src={ccvSurvilance} className='h-auto w-full' alt='Security' />
            <div className='p-4'>
            <p className='font-medium text-gray-600 pb-2'>CCTV Survilance</p>
            <p className='text-sm text-gray-800'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
          </div>
          <div className='bg-white rounded-md shadow-md'>
            <img src={keyHolding} className='h-auto w-full' alt='Security' />
            <div className='p-4'>
            <p className='font-medium text-gray-600 pb-2'>Key Holding</p>
            <p className='text-sm text-gray-800'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
          </div>
          <div className='bg-white rounded-md shadow-md'>
            <img src={doorSupervision} className='h-auto w-full' alt='Security' />
            <div className='p-4'>
            <p className='font-medium text-gray-600 pb-2'>Door Supervision</p>
            <p className='text-sm text-gray-800'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
          </div>
          <div className='bg-white rounded-md shadow-md'>
            <img src={mobilePatrol} className='h-auto w-full' alt='Security' />
            <div className='p-4'>
            <p className='font-medium text-gray-600 pb-2'>Mobile Patrol</p>
            <p className='text-sm text-gray-800'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
          </div>
          
    </div>
          
      </div>

        
    </div>
  )
}
