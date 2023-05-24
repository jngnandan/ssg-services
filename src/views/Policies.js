import React from "react"

import corporate from '../../src/assets/documents/corportate-and-social-policy.pdf'
import ernergy from '../../src/assets/documents/energy-policy.pdf'
import environment from '../../src/assets/documents/energy-policy.pdf'
import equalOpportunity from '../../src/assets/documents/equal-opportunity-policy.pdf'
import healthSafety from '../../src/assets/documents/health-and-safety policy.pdf'
import ourValues from '../../src/assets/documents/our-values-and-mission-statement.pdf'
import violence from '../../src/assets/documents/voilence-pollicy.pdf'
import quality from '../../src/assets/documents/Quality-policy.pdf'
import wasteManagement from '../../src/assets/documents/wastemanagement-policy.pdf'
import safeguard from '../../src/assets/documents/safeguarding.pdf'

import {AiOutlineFilePdf} from 'react-icons/ai'

const Policies = () => {
    return(
    <div className="h-screen">
        <div className='mt-10 px-6 md:px-16  lg:px-44 xl:px-60 font-medium text-sm flex flex-row justify-between items-center mt-0'>
            <h2 className='text-2xl mb-6 text-gray-800 font-semibold'>Policies</h2>
        </div>
        <div className='px-6 md:px-16  lg:px-44 xl:px-60 font-medium text-sm grid grid-cols-1 gap-2 mt-0'>
        <div className="hover:text-gray-500 flex flex-row items-center">
        <AiOutlineFilePdf />
        <a className="" href={corporate} target="_blank">Corporate Policy</a>        
        </div>
        <div className="hover:text-gray-500 flex flex-row items-center">
        <AiOutlineFilePdf />
        <a className="" href={ernergy} target="_blank">Energy Policy</a>
        </div>
        <div className="hover:text-gray-500 flex flex-row items-center">
        <AiOutlineFilePdf />
        <a className="" href={environment} target="_blank">Environment Policy</a>
        </div>
        <div className="hover:text-gray-500 flex flex-row items-center">
        <AiOutlineFilePdf />
        <a className="" href={equalOpportunity} target="_blank">Equal Opportunities Policy</a>
        </div>
        <div className="hover:text-gray-500 flex flex-row items-center">
        <AiOutlineFilePdf />
        <a className="" href={healthSafety} target="_blank">Health and Safety Policy</a>
        </div>
        <div className="hover:text-gray-500 flex flex-row items-center">
        <AiOutlineFilePdf />
        <a className="" href={ourValues} target="_blank">Our Values</a>
        </div>
        <div className="hover:text-gray-500 flex flex-row items-center">
        <AiOutlineFilePdf />
        <a className="" href={violence} target="_blank">Violence Policy</a>
        </div>
        <div className="hover:text-gray-500 flex flex-row items-center">
        <AiOutlineFilePdf />
        <a className="" href={quality} target="_blank">Waste management Policy</a>
        </div>
        <div className="hover:text-gray-500 flex flex-row items-center">
        <AiOutlineFilePdf />
        <a className="" href={wasteManagement} target="_blank">Waste management Policy</a>
        </div>
        <div className="hover:text-gray-500 flex flex-row items-center">
        <AiOutlineFilePdf />
        <a className="" href={safeguard} target="_blank">safeguarding Policy</a>
        </div>
        </div>
        </div>
    )
}

export default Policies