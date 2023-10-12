'use client'
/**
 * @typedef {import("@prismicio/client").Content.HomeHeroSlice} HomeHeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HomeHeroSlice>} HomeHeroProps
 * @param {HomeHeroProps}
 */

import { PrismicRichText } from "@prismicio/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger)


export default function HomeHero({ slice }){

  let targetText = slice.primary.title[0].text

  useEffect(() => {

    let target = document.querySelectorAll('.target-text')

    gsap.from(target, {
      y: "-100%",
      opacity: 0,
      duration: 2,
      stagger: { each: 0.06 },
      transformOrigin: "right center",
    })

  }, [])




  return(
    <section className="home-hero">
      <div className="home-hero-title" style={{perspective:'0px'}}>
        <h1 className="haffer-R h1-small">
          {/* <PrismicRichText field={slice.primary.title} /> */}
          <div className="target-text">
            <p style={{overflow:'hidden', perspective:'0px'}}>
              Noster Associates is a full service office interior &
            </p>
          </div>
          <div className="target-text" style={{overflow:'hidden', perspective:'0px'}}>
            <p>
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
