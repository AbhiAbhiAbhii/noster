'use client'
/**
 * @typedef {import("@prismicio/client").Content.WorksShowcaseRightSlice} WorksShowcaseRightSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<WorksShowcaseRightSlice>} WorksShowcaseRightProps
 * @param {WorksShowcaseRightProps}
 */

import { PrismicNextImage } from "@prismicio/next"
import { PrismicLink, PrismicRichText } from "@prismicio/react"
import { useState } from "react";


export default function WorksShowcaseRight({ slice }){

  const [ activeB, setActiveB ] = useState(0); 


  const handleHoverRight = (i) => {
    setActiveB(i)
  }

  let data = [
    {
      title: slice.primary.company_name_a,
      desc: slice.primary.description_a,
      image: slice.primary.image_a,
      link: slice.primary.cta_link_a
    },
    {
      title: slice.primary.company_name_b,
      desc: slice.primary.description_b,
      image: slice.primary.image_b,
      link: slice.primary.cta_link_b
    },
    {
      title: slice.primary.company_name_c,
      desc: slice.primary.description_c,
      image: slice.primary.image_c,
      link: slice.primary.cta_link_c
    }, 
  ]

  return(
    <section className="works-showcase-right">
    {
      data.map((item, i) => {
        return(
          <div onMouseOver={() => handleHoverRight(i)} key={i}
          className={ activeB === i ? "fw-showcase-item expand-fw-showcase-item":"fw-showcase-item"}>
           <PrismicLink className="fw-showcase-item-link" field={item.link}>
             <PrismicNextImage 
               style={{height:'100%', width:'100%'}}
               sizes="100vw"
               loading="eager"
               priority={true}
               imgixParams={{ar:'3:2'}}
               field={item.image}
               loader={undefined} />
           </PrismicLink>
           <div className="fw-showcase-item-text-wrapper">
             <div className={ activeB === i ? "fw-showcase-item-text-inner-wrapper active-inner-wrapper" : "fw-showcase-item-text-inner-wrapper"}>
               <div className="fw-showcase-item-c-name">
                 <p>
                   <PrismicRichText field={item.title}  />
                 </p>
               </div>
               <div className="fw-showcase-item-desc">
                 <p>
                   <PrismicRichText field={item.desc} />
                 </p>
               </div>
             </div>
           </div>
         </div>
        )
      })
    }
  </section>
  )
}
