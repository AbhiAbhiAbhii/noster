'use client'
/**
 * @typedef {import("@prismicio/client").Content.FeaturedWorksShowCaseSlice} FeaturedWorksShowCaseSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FeaturedWorksShowCaseSlice>} FeaturedWorksShowCaseProps
 * @param {FeaturedWorksShowCaseProps}
 */

import CTA from "@/app/Component/CTA/CTA";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicLink, PrismicRichText } from "@prismicio/react";
import { useEffect, useState } from "react";

export default function FeaturedWorksShowCase({ slice }){

  const [active, setActive ] = useState(0); 
  const [ reveal, setReveal ] = useState(false)
  const [ animate, setAnimate ] = useState(false)

  const handleHover = (i) => {
    setActive(i)
  }

  useEffect(() => {

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          setAnimate(true)

          setTimeout(() => {
            setReveal(true)
          }, 2000)
        }
      })
    }, {threshold: 0.7})
    observer.observe(document.querySelector('.fw-showcase'));
  });




  return(
    <section className="fw-showcase snow">
      {/* Eyebrow */}
      <div className="eyebrow black-txt">
        <div className="eyebrow-title">
          <h1 className="h1-big" style={{display:'flex', alignItems:'center', justifyContent:'flex-start'}}>
          :<PrismicRichText field={slice.primary.title} />
          </h1>
        </div>
        <div className="eyebrow-cta">
          <CTA link={slice.primary.cta_link} text={slice.primary.cta_text} />
        </div>
      </div>
      {/* Eyebrow End */}
      {/* Works Showcase */}
      <div className="fw-showcase-item-wrapper">
        {
          reveal == false ? 

          slice.items.map((item, i) => {
            return(
              <div key={i} style={{height: animate && i === 0 ? '28em':'16.25em', width: animate && i === 0 ? '45%':''}} className={ animate ? "fw-showcase-item curtain-reveal":"fw-showcase-item curtain"}>
                  <PrismicNextImage style={{height:'100%', width:'100%'}} field={item.image} alt={item.image.alt} />
                <div className="fw-showcase-item-text-wrapper">
                  <div className={ animate && i === 0 ? "fw-showcase-item-text-inner-wrapper active-inner-wrapper" : "fw-showcase-item-text-inner-wrapper"}>
                    <div className="fw-showcase-item-c-name">
                      <p>
                        <PrismicRichText field={item.company_name}  />
                      </p>
                    </div>
                    <div className="fw-showcase-item-desc">
                      <p>
                        <PrismicRichText field={item.description} />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
          :
          slice.items.map((item, i) => {
            return(
              <div onMouseOver={() => handleHover(i)} key={i} className={ active === i ? "fw-showcase-item expand-fw-showcase-item":"fw-showcase-item"}>
                <PrismicLink className="fw-showcase-item-link" field={item.work_cta_link} >
                  <PrismicNextImage style={{height:'100%', width:'100%'}} field={item.image} alt={item.image.alt} />
                </PrismicLink>
                <div className="fw-showcase-item-text-wrapper">
                  <div className={ active == i ? "fw-showcase-item-text-inner-wrapper active-inner-wrapper" : "fw-showcase-item-text-inner-wrapper"}>
                    <div className="fw-showcase-item-c-name">
                      <p>
                        <PrismicRichText field={item.company_name}  />
                      </p>
                    </div>
                    <div className="fw-showcase-item-desc">
                      <p>
                        <PrismicRichText field={item.description} />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      {/* Works Showcase end */}
    </section>
  )
}
