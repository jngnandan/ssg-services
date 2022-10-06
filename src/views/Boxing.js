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

export default function Boxing() {
  return (
    <div>
      {/* Header */}
      <div className='bg-red-800 pt-10 pb-4 px-6 md:px-16 lg:px-44 xl:px-60 grid-row-2 items-start grid md:grid-cols-2 gap-1'>
        {/* Text */}
        <div className='pr-6'>
        <h1 className='text-xl md:text-3xl font-semibold text-white'>
            Boxing Knockout Zone
        </h1>
        <p className='text-sm text-white my-4 lg:w-120'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco </p>
        
          <div className='mb-6 md:flex md:row'>
            <button className='shadow w-40 rounded-md bg-white hover:bg-red-400 text-red-800 px-4 font-medium text-sm h-10'>Our Services</button>
            <button className='shadow w-40 ml-4 rounded-md outline outline-2 outline-offset-0 outline-white hover:outline-red-400 text-white hover:text-red-400 px-4 h-10 font-medium text-sm'>Our Services</button>

          </div>
        </div>
        {/* Image */}
        <img src={header} className='mb-6 h-auto w-full md:h-56 lg:h-80' alt='Security Needs' />
      </div>
    </div>
  )
}
