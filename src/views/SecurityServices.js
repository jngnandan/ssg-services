
import React, { useRef } from 'react';
import { PopupButton, InlineWidget, PopupModal } from "react-calendly";
import Iframe from 'react-iframe'
import ReactPlayer from "react-player"


import emailjs from '@emailjs/browser';
import ssgcleaning from '../assets/images/ssgcleaning.jpg'
import personalised from '../assets/images/personalised.jpg'

import sia from '../../src/assets/icons/sia-approved.svg'
import flexible from '../assets/icons/flexible.svg'
import established from '../../src/assets/icons/established.svg'
import header from '../../src/assets/images/header.jpg'
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
import video from '../../src/assets/documents/company.mp4'
import { HashLink as Link } from 'react-router-hash-link';
import {useContext} from 'react'
import {ServicesContext} from '../../src/context/ServicesContext.js'
import SecuritySection from '../../src/views/Security/SecuritySection.js'
import SecurityBlogSection from '../../src/views/Security/SecurityBlogSection.js'

import {Oval} from 'react-loader-spinner'

import {FaRegCheckCircle} from 'react-icons/fa'
import {FaRegTimesCircle} from 'react-icons/fa'
import { useState } from 'react';
import {RiCheckboxCircleFill} from 'react-icons/ri'

