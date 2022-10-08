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

import cleaning from '../assets/images/cleaning.jpg'

import o2 from '../../src/assets/icons/o2.svg'
import alexander_palace from '../../src/assets/icons/alexander_palace.svg'
import wembley from '../../src/assets/icons/wembley.svg'
import ap from '../../src/assets/icons/ap.svg'
import gallow_glass from '../../src/assets/icons/gallow_glass.svg'
import check from '../../src/assets/icons/check.svg'

import { HashLink as Link } from 'react-router-hash-link';


export default function CleaningServices() {
  return (
    <div>
    {/* Cleaning */}
    <div className=''>
      {/* 2 Texts */}
          <div className=' pt-8 pb-4 px-6 md:px-16 lg:px-44 xl:px-60 grid-row-2 items-start grid md:grid-cols-2 gap-1'>
              {/* Text */}
              <div className='pr-6'>
              <h1 className='text-xl md:text-3xl font-semibold text-gray-800'>
                  We Provide Cleaning Solutions <span className='text-gray-500'>to your Everyday Hussles</span>
              </h1>
              
              </div>
              {/* text 2 */}
              <p className='text-sm text-gray-500 my-4 lg:w-120'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
            </div>

              {/* Image */}
          <img src={cleaning} className='object-cover h-80 lg:h-96 w-full mt-1' />
          {/* Second section */}
          <div className=''>
          <div className='px-6'>
          <hr className='border-gray-500 mt-4 mb-3 mt-8' />
          </div>
          <div className='pt-3 pb-4 px-6 md:px-16 lg:px-44 xl:px-60 grid-row-2 items-start grid md:grid-cols-2 gap-1'>
              {/* Text */}
              <div className='pr-6'>
              <h1 className='text-xl md:text-3xl font-semibold text-gray-500'>
                  We Provide the right Solutions
              </h1>
                <div className='mt-6 md:flex md:row'>
                <Link to='#contactus'>
                <button className='shadow md:mb-6 mb-4 w-40 rounded-md bg-red-700 hover:bg-red-900 text-white px-4 outline outline-2 font-medium text-sm h-10'>Contact Us</button>
                </Link>
                  {/* <button className='shadow w-40 ml-4 rounded-md outline outline-2 outline-offset-0 outline-red-700 hover:outline-red-400 text-red-700 hover:text-red-400 px-4 h-10 font-medium text-sm'>Our Services</button> */}

              </div>
              
              </div>
              {/* text 2 */}
              <div>
              <p className='text-sm text-gray-800 md:mt-2 lg:w-120 font-semibold'>Lorem ipsum dolor sit amet, consectetur adipectus and hrstuv</p>
              <p className='text-sm text-gray-500 my-2 lg:w-120'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.ut labore et dolore magna aliqua. Ut enim ad minim veniam.ut labore et dolore magna aliqua. Ut enim ad minim.</p>
              </div>
            </div>
          </div>
    </div>
          {/* Our services */}
          <div className='px-6 md:px-16 lg:px-44 xl:px-60 py-10 bg-gray-100'>
      <h2 className='text-2xl text-gray-800 font-semibold'>Our Services</h2>
          <hr className='border-gray-500 my-4 mb-6' />

    <div className='grid md:grid-cols-3 gap-4'>
        <div className='bg-white rounded-md shadow-md'>
            <img src={eventSecurity} className='h-auto w-full' alt='Security' />
            <div className='p-4 mb-4'>
            <p className='font-medium text-gray-600 pb-2'>Domestic Cleaning</p>
            <p className='text-sm text-gray-800'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
          </div>
          <div className='bg-white rounded-md shadow-md'>
            <img src={retailSecurity} className='h-auto w-full' alt='Security' />
            <div className='p-4'>
            <p className='font-medium text-gray-600 pb-2'>Office Cleaning</p>
            <p className='text-sm text-gray-800'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
          </div>
          <div className='bg-white rounded-md shadow-md'>
            <img src={ccvSurvilance} className='h-auto w-full' alt='Security' />
            <div className='p-4'>
            <p className='font-medium text-gray-600 pb-2'>Carpet Cleaning</p>
            <p className='text-sm text-gray-800'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
          </div>
          <div className='bg-white rounded-md shadow-md'>
            <img src={keyHolding} className='h-auto w-full' alt='Security' />
            <div className='p-4'>
            <p className='font-medium text-gray-600 pb-2'>Waste Removal</p>
            <p className='text-sm text-gray-800'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
          </div>
          <div className='bg-white rounded-md shadow-md'>
            <img src={doorSupervision} className='h-auto w-full' alt='Security' />
            <div className='p-4'>
            <p className='font-medium text-gray-600 pb-2'>One Off Cleaning</p>
            <p className='text-sm text-gray-800'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
          </div>
          <div className='bg-white rounded-md shadow-md'>
            <img src={mobilePatrol} className='h-auto w-full' alt='Security' />
            <div className='p-4'>
            <p className='font-medium text-gray-600 pb-2'>Oven Cleaning</p>
            <p className='text-sm text-gray-800'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
          </div>
          
    </div>
          
      </div>

      {/* Get in Touch with Us */}
      <div id='contactus' className='bg-white px-6 md:px-16 lg:px-44 xl:px-60 py-10'>
      <h2 className='text-2xl text-gray-800 font-semibold'>Contact Us</h2>
          <hr className='border-gray-500 my-4 mb-6' />
          
        <form className='grid grid-cols-2 gap-4' type='submit'>
            <label className='flex flex-col font-medium text-sm text-red-800'>
              First Name:
              <input className='mt-1 h-8 px-4 py-1 bg-transparent rounded outline outline-2 outline-offset-0 outline-red-700 focus:outline-red-400' type="text" name="name" />
            </label>
            <label className='flex flex-col font-medium text-sm text-red-800'>
              Last Name:
              <input className='mt-1 h-8 px-4 py-1 bg-transparent rounded outline outline-2 outline-offset-0 outline-red-700 focus:outline-red-400' type="text" name="name" />
            </label>
            <label className='flex flex-col font-medium text-sm text-red-800'>
              Email:
              <input className='mt-1 h-8 px-4 py-1 bg-transparent rounded outline outline-2 outline-offset-0 outline-red-700 focus:outline-red-400' type="email" name="email" />
            </label>
            <label className='flex flex-col font-medium text-sm text-red-800'>
              Service Interested:
              <input className='mt-1 h-8 px-4 py-1 bg-transparent rounded outline outline-2 outline-offset-0 outline-red-700 focus:outline-red-400' type="text" name="text" />
            </label>
            <button className='mt-3 shadow w-40 rounded-md bg-red-700 hover:bg-red-900 text-white px-4 font-medium text-sm h-10'>Submit</button>

        </form>
      </div>
    







    </div>
  )
}
