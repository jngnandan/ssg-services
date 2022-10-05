
import React from 'react'

export default function Home() {
  const Security = '../../src/assets/images/security.jpg';

  return (
    <div>
        {/* Header */}
      <div className='pt-7 mx-6 lg:mx-10'>
        {/* Text */}
        <div>
        <h1 className='text-4xl font-semibold'>
            We Solve your <br /> Security Needs
        </h1>
        <p className='text-sm text-gray-500 my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
        </div>
        {/* Image */}
        {/* <img src={'${}'} alt="Security"/> */}
      </div>

      <div className='bg-red-700 px-6 lg:mx-10 py-6'>
        <h2 className='text-2xl text-white font-semibold'>Here's how SSG Security can benefit your business</h2>
        <div className='grid grid-cols-3 gap-4 mt-4'>
          <div className='bg-white p-4 rounded-md'>
            <img src={require('../../src/assets/icons/sia-approved.svg')} alt='Security' />
            <hr />
            <p className='font-medium text-blue-500'>We are licensed SIA contractor</p>
            <p className='text-sm text-blue-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
          <div className='bg-red-800 p-4 rounded-md'>
          
            <hr />
            <p className='font-medium text-white'>We are licensed SIA contractor</p>
            <p className='text-sm text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
          <div className='bg-red-800 p-4 rounded-md text-white'>
          
            <hr />
            <p className='font-medium'>We are licensed SIA contractor</p>
            <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
        </div>
      </div>

        
    </div>
  )
}
