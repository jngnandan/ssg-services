import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <div>
        <div className='flex flex-row jstify-between items-start'>
          <div>
            <h1>SSG Security</h1>
          </div>

          <div>
           <p>Cleaning Services</p>
           <p>Security Services</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Header