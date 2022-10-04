import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <div>
        <div className='flex flex-row justify-between items-start'>
          <div>
          <Link to='/'>
            <h1>SSG Security</h1>
          </Link>
          </div>

          <div className='flex flex-row'>
            <Link to='/clearning-services'>
                <p className='mx-4'>Cleaning Services</p>
            </Link>
            <Link to='/security-services'>
                <p className='mx-4'>Security Services</p>
            </Link>
            <Link to='/training-services'>
                <p className='mx-4'>Training Services</p>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Header