import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <div>
        <div className='shadow flex flex-row justify-between items-start h-16 px-6 lg:px-44 xl:px-60 font-medium text-sm py-4'>
          <div>
          <Link to='/'>
            <h1>SSG Security</h1>
          </Link>
          </div>

          <div className='flex flex-row'>
            <Link to='/clearning-services'>
                <p className='mx-2'>Cleaning Services</p>
            </Link>
            <Link to='/security-services'>
                <p className='mx-2'>Security Services</p>
            </Link>
            <Link to='/training-services'>
                <p className='mx-2'>Security Training</p>
            </Link>
            <Link to='/contactus'>
              <p className='mx-2'>Contact us</p>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Header