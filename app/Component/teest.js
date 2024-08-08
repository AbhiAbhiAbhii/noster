'use client'

import { useState } from "react"

export default function JuniorFrontEndDev({ interested, hiring }) {
    
    const [context, setContext] = useState({
        message: '',
        status: ''
    });

    const { message, status } = context;

    if(hiring && interested) {
        setContext(prevState => ({
            ...prevState,
            message: "Looking for a Junior Front-end Developer!",
            status: "Swipe to know more."
        }))
    } else {
        return null
    }

    return(
        <>
        <h1>{message}</h1>
        <p>{status}</p>
        </>
    )

}
