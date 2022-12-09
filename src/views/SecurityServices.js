
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import ssgcleaning from '../assets/images/ssgcleaning.jpg'
import personalised from '../assets/images/personalised.jpg'

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

import { HashLink as Link } from 'react-router-hash-link';
import {useContext} from 'react'
import {ServicesContext} from '../../src/context/ServicesContext.js'
import SecuritySection from '../../src/views/Security/SecuritySection.js'
import SecurityBlogSection from '../../src/views/Security/SecurityBlogSection.js'

import {Oval} from 'react-loader-spinner'

import {FaRegCheckCircle} from 'react-icons/fa'
import {FaRegTimesCircle} from 'react-icons/fa'

export default function SecurityServices() {
  const {security, loading, securityBlogs} = useContext(ServicesContext)
  const [error, setError] = React.useState('')

    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rqzzguo', 'template_p5p2ane', form.current, '6qtu4UTVm9c4kMSeW')
      .then((result) => {
          // console.log(result.text);
          setError(result.text)
      }, (error) => {
          console.log(error.text);
          setError('ERROR')
      });
  };




  return (
    <div>
        {/* Header */}
      <div className='bg-gray-100 pt-10 pb-4 px-6 md:px-16 lg:px-44 xl:px-60 grid-row-2 items-start grid md:grid-cols-2 gap-1'>
        {/* Text */}
        <div className='pr-6'>
        <h1 className='text-xl md:text-3xl font-semibold text-gray-800'>
            We Solve your Security Needs
        </h1>
        <p className='text-sm text-gray-500 my-4 lg:w-120'>We are a leading security company that provides personal and corporate security officers. Our officers are reliable, trustworthy and professional. They provide 24-hour protection to our clients.</p>
        
          <div className='mb-6 flex flex-col justify-start items-start md:flex md:flex-row'>
          <Link to='#services'>
          <button className='mb-3 shadow w-40 rounded-md bg-red-700 hover:bg-red-900 text-white px-4 outline outline-2 font-medium text-sm h-10'>Our Services</button>
          </Link>
          <Link to='#contactus'>
          <button className='shadow w-40 md:ml-4 rounded-md outline outline-2 outline-offset-0 outline-red-700 hover:outline-red-400 text-red-700 hover:text-red-400 px-4 h-10 font-medium text-sm'>Contact Us</button>
          </Link>

          </div>
        </div>
        {/* Image */}
        <img src={header} className='mb-6 h-auto w-full md:h-56 lg:h-80' alt='Security Needs' />
      </div>
         {/* Companies */} 
      <div className='grid grid-cols-5 gap-2 items-center px-6 md:px-16 lg:px-44 xl:120 my-4'>
          <img src={o2} />
          <img src={wembley} />
          <img src={alexander_palace} />
          <img src={ap} />
          <img src={gallow_glass} />
      </div>


      {/* Here's how SSG Security can benefit your business */}
      <div className='bg-red-700 px-6 md:px-16 lg:px-44 xl:px-60 py-10'>
        <h2 className='text-2xl text-white font-semibold'>Here's how SSG Security can benefit your business</h2>
        <div className='md:grid md:grid-cols-3 gap-2 mt-4'>
          <div className='bg-white p-4 rounded-md mb-2'>
            <img src={sia} className='h-14 md:h-28 my-0' alt='Security' />
            <hr className='border-sky-60 pb-3'/>
            <p className='text-sm md:text-md font-medium text-sky-600 pb-2'>We are licensed SIA contractor</p>
            <p className='text-sm text-sky-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
          <div className='bg-red-800 p-4 rounded-md mb-2'>
          <img src={established} className='h-10 md:h-20 my-4 md:pl-2' alt='Security' />
            <hr className='pb-3'/>
            <p className='text-sm md:text-md font-medium text-white pb-2'>We are licensed SIA contractor</p>
            <p className='text-sm text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
          <div className='bg-red-800 p-4 rounded-md text-white mb-2'>
          <img src={flexible} className='h-10 md:h-20 my-4 md:pl-2' alt='Security' />
            <hr className='pb-3'/>
            <p className='text-sm md:text-md font-medium pb-2'>We are Flexible for all your security needs</p>
            <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
        </div>
      </div>
{/* New Services */}
     <div id='services' className='bg-gray-100 px-6 md:px-16 lg:px-44 xl:px-60 py-10'>
      <h2 className='text-2xl text-gray-800 font-semibold'>Services</h2>
          <hr className='border-gray-500 my-4 mb-6' />
          {loading ? 
            <div className='flex flex-col justify-center items-center h-50'>
              <Oval
              height={80}
              width={80}
              color="red"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel='oval-loading'
              secondaryColor="red"
              strokeWidth={2}
              strokeWidthSecondary={2}
              />
            </div>
            :
            <div className='grid-cols-1 grid md:grid-cols-3 gap-4'>
              {security.map(post => 
              <SecuritySection post={post} key={post.id} />)}

            </div>
          }
      </div>


       {/* UK */}
      <div className='bg-red-700 px-6 md:px-16 lg:px-44 xl:px-60 py-6 grid md:grid-cols-3 gap-2'>
          <h2 className='text-2xl text-white font-semibold'>We provide security services all over the UK</h2>
          <img src={uk} className='h-auto w-40 md:w-auto md:pr-16 mt-4' alt='uk' />
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

            {/* Features Blogs */}
<div id='services' className='px-6 md:px-16 lg:px-44 xl:px-60 py-10'>
      <h2 className='text-2xl text-gray-800 font-semibold'>Featured Blogs</h2>
          <hr className='border-gray-500 my-4 mb-6' />
          {loading ? 
            <div className='flex flex-col justify-center items-center h-50'>
              <Oval
              height={80}
              width={80}
              color="red"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel='oval-loading'
              secondaryColor="red"
              strokeWidth={2}
              strokeWidthSecondary={2}
              />
            </div>
            :
            <div className='grid-cols-1 grid md:grid-cols-2 gap-4'>
              {securityBlogs.filter((post, index) => index < 4).map(post => 
              <SecurityBlogSection post={post} key={post.id} />)}

            </div>
          }
      </div>


            {/* Get in Touch with Us */}
            <div id='contactus' className='bg-gray-100 px-6 md:px-16 lg:px-44 xl:px-60 py-10'>
      <h2 className='text-2xl text-gray-800 font-semibold'>Contact Us</h2>
      <div className="pl-2 mt-3 text-gray-800 font-medium">
      <p className="text-gray-800"><span className="mt-3">Landline:</span> 020 3900 2489</p>
      <p className="text-gray-800"><span className="mt-3">Email:</span> info@ssgsecurity.co.uk</p>
      </div>
          <hr className='border-gray-500 my-4 mb-6' />
          
        <form ref={form} onSubmit={sendEmail} className='grid grid-cols-2 gap-4' type='submit'>
            <label className='flex flex-col font-medium text-sm text-gray-800'>
              Name:
              <input className='mt-1 h-8 px-4 py-1 bg-transparent rounded outline outline-2 outline-offset-0 outline-red-700 focus:outline-red-400' type="text" name="name" />
            </label>
            <label className='flex flex-col font-medium text-sm text-gray-800'>
              Email:
              <input className='mt-1 h-8 px-4 py-1 bg-transparent rounded outline outline-2 outline-offset-0 outline-red-700 focus:outline-red-400' type="email" name="email" />
            </label>
            <label className='flex flex-col font-medium text-sm text-gray-800'>
              Subject:
              <input className='mt-1 h-8 px-4 py-1 bg-transparent rounded outline outline-2 outline-offset-0 outline-red-700 focus:outline-red-400' type="text" name="subject" />
            </label>
            <label className='flex flex-col font-medium text-sm text-gray-800'>
              Message:
              <textarea className='mt-1 h-24 px-4 py-1 bg-transparent rounded outline outline-2 outline-offset-0 outline-red-700 focus:outline-red-400' name="message" />
            </label>
            <div className="flex flex-row justify-end col-span-2">
            <button className='mt-3 shadow w-40 rounded-md bg-red-700 hover:bg-red-900 text-white px-4 font-medium text-sm h-10'>Submit</button>
            </div>
        </form>

        {error === 'OK' &&
            <div className="flex bg-green-200 p-3 col-span-2 rounded-md text-gray-600 mt-3">
              <FaRegCheckCircle size={28} />
              <p className="pl-2 font-semibold">Message has been sent</p>
            </div>}
          {error === 'ERROR' &&  
            <div className="flex bg-red-200 p-3 col-span-2 rounded-md text-gray-600 mt-3">
              <FaRegTimesCircle size={28} />
              <p className="pl-2 font-semibold">Please fill the form</p>
            </div>}

      </div>

      {/* Extra Sections */}
      <div>
            {/* Our services */}
            <div className='bg-black px-6 lg:px-44 xl:px-60 py-8 h-fill pb-16'>
      <h2 className='text-2xl text-gray-100 font-semibold'>Our New Services</h2>
          <hr className='border-gray-500 my-4 mb-6' />

    <div className='grid grid-cols-2 gap-4 pt-2'>
  

          <div className='bg-white rounded-md shadow-md'>
          <Link to='/clearning-services'>
            <img src={ssgcleaning} className='h-auto w-full rounded-t-md' alt='Security' />
            <div className='p-4 pb-7'>
            <p className='text-sm bg-red-400 px-2 rounded w-12 text-center text-white my-1'>New</p>
            <p className='font-medium text-gray-600 pb-2'>Cleaning Security</p>
            <p className='text-sm text-gray-800 line-clamp-3'>Our experienced cleaners and maids can efficiently clean any size home. Our domestic helpers are available throughout the day to give you as much flexibility as you need. Simply decide how many hours you need a cleaner for, that fits your requirement and budget and book accordingly..</p>
            </div>
            </Link>
          </div>
          <div className='bg-white rounded-md shadow-md'>
          <a href='https://knockoutzone.co.uk/'>
            <img src={personalised} className='h-auto w-full rounded-t-md' alt='Security' />
            <div className='p-4 pb-7'>
            <p className='text-sm bg-red-400 px-2 rounded w-12 text-center text-white my-1'>New</p>
            <p className='font-medium text-gray-600 pb-2'>Knockout Zone</p>
            <p className='text-sm text-gray-800 line-clamp-3'>With expert coaches and a wide range of classes for both children and adults, we cater to all fitness levels.Working out together, feels good right? Take to the gym floor every day from 6pm - 8pm.</p>
            </div>
            </a>
          </div>
    </div>
          
      </div>

    </div> 
    </div>
  )
}
