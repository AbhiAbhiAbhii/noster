/* eslint-disable react/jsx-key */
'use client'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger)


export default function Test() {

    let text = `Bespoke Furniture Built on Dreams.\n
  We’re LI, innovators of comfort. We design and\n
  build handcrafted\n
  artisanal furniture that is\n
  as unique as you are`.split("")

  console.log(text,"OUR TEXT")

  let textSpans = text.map((item, i) => {
    if(item === '\n') {
    return <span><br /></span>
    } else {
      return <span>{item}</span>
    }
  })

  useEffect(() => {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger:'.parent-div',
            start:'top 10%',
            scrub: 1,
            end:'bottom 10%',
            markers: true,
            pin: true
        }
    })

    tl.to('.test-div', {
        
    })

  })

    return(
        <main className="parent-div" style={{height:'600px', background:'rgba(0,0,0,1)', border:'1px green solid'}}>
            <div className="test-div" style={{width:'800px',marginTop:'', border:'1px red solid'}}>
                <p style={{color:'#FFF', opacity:'0.2'}}>{textSpans}</p>
            </div>
        </main>
    )
}