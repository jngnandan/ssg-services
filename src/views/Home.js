
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

import ssgcleaning from '../assets/images/ssgcleaning.jpg'

import cleaningS from '../assets/images/cleaningS.jpg'
import boxing from '../assets/images/boxing.jpg'
import boxer from '../assets/images/boxer.jpg'
import personalised from '../assets/images/personalised.jpg'


import o2 from '../../src/assets/icons/o2.svg'
import alexander_palace from '../../src/assets/icons/alexander_palace.svg'
import wembley from '../../src/assets/icons/wembley.svg'
import ap from '../../src/assets/icons/ap.svg'
import gallow_glass from '../../src/assets/icons/gallow_glass.svg'
import check from '../../src/assets/icons/check.svg'
import { Input } from 'postcss'


import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ServicesContext } from '../context/ServicesContext'
export default function Home() {
    const {security} = useContext(ServicesContext)
      // console.log(security)
  return (
    <div>
            {/* Our services */}
            <div className='bg-gray-100 px-6 lg:px-44 xl:px-60 py-10 h-fill pb-16'>
      <h2 className='text-2xl text-gray-800 font-semibold'>Our Services</h2>
          <hr className='border-gray-500 my-4 mb-6' />

    <div className='grid md:grid-cols-3 gap-4 pt-2'>
  
        <div className='bg-white rounded-md shadow-md'>
        <Link to='/security-services'>
            <img src={ccvSurvilance} className='h-auto w-full' alt='Security' />
            <div className='p-4 mb-4 pb-7'>
            <p className='font-medium text-gray-600 pb-2'>Security Services</p>
            <p className='text-sm text-gray-800 line-clamp-4'>Secure Security Guards (SSG) Ltd is SIA (Security Industry Authority) approved private security company for security guarding. Our business and our services meet the UK security industry’s current quality standards. .</p>
            </div>
          </Link>
          </div>

          <div className='bg-white rounded-md shadow-md'>
          <Link to='/clearning-services'>
            <img src={ssgcleaning} className='h-auto w-full rounded-t-md' alt='Security' />
            <div className='p-4 pb-7'>
            <p className='text-sm bg-red-400 px-2 rounded w-12 text-center text-white my-1'>New</p>
            <p className='font-medium text-gray-600 pb-2'>Cleaning Security</p>
            <p className='text-sm text-gray-800 line-clamp-4'>Our experienced cleaners and maids can efficiently clean any size home. Our domestic helpers are available throughout the day to give you as much flexibility as you need. Simply decide how many hours you need a cleaner for, that fits your requirement and budget and book accordingly..</p>
            </div>
            </Link>
          </div>
          <div className='bg-white rounded-md shadow-md'>
          <a href='https://knockoutzone.co.uk/'>
            <img src={personalised} className='h-auto w-full rounded-t-md' alt='Security' />
            <div className='p-4 pb-7'>
            <p className='text-sm bg-red-400 px-2 rounded w-12 text-center text-white my-1'>New</p>
            <p className='font-medium text-gray-600 pb-2'>Knockout Zone</p>
            <p className='text-sm text-gray-800 line-clamp-4'>With expert coaches and a wide range of classes for both children and adults, we cater to all fitness levels.Working out together, feels good right? Take to the gym floor every day from 6pm - 8pm.</p>
            </div>
            </a>
          </div>
    </div>
          
      </div>

    </div>
  )
}
