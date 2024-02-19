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

  // const [ curtain, setCurtain ] = useState(false)

  // const curtainStart = () => {
  //   let ourBody = document.body
  //   let nav = document.querySelector('.nav')
  //   let footer = document.querySelector('.footer')

  //   nav.style.opacity = 0
  //   footer.style.opacity = 0


  //   console.log("Curtain Start")
  //   ourBody.classList.add('no-scroll')
  // }

  // const curtainEnd = () => {
  //   let ourCurtain = document.getElementById('curtainRef')
  //   let ourBody = document.body

  //   let nav = document.querySelector('.nav')
  //   let footer = document.querySelector('.footer')

  //   console.log("Curtain End")
  //   ourBody.classList.remove('no-scroll')
  //   ourCurtain.style.opacity = 0
  //   nav.style.opacity = 1
  //   footer.style.opacity = 1

  //   setTimeout(() => {
  //     ourCurtain.style.display = 'none'
  //   }, 2000)
  // }
 
  // useEffect(() => { Uncomment this useEffect for the text anim

  //   // setTimeout(() => {
  //   //   setCurtain(true)
  //   // }, 1500)

  //   // {curtain ? curtainEnd() : curtainStart()}

  //   let target = document.querySelectorAll(".target-text")

  //   setTimeout(() => {
  //     gsap.to(target, {
  //       translateY:"0%",
  //       stagger:{each:0.05}
  //     })
  //   }, 1000)

  //   let height = screen.height
  //   let width = screen.width
  
  //   console.log(`Users device screen height is ${height} and width is ${width}`)

  // })


  

 



  return(
    <>
      <section className="home-hero" style={{position:'relative'}}>
        <div className="home-hero-title">
          <h1 className="haffer-R h1-small">
            <PrismicRichText field={slice.primary.title} />
            {/* <div style={{overflow:'hidden', perspective:'0px'}}>
              <p className="target-text" style={{transform:'translateY(-100%)', transition:'all 0.8s cubic-bezier(0.83, 0, 0.17, 1)'}}>
                Noster Associates is a full service office interior &
              </p>
            </div>
            <div style={{overflow:'hidden', perspective:'0px'}}>
              <p className="target-text" style={{transform:'translateY(-110%)', transition:'all 0.8s cubic-bezier(0.83, 0, 0.17, 1)'}}>
                space developers, for growing companies
              </p>
            </div> */}
          </h1>
        </div>
        <div className="home-hero-vid-main">
          <div className="home-hero-vid-inner-wrap">
            <div className="home-hero-vid" style={{background:'black'}}>
              <video  autoPlay="true" muted="true" loop="true" preload="metadata" playsInline="true" loading="lazy">
                {/* <source src="/video/home/home_hero_vid.mp4" type="video/mp4" /> */}
              </video>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
