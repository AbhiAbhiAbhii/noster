'use client'
import Curtain from "@/app/Component/Curtain/Curtain";
/**
 * @typedef {import("@prismicio/client").Content.HomeHeroSlice} HomeHeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HomeHeroSlice>} HomeHeroProps
 * @param {HomeHeroProps}
 */

import { PrismicRichText } from "@prismicio/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useState } from "react";
gsap.registerPlugin(ScrollTrigger)


export default function HomeHero({ slice }){

  const [ curtain, setCurtain ] = useState(true)

  useEffect(() => {
    let target = document.querySelectorAll(".target-text")

    setTimeout(() => {
      gsap.to(target, {
        translateY:"0%",
        stagger:{each:0.05}
      })
    }, 200)

    const curtainDrop = () => {
      // document.body.classList.add('no-scroll')
      // document.querySelector('.nav').style.opacity = 0
      // document.querySelector('.footer').style.opacity = 0   
      console.log("Curtain is dropped")
      document.body.classList.remove('no-scroll')
    }

    const curtainStart = () => {
      console.log("Curtain is up")
      document.body.classList.add('no-scroll')
      document.querySelector('.nav').style.opacity = 0
      document.querySelector('.footer').style.opacity = 0   
    }

    // if(setCurtain(false)) {
    //   curtainDrop()
    // } else {
    //   curtainStart()
    // }

    // if(curtain) {
    //   console.log("Curtain is up")
    //   curtainStart()
    // } else if(!curtain) {
    //   console.log("Curtain is down")
    //   curtainDrop()
    // }

    // setTimeout(() => {
    //   setCurtain(false)
    //   console.log("Curtain is down")
    // }, 3000)
 




    // if(setCurtain(false)) {
    //   document.body.classList.add('no-scroll')
    //   document.querySelector('.nav').style.opacity = 0
    //   document.querySelector('.footer').style.opacity = 0   
    // }
    // if(setCurtain(true)) {
    //   document.querySelector('.nav').style.opacity = 1
    //   document.querySelector('.footer').style.opacity = 1
    //   document.body.classList.remove('no-scroll')
    //   // document.querySelector('.curtain-ref').style.opacity = 0
    //   document.getElementById('curtainRef').style.opacity = 0
      
    // }


    


  }, [])

  return(
    <section className="home-hero" style={{position:'relative'}}>
      
      <div className="home-hero-title">
        <h1 className="haffer-R h1-small">
          {/* <PrismicRichText field={slice.primary.title} /> */}
          <div style={{overflow:'hidden', perspective:'0px'}}>
            <p className="target-text" style={{transform:'translateY(-100%)', transition:'all 0.8s cubic-bezier(0.83, 0, 0.17, 1)'}}>
              Noster Associates is a full service office interior &
            </p>
          </div>
          <div style={{overflow:'hidden', perspective:'0px'}}>
            <p className="target-text" style={{transform:'translateY(-110%)', transition:'all 0.8s cubic-bezier(0.83, 0, 0.17, 1)'}}>
              space developers, for growing companies
            </p>
          </div>
        </h1>
      </div>
      <div className="home-hero-vid-main">
        <div className="home-hero-vid-inner-wrap">
          <div className="home-hero-vid">
            <video  autoPlay="true" muted="true" loop="true" preload="metadata" playsInline="true" loading="lazy">
              <source src="/video/home/home_hero_vid.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}
