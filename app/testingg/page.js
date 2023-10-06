/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import gsap from "gsap"
import { useEffect } from "react"

export default function testingg() {

  useEffect(() => {

    // gsap.fromTo('.test-class', 
    // {
    //     width:'0%',
    // },
    // {
    //     width:'100%'
    // }
    // )

  }, [])


    return(
        <div style={{height:'100vh', display:'flex', alignItems:'center', justifyContent:'center'}}>
            <div style={{border:'1px red solid', overflow:'hidden', position:'relative'}}>
                <div className="test-opacity" style={{color:'red', border:'1px red solid', overflow:'hidden', transition:'all 1s ease'}}>
                    The future of automotive
                </div>
                {/* <div className="test-class" style={{position:'absolute', top:'0', left:'0', height:'100%', width:'100%', transition:'all 1s ease', background:'black'}} /> */}
                <div className="test-class">
                    The future of automotive
                </div>
            </div>
        </div>
    )
}