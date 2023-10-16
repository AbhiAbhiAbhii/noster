'use client'
/**
 * @typedef {import("@prismicio/client").Content.WorkChildHeroSlice} WorkChildHeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<WorkChildHeroSlice>} WorkChildHeroProps
 * @param {WorkChildHeroProps}
 */

import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
// import SimpleParallax from "simple-parallax-js";

export default function WorkChildHero({ slice }){

  // var image = document.querySelectorAll('.image')

  // new SimpleParallax(image, {
  //   delay: 0.6,
  //   transition: 'cubic-bezier(0,0,0,1)'
  // })

  // let URL = require('url').URL
  // let myURL = new URL(`${slice.primary.image.url}`)
  

  console.log(slice.primary.image.url,"HI DADDY")

  return(
    <section className="work-uid-hero">
      <div className="work-uid-hero-title">
        <h1 className="h1-big">
          <PrismicRichText field={slice.primary.title} />
        </h1>
      </div>
      <div className="work-uid-hero-wrapper" style={{}}>
          <Parallax speed={-50} style={{height:'110%', width:'100%'}}>
            <PrismicNextImage className="parralax-test" height={500 * 10} width={500 * 10} style={{height:'100%', width:'100%'}} field={slice.primary.image} />
          </Parallax>
        {/* <div className="parralax-image" style={{height:'100%', width:'100%'}} /> */}
      </div>
    </section>
  )
}
