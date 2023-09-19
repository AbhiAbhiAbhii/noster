'use client'
/**
 * @typedef {import("@prismicio/client").Content.WorksShowcaseLeftSlice} WorksShowcaseLeftSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<WorksShowcaseLeftSlice>} WorksShowcaseLeftProps
 * @param {WorksShowcaseLeftProps}
 */

import { PrismicNextImage } from "@prismicio/next"
import { PrismicLink, PrismicRichText } from "@prismicio/react"
import { useState } from "react";

export default function WorksShowcaseLeft({ slice }){

  const [ active, setActive ] = useState(0); 

  const handleHover = (i) => {
    setActive(i)
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
    <section className="works-showcase-left">
      {
        data.map((item, i) => {
          return(
            <div onMouseOver={() => handleHover(i)} key={i}
            className={ active === i ? "fw-showcase-item expand-fw-showcase-item":"fw-showcase-item"}>
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
               <div className={ active === i ? "fw-showcase-item-text-inner-wrapper active-inner-wrapper" : "fw-showcase-item-text-inner-wrapper"}>
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