export default function SecurityServices() {
  const {security, loading, securityBlogs} = useContext(ServicesContext)
  const [error, setError] = React.useState('')
  const [success, setSuccess] = useState(false)
  const [subscribe, setSubscribe] = useState(false)

    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();
        setSuccess('loading')
    emailjs.sendForm('service_rqzzguo', 'template_p5p2ane', form.current, '6qtu4UTVm9c4kMSeW')
      .then((result) => {
          // console.log(result.text);
          setError(result.text)
          setSuccess(true)
      }, (error) => {
          console.log(error.text);
          setError('ERROR')
      });
  };

  const sendSubscribe = (e) => {
    e.preventDefault();
        setSubscribe('loading')
    emailjs.sendForm('service_bc98gyb', 'template_p5p2ane', form.current, '6qtu4UTVm9c4kMSeW')
      .then((result) => {
          // console.log(result.text);
          setError(result.text)
          setSubscribe(true)
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
            We provide Immediate Security for your business needs
        
        </h1>
        <p className='text-sm text-gray-600 my-4 lg:w-120'>We provide services for both residential and commercial properties, as well as for special events. We work with both small and large businesses to help them design customized security plans that suit their needs.
        </p>
        <form ref={form} onSubmit={sendSubscribe} className='grid grid-row-3 gap-4 items-center pb-3' type='submit'>
            <label className='flex flex-col font-medium text-sm text-gray-800'>
              <input placeholder='Name' className='mt-1 h-8 px-4 py-1 bg-transparent rounded outline outline-2 outline-offset-0 outline-red-700 focus:outline-red-400' type="text" name="name" />
            </label>
            <label className='flex flex-col font-medium text-sm text-gray-800'>
              <input placeholder='Email' className='mt-1 h-8 px-4 py-1 bg-transparent rounded outline outline-2 outline-offset-0 outline-red-700 focus:outline-red-400' type="email" name="email" />
            </label>
            <label className='flex flex-col font-medium text-sm text-gray-800'>
           
           
           {success === false &&
            <button className='mt-1 mb-3 shadow w-40 rounded-md bg-red-700 hover:bg-red-900 text-white px-4 font-medium text-sm h-10 flex flex-row justify-center items-center'>
              Submit
          </button>
           }

            {success === 'loading' &&
              <button className='mt-1 mb-3 shadow w-40 rounded-md bg-red-700 hover:bg-red-900 text-white px-4 font-medium text-sm h-10 flex flex-row justify-center items-center'>
              <Oval
              height={28}
              width={28}
              color="#ffffff"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel='oval-loading'
              secondaryColor="#ffffff"
              strokeWidth={3}
              strokeWidthSecondary={3}
              />
          </button>
            }
            {success === true &&
              <button className='mt-1 mb-3 shadow w-40 rounded-md bg-red-700 hover:bg-red-900 text-white px-4 font-medium text-sm h-10 flex flex-row justify-center items-center'>
              <RiCheckboxCircleFill className='mr-2 h-7 w-7' />
          </button>
            }

            </label>
        </form>
        </div>
        {/* Image */}
        {/* <img src={header} className='mb-6 w-full h-auto md:h-56 lg:h-80' alt='Security Needs' /> */}
        {/* <Iframe url="https://www.facebook.com/SSGSUK/videos/1522969701434907"
        width="640px"
        height="320px"
        id=""
        className=""
        display="block"
        position="relative"/> */}
      {/* <video autoplay="">
        <source src={require('https://www.facebook.com/SSGSUK/videos/1522969701434907')}  />
    </video> */}
    {/* <ReactPlayer
        url="https://youtu.be/V7knPMQPuMY"
        controls autoplay
      />     */}
   
   <video autoPlay loop playsInline controls muted src= {video} />


    {/* <iframe src='https://youtu.be/V7knPMQPuMY'
        allow='autoplay; encrypted-media'
        allowFullScreen
        title='video' */}

     
      </div>
         {/* Companies */} 
      {/* <div className='grid grid-cols-5 gap-2 items-center px-6 md:px-16 lg:px-44 xl:120 my-4'>
          <img src={o2} />
          <img src={wembley} />
          <img src={alexander_palace} />
          <img src={ap} />
          <img src={gallow_glass} />
      </div> */}


      {/* Here's how SSG Security can benefit your business */}
      <div className='bg-red-700 px-6 md:px-16 lg:px-44 xl:px-60 py-10'>
        <h2 className='text-2xl text-white font-semibold'>Benefits with SSG Security</h2>
        <div className='md:grid md:grid-cols-3 gap-2 mt-4'>
          <div className='bg-white p-4 rounded-md mb-2'>
            <img src={sia} className='h-14 md:h-28 my-0' alt='Security' />
            <hr className='border-sky-60 pb-3'/>
            {/* <p className='text-sm md:text-md font-medium text-sky-600 pb-2'>We are SIA ACS approved contractor</p> */}
            <head>
            <p className='text-sm md:text-md font-medium text-sky-600 pb-2'>Secure Security Guards Ltd currently holds SIA Approved Contractor Scheme (ACS) status for the provision of Security Guarding.</p>
            </head>
            <body>
              <a href="https://www.services.sia.homeoffice.gov.uk/Pages/acs-roac.aspx?contractor=SESEGUSC01" target="_blank"><p className='text-sm md:text-md font-medium text-sky-600 pb-2'>Secure Security Guards Ltd currently holds SIA Approved Contractor Scheme (ACS) status for the provision of Security Guarding.</p></a>
            </body> 
            <p className='text-sm text-gray-600 line-clamp-7'>Secure Security Guards Ltd currently holds SIA Approved Contractor Scheme (ACS) status for the provision of Security Guarding. We are an established company with over 7 years of experience in the security industry. We are licensed, bonded, and insured, so you can be assured that we will do everything we can to protect your property or event.</p>
          </div>
          <div className='bg-red-800 p-4 rounded-md mb-2'>
          <img src={established} className='h-10 md:h-20 my-4 md:pl-2' alt='Security' />
            <hr className='pb-3'/>
            <p className='text-sm md:text-md font-medium text-white pb-2'>Comprehensive security services, at competitive prices.</p>
            <p className='text-sm text-gray-200 line-clamp-7'>We are a company that offers full range of security services and we also provide 24/7 monitoring services at all times from pubs, clubs and corporate security to and key holding, Mobile Patrol and CCTV Survilence </p>
          </div>
          <div className='bg-red-800 p-4 rounded-md text-white mb-2'>
          <img src={flexible} className='h-10 md:h-20 my-4 md:pl-2' alt='Security' />
            <hr className='pb-3'/>
            <p className='text-sm md:text-md font-medium pb-2'>Flexible and immediately available to business needs</p>
            <p className='text-sm line-clamp-7 text-gray-200'>We are proud to be able to offer flexibility in security guarding services. We understand how important it is for clients to have someone who can adapt to any situation, we are prepared for anything.</p>
          </div>
        </div>
      </div>
{/* New Services */}
     <div id='security-services' className='bg-gray-100 px-6 md:px-16 lg:px-44 xl:px-60 py-10'>
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
              <p className='text-sm text-white pt-2'>We cover security guarding services across UK. We have a team of highly trained and experienced professionals who have been providing security guard services to organisations for more than 7 years now.</p>
               
              </div>
          </div>
      </div>

      
      <div className='bg-gray-100 px-6 md:px-16 lg:px-44 xl:px-60 py-10'>
      <h2 className='text-2xl text-gray-800 font-semibold'>Book a meeting for your security needs</h2>
      <hr className='border-gray-500 my-4 mb-6' />
      <InlineWidget className='h-auto overflow:hidden' url="https://calendly.com/ssgsecurity/15mins" />

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
      

      {/* <p className="text-gray-800"><span className="mt-3">Tel:</span> 020 3900 2489</p> */}
      <p className="text-gray-800"><span className="mt-3">Mobile:</span> +44 7703551379</p>
      <p className="text-gray-800"><span className="mt-3">Fax: </span>02039001936</p>
        
      <p className="text-gray-800"><span className="mt-3">Email:</span> info@ssgsecurity.co.uk</p>
      <p className="text-gray-800"><span className="mt-3">London Address: </span>Suite E, 1st floor Phoenix Building, 3 Ajax Works, Hertford Rd, IG11 8DY</p>
      <p className="text-gray-800"><span className="mt-3">Land line-1:</span> 02039002489 </p>
      <p className="text-gray-800"><span className="mt-3">Land line-2:</span> 08003688613 </p>
      <p className="text-gray-800"><span className="mt-3">Manchester Address: </span> Office No 4.4, 4th Floor, Purple Zone,Universal SquareDevonshire Street North, Ardwick, Manchester, M12 6JH</p>
      <p className="text-gray-800"><span className="mt-3">Land line:</span> 0161 974 6513</p>
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
           
            {subscribe === false &&
            <button className='mt-1 mb-3 shadow w-40 rounded-md bg-red-700 hover:bg-red-900 text-white px-4 font-medium text-sm h-10 flex flex-row justify-center items-center'>
              Submit
          </button>
           }

            {subscribe === 'loading' &&
              <button className='mt-1 mb-3 shadow w-40 rounded-md bg-red-700 hover:bg-red-900 text-white px-4 font-medium text-sm h-10 flex flex-row justify-center items-center'>
              <Oval
              height={28}
              width={28}
              color="#ffffff"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel='oval-loading'
              secondaryColor="#ffffff"
              strokeWidth={3}
              strokeWidthSecondary={3}
              />
          </button>
            }
            {subscribe === true &&
              <button className='mt-1 mb-3 shadow w-40 rounded-md bg-red-700 hover:bg-red-900 text-white px-4 font-medium text-sm h-10 flex flex-row justify-center items-center'>
              <RiCheckboxCircleFill className='mr-2 h-7 w-7' />
          </button>
            }
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
            {/* <div className='bg-black px-6 lg:px-44 xl:px-60 py-8 h-fill pb-16'>
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
          
      </div> */}

    </div> 
    </div>
  )
}
