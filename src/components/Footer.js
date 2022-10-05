import React from 'react'

export default function Footer() {
  return (
    <div className='my-6 px-6 h-16 lg:px-44 xl:px-60 font-medium text-sm flex flex-row justify-between'>
      <p>SSG Security</p>
      <div className='grid grid-cols-3 gap-1 text-center'>
        <p>Facebook</p>
        <p>Twitter</p>
        <p>Instagram</p>
      </div>
    </div>
  )
}
