import React, { Component } from 'react'

export class ContactUs extends Component {
  render() {
    return (
      <div>
              {/* Get in Touch with Us */}
      <div className='bg-gray-100 px-6 md:px-16 lg:px-44 xl:px-60 py-10'>
      <h2 className='text-2xl text-gray-800 font-semibold'>Contact Us</h2>
            <div className="pl-2 mt-3 text-gray-800 font-medium">
      <p className="text-gray-800"><span className="mt-3">Email:</span> info@ssgsecurity.co.uk</p>
      <p className="text-gray-800"><span className="mt-3">Tel:</span>  02039002489 </p>
      <p className="text-gray-800"><span className="mt-3">Tel:</span>  08003688613 </p>
      <p className="text-gray-800"><span className="mt-3">Fax: </span> 02039001936 </p>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 items-start mt-6 mb-10'>
        <div className='border border-solid border-1 border-gray-400 bg-gray-200 rounded shadow-sm p-3'>
        <p className="text-gray-800"><span className="font-semibold">Head Office:</span> <br/> Secure Security  Ltd <br /> Suite E, 1st floor Phoenix Building, <br />3 Ajax Works Hertford Rd, <br /> London,IG11 8DY</p>
        <p className="text-gray-800"><span className="">Tel:</span>02039001936</p>

        </div>

        <div className='border border-solid border-1 border-gray-400 bg-gray-200 rounded shadow-sm p-3'>
        <p className="text-gray-800 "><span className="font-semibold">Manchester Branch :<br/> </span> Secure Security Guards Ltd, <br />No 4, 4th Floor, Purple Zone,<br />North Street,<br /> Ardwick, Manchester, M12 6JH</p>
        <p className="text-gray-800"><span className="">Tel:</span> 0161 974 6513</p>
        </div>

        <div className='border border-solid border-1 border-gray-400 bg-gray-200 rounded shadow-sm p-3'>
        <p className="text-gray-800"><span className="font-semibold">Glasgow Branch :<br/> </span> Secure Security Guards Ltd, <br />Office 32,<br />Stathclyde Business Center,<br /> 120 Carstairs Street, Dalmarnock, Glasgow, G40 4JD</p>
        {/* <p className="text-gray-800"><span className="">Tel:</span> 0161 974 6513</p> */}
        </div>
      </div>
     
      </div>
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
}

export default ContactUs
