'use client'
/**
 * @typedef {import("@prismicio/client").Content.WorkChildHeroSlice} WorkChildHeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<WorkChildHeroSlice>} WorkChildHeroProps
 * @param {WorkChildHeroProps}
 */

import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { useEffect } from "react";
import SimpleParallax from "simple-parallax-js";

export default function WorkChildHero({ slice }){


  useEffect(() => {
    let image = document.querySelector('.image')

    // new SimpleParallax(image, {
    //   delay: 0.8,
    //   scale: 1.1,
    //   // scale: 1.08,
    //   transition: 'cubic-bezier(0,0,0,1)'
    // })
  })
  

  return(
    <section className="work-uid-hero">
      <div className="work-uid-hero-title">
        <h1 className="h1-big">
          <PrismicRichText field={slice.primary.title} />
        </h1>
      </div>
      <div className="work-uid-hero-wrapper">
        <PrismicNextImage className="image" height={500 * 10} width={500 * 10} style={{height:'100%', width:'100%', objectFit:'cover'}} field={slice.primary.image} />
      </div>
    </section>
  )
}
