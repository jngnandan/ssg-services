
import React, { useEffect, useState, useContext, useMemo } from 'react'
import { useParams } from 'react-router-dom'

import {collection, getDocs, setDoc, doc, query} from 'firebase/firestore'
import {db} from '../../firebase'
import back from '../../assets/icons/back.svg'
import { Link } from 'react-router-dom'
import {Oval} from 'react-loader-spinner'

import { ServicesContext } from '../../context/ServicesContext'

export default function SecurityPage() {
    const [page, setPage] = useState([])
    const [loading, setLoading] = useState(true)
    const {id} = useParams()

    const {security} = useContext(ServicesContext)
    console.log(security)

    useMemo(() => {
        const getPage = async () => {
            const querySnapshot = await getDocs(collection(db, 'security'))
            querySnapshot.docs.map(doc => doc.id === id && setPage(doc.data()))
        }
        getPage()
        setLoading(false)

    })

    const {content, title, img} = page

  return (
    <>
    {loading ?
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
    :
        <div className='px-6  lg:px-44 xl:px-60'>
    <Link to='/'>
    <button className='h-12 flex flex-row justify-start items-center'>
        <img src={back} className='y-3' alt=''/>
        <p className='pl-2 font-semibold text-gray-600 pb-0.5'>Security Services</p>
    </button>
    </Link>
    <img className='' src={img} alt={title} />
    <h1 className='py-5 text-xl md:text-3xl font-semibold text-gray-800'>{title}</h1>
      <p className='text-gray-500'>{content}</p>
    </div>    
    }

    </>
 
  )
}
