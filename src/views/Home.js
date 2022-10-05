
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
import construction from '../../src/assets/images/construction.png'
import vehicleParking from '../../src/assets/images/vehicle_parking.png'
import corporateSecurity from '../../src/assets/images/corporate_security.png'
import uk from '../../src/assets/icons/uk.svg'
import g1 from '../../src/assets/images/g1.png'
import g2 from '../../src/assets/images/g2.png'
import g3 from '../../src/assets/images/g3.png'
import g4 from '../../src/assets/images/g4.png'
import g5 from '../../src/assets/images/g5.png'
import g6 from '../../src/assets/images/g6.png'
import g7 from '../../src/assets/images/g7.png'
import g8 from '../../src/assets/images/g8.png'

import o2 from '../../src/assets/icons/o2.svg'
import alexander_palace from '../../src/assets/icons/alexander_palace.svg'
import wembley from '../../src/assets/icons/wembley.svg'
import ap from '../../src/assets/icons/ap.svg'
import gallow_glass from '../../src/assets/icons/gallow_glass.svg'
import check from '../../src/assets/icons/check.svg'
import { Input } from 'postcss'


export default function Home() {

  return (
    <div>
        {/* Header */}
      <div className='bg-gray-100 pt-6 px-6 lg:px-44 xl:px-60 grid-row-2 items-start grid md:grid-cols-2 gap-1'>
        {/* Text */}
        <div>
        <h1 className='text-xl md:text-3xl font-semibold text-gray-800'>
            We Solve your Security Needs
        </h1>
        <p className='text-sm text-gray-500 my-4 lg:w-120'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco </p>
        
          <div className='mb-6 md:flex md:flexrow'>
            <button className='shadow w-40 rounded-md bg-red-700 hover:bg-red-900 text-white px-4 outline outline-2 font-medium text-sm h-10'>Our Services</button>
            <button className='shadow w-40 ml-4 rounded-md outline outline-2 outline-offset-0 outline-red-700 hover:outline-red-400 text-red-700 hover:text-red-400 px-4 h-10 font-medium text-sm'>Our Services</button>

          </div>
        </div>
        {/* Image */}
        <img src={header} className='mb-6 h-auto w-full md:h-56 lg:h-80' alt='Security Needs' />
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

    <div className='grid-cols-2 grid md:grid-cols-3 gap-4'>
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

          <div className='bg-white rounded-md shadow-md'>
            <img src={construction} className='h-auto w-full' alt='Security' />
            <div className='p-4'>
            <p className='font-medium text-gray-600 pb-2'>Construction Security</p>
            <p className='text-sm text-gray-800'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
          </div>
          <div className='bg-white rounded-md shadow-md'>
            <img src={vehicleParking} className='h-auto w-full' alt='Security' />
            <div className='p-4'>
            <p className='font-medium text-gray-600 pb-2'>Vehicle Parking Security</p>
            <p className='text-sm text-gray-800'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
          </div>
          <div className='bg-white rounded-md shadow-md'>
            <img src={corporateSecurity} className='h-auto w-full' alt='Security' />
            <div className='p-4'>
            <p className='font-medium text-gray-600 pb-2'>Corporate Security</p>
            <p className='text-sm text-gray-800'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
          </div>
          
    </div>
          
      </div>
       {/* UK */}
      <div className='bg-red-700 px-6 lg:px-44 xl:px-60 py-10 grid md:grid-cols-3 gap-2'>
          <h2 className='text-2xl text-white font-semibold'>We provide security services all over the UK</h2>
          <img src={uk} className='h-auto md:pr-16 mt-4' alt='uk' />
          <div>
            <h3 className='text-white text-xl font-semibold'>Best in class Security</h3>
              <div>
              <p className='text-sm text-white pt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                <div className='flex flex-row items-center justify-start'>
                <img src={check} className='h-auto' alt='uk' />
                <p className='text-sm text-white p-2'>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                </div>
                <div className='flex flex-row items-center justify-start'>
                <img src={check} className='h-auto' alt='check' />
                <p className='text-sm text-white p-2'>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                </div>
                <div className='flex flex-row items-center justify-start'>
                <img src={check} className='h-auto' alt='uk' />
                <p className='text-sm text-white p-2'>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                </div> 
              </div>
          </div>
      </div>

      {/* Gallery */}
      <div className='bg-gray-200 '>
      {/* <h2 className='text-2xl text-gray-800 font-semibold px-6 lg:px-44 xl:px-60'>Gallery</h2> */}
          {/* <hr className='border-gray-500 my-4 mb-6 px-6 lg:px-44 xl:px-60' /> */}
    <div className='grid-cols-2 grid lg:grid-cols-4 gap-0'>
        <div className=''>
            <img src={g1} className='h-auto w-full' alt='Security' />
          </div>
          <div className=''>
            <img src={g2} className='h-auto w-full' alt='Security' />
          </div>
          <div className=''>
            <img src={g3} className='h-auto w-full' alt='Security' />
          </div>
          <div className=''>
            <img src={g4} className='h-auto w-full' alt='Security' />
          </div>
          <div className=''>
            <img src={g5} className='h-auto w-full' alt='Security' />
          </div>
          <div className=''>
            <img src={g6} className='h-auto w-full' alt='Security' />
          </div>

          <div className=''>
            <img src={g7} className='h-auto w-full' alt='Security' />
          </div>
          <div className=''>
            <img src={g8} className='h-auto w-full' alt='Security' />
          </div>
          
    </div>
          
      </div>

            {/* Get in Touch with Us */}
            <div className='bg-gray-200 px-6 lg:px-44 xl:px-60 py-10'>
      <h2 className='text-2xl text-gray-800 font-semibold'>Contact Us</h2>
          <hr className='border-gray-500 my-4 mb-6' />
          
        <form className='grid grid-cols-2 gap-4' type='submit'>
            <label className='flex flex-col font-medium text-sm text-gray-800'>
              First Name:
              <input className='mt-1 h-8 px-4 py-1 bg-transparent rounded outline outline-2 outline-offset-0 outline-red-700 focus:outline-red-400' type="text" name="name" />
            </label>
            <label className='flex flex-col font-medium text-sm text-gray-800'>
              Last Name:
              <input className='mt-1 h-8 px-4 py-1 bg-transparent rounded outline outline-2 outline-offset-0 outline-red-700 focus:outline-red-400' type="text" name="name" />
            </label>
            <label className='flex flex-col font-medium text-sm text-gray-800'>
              Email:
              <input className='mt-1 h-8 px-4 py-1 bg-transparent rounded outline outline-2 outline-offset-0 outline-red-700 focus:outline-red-400' type="email" name="email" />
            </label>
            <label className='flex flex-col font-medium text-sm text-gray-800'>
              Service Interested:
              <input className='mt-1 h-8 px-4 py-1 bg-transparent rounded outline outline-2 outline-offset-0 outline-red-700 focus:outline-red-400' type="text" name="text" />
            </label>
            <button className='mt-3 shadow w-40 rounded-md bg-red-700 hover:bg-red-900 text-white px-4 font-medium text-sm h-10'>Submit</button>

        </form>
      </div>
        
    </div>
  )
}
