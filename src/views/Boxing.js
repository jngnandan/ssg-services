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
import boxing from '../assets/images/boxing.jpg'
import boxer from '../assets/images/boxer.jpg'
import personalised from '../assets/images/personalised.jpg'


import o2 from '../../src/assets/icons/o2.svg'
import alexander_palace from '../../src/assets/icons/alexander_palace.svg'
import wembley from '../../src/assets/icons/wembley.svg'
import ap from '../../src/assets/icons/ap.svg'
import gallow_glass from '../../src/assets/icons/gallow_glass.svg'
import check from '../../src/assets/icons/check.svg'
import whatsapp from '../../src/assets/icons/whatsapp.svg'
import call from '../../src/assets/icons/call.svg'



export default function Boxing() {
  return (
    <div>
      {/* Header */}
      <div className='bg-black pt-10 pb-4 px-6 md:px-16 lg:px-44 xl:px-60 grid-row-2 items-start grid md:grid-cols-2 gap-1'>
        {/* Text */}
        <div className='pr-6'>
        <h1 className='text-xl md:text-3xl font-semibold text-white'>
            Boxing Knockout Zone
        </h1>

        <div className='pl-4'>
          {/* Text */}
        <p className='font-semibold text-white mt-3 lg:w-120 pb-2'>Address</p>
        <a className='underline text-gray-300 pl-2' target="_blank" href='https://www.google.com/maps/place/243+Sprowston+Mews,+London/data=!4m2!3m1!1s0x47d8a7978aa0023d:0xaa277c6e38422344?sa=X&ved=2ahUKEwjbxty33836AhW6SkEAHX_2CrsQ8gF6BAgUEAE'>243 Sprowston Mews</a>
        <p className='font-semibold text-white pb-2 pt-4 lg:w-120'>Get in Touch</p>
                <div className='flex flex-row items-center justify-start pl-2'>
                <img src={whatsapp} className='h-6 fill-white' alt='Whatsapp' />
                <a className='underline text-gray-300 pl-1' target="_blank" href="wa.me/+447425952473">+447425952473</a>
                </div>
                <div className='flex flex-row items-center justify-start pl-2 pt-3'>
                <img src={call} className='h-6 fill-white' alt='Whatsapp' />
                <a className='underline text-gray-300 pl-2' href="tel:02037422842">02037422842</a>
                </div>

        <p className='font-semibold text-white lg:w-120 pt-4 pb-2'>Oprning Hours</p>
        <div className='pl-3 pb-4'>
        <p  className='text-gray-300'><span className='font-semibold pr-2'>Mon - Fri :</span>18:00 - 20:00 </p>
        </div>

        </div>
        </div>
        
        {/* Image */}
        <img src={boxing} className='mb-6 h-auto w-full md:h-56 lg:h-80 rounded-md' alt='Security Needs' />
      </div>

            {/* Here's how SSG Security can benefit your business */}
        <div className='px-6 md:px-16 lg:px-44 xl:px-60 py-10'>
        <h2 className='text-2xl text-white font-semibold text-gray-700'>Join Our Membership</h2>
          {/* Image Box */}
        <div className=' mt-4'>
          <div className='flex flex-col justify-center items-start border-red-700 p-4 rounded-md h-72 bg-cover bg-center py-6 grayscale-[40%]' style={{backgroundImage: `url(${personalised})`}}>
            {/* Content */}
            <p className='text-2xl md:text-md font-medium text-white pb-2 pl-4'>Learn Boxing in 30 days</p>
            <hr className='border-white pb-3'/>
            <p className='text-sm text-white pl-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet, </p>
                    
            <div className='mb-6 md:flex md:row pt-6 pl-4'>
            <button className='shadow w-40 rounded-md bg-white hover:bg-red-400 text-transparant px-4 font-medium text-sm h-10'>Join Now</button>
            <button className='shadow w-40 ml-4 rounded-md outline outline-2 outline-offset-0 outline-white hover:outline-red-400 text-white hover:text-red-400 px-4 h-10 font-medium text-sm'>Contact Us</button>

          </div>
          </div>
        </div>
      </div>

                      {/* Our services */}
                      <div className='px-6 md:px-16 lg:px-44 xl:px-60 py-5 pb-10 bg-gray-100'>
      <h2 className='text-2xl text-gray-800 font-semibold'>Our Benefits</h2>
          <hr className='border-gray-500 my-4 mb-6' />

    <div className='grid grid-cols-2 gap-4'>
        <div className='pr-5 px-5 bg-white rounded-md shadow-md my-1 bg-cover flex flex-col justify-center h-52 items-start bg-center' style={{backgroundImage: `url(${boxing})`}}>
        <p className='text-xl font-semibold text-white pl-4 pb-2'>Personalised Training</p>
        <p className='text-sm text-white pl-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </p>

          </div>
          <div className='pr-5 px-5 bg-white rounded-md shadow-md bg-cover flex flex-col justify-center h-52 items-start bg-center' style={{backgroundImage: `url(${boxer})`}}>
        <p className='text-xl font-semibold text-white pl-4 pb-2'>Individual Plan</p>
        <p className='text-sm text-white pl-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </p>

          </div>
    </div>
          
      </div>
      
       {/* Benefits */}
       <div className='bg-black px-6 md:px-16 lg:px-44 xl:px-60 py-10 grid md:grid-cols-2 gap-2'>
          <div className='pr-2'>
          <h2 className='text-2xl text-white font-semibold'>The Features</h2>
          <p className='text-sm text-white pt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.consectetur adipiscing elit.</p>
          </div>

          <div className='pt-4'>
            <h3 className='text-white text-lg font-semibold'>Best in class Security</h3>
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
      <div className='bg-gray-100 '>
      {/* <h2 className='text-2xl text-gray-800 font-semibold px-6 lg:px-44 xl:px-60'>Gallery</h2> */}
          {/* <hr className='border-gray-500 my-4 mb-6 px-6 lg:px-44 xl:px-60' /> */}
    <div className='grid-cols-2 grid md:grid-cols-4 gap-0'>
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
      <div className='bg-gray-100 px-6 md:px-16 lg:px-44 xl:px-60 py-10'>
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
