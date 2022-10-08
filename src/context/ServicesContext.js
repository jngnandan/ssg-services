import {createContext} from 'react';
import { useState, useEffect } from "react"

import {collection, getDocs, setDoc, doc, query} from 'firebase/firestore'
import {db} from '../firebase'

const ServicesContext = createContext()

const ServicesContextProvider = ({children}) => {
    const [security, setSecurity] = useState('cool')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const securityServices = async () => {
            const blogCollectionRef = collection(db, 'security')
            setSecurity(await getDocs(blogCollectionRef).then(res => {
                const blogs = res.docs.map(doc => {
                    return {...doc.data(), id: doc.id}
                })
                setLoading(false)
                return blogs
            }))
        }
        securityServices()
    }, [])

    return(
        <ServicesContext.Provider value={{security, loading}}>
            {children}
        </ServicesContext.Provider>
    )
}

export {ServicesContext, ServicesContextProvider}