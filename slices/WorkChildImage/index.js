'use client'
/**
 * @typedef {import("@prismicio/client").Content.WorkChildImageSlice} WorkChildImageSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<WorkChildImageSlice>} WorkChildImageProps
 * @param {WorkChildImageProps}
 */

import { PrismicNextImage } from "@prismicio/next";
import { useEffect } from "react";
import gsap from "gsap";
import { Parallax } from "react-scroll-parallax";
// import SimpleParallax from "simple-parallax-js";
// import Rellax from "rellax";

export default function WorkChildImage({ slice }){

  // useEffect(() => {
  //   let image = document.querySelectorAll('.thumbnail')
  //   new SimpleParallax(image, {
  //     delay: 0.8,
  //     // scale: 1.08,
  //     transition: 'cubic-bezier(0,0,0,1)'
  //   })
  // })

  useEffect(() => {

    // const image = document.querySelectorAll('.thumbnail')

    // let animation = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: image,
    //     start:'top bottom',
    //     end:'bottom bottom',
    //     scrub: true,
    //     // markers:true
    //   }
    // })

    // animation.to(image, {
    //   // transform: 'translateY(-20%)',
    //   duration: 1,
    //   ease: 'ease'
    // })

  })
  

  return(
    <section className="worksImg snow" style={{overflow:'hidden'}}>
      <div className="parallax" style={{height:'98%', width:'100%', overflow:'hidden'}}>
        <Parallax className="desk-parallax" speed={-50} style={{height:'110%', width:'100%'}}>
          <PrismicNextImage className="thumbnail"
            field={slice.primary.image}  
            style={{height:'100%', width:'100%', objectFit:'cover', scale:'1'}} 
            imgixParams={{ar:'3:2'}} loading="eager" />
        </Parallax>
        <PrismicNextImage className="mob-img"
          field={slice.primary.image}  
          style={{height:'100%', width:'100%', objectFit:'cover', scale:'1'}} 
          imgixParams={{ar:'3:2'}} loading="eager" />
      </div>
    </section>
  )
}
