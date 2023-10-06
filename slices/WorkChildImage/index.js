// 'use client'
/**
 * @typedef {import("@prismicio/client").Content.WorkChildImageSlice} WorkChildImageSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<WorkChildImageSlice>} WorkChildImageProps
 * @param {WorkChildImageProps}
 */

import { PrismicNextImage } from "@prismicio/next";
// import { useEffect } from "react";
// import SimpleParallax from "simple-parallax-js";

export default function WorkChildImage({ slice }){

  // useEffect(() => {
  //   let image = document.querySelectorAll('.thumbnail')
  //   new SimpleParallax(image, {
  //     delay: 0.8,
  //     // scale: 1.08,
  //     transition: 'cubic-bezier(0,0,0,1)'
  //   })
  // })


  return(
    <section className="worksImg snow">
      <div style={{height:'98%', width:'100%'}}>
        <PrismicNextImage className="thumbnail" 
          field={slice.primary.image}  
          style={{height:'100%', width:'100%', objectFit:'cover'}} 
          imgixParams={{ar:'3:2'}} loading="eager" />
      </div>
    </section>
  )
}
