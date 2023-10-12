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

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import CursorA from "@/app/Component/CustomCursor/CursorA";
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';

gsap.registerPlugin(ScrollTrigger)


export default function FeaturedWorksShowCase({ slice }){

  const [ active, setActive ] = useState(0); 
  const [ reveal, setReveal ] = useState(false)
  const [ animate, setAnimate ] = useState(false)


  const handleHover = (i) => {
    setActive(i)
  }

  useEffect(() => { // gsap

    const observe = document.querySelector('.fw-showcase')
    let start = 30
    let end = 80

    if(observe && !animate) {
      gsap.from(observe, {
        scrollTrigger: {
          trigger: observe,
          start: `top ${start}%`,
          end: `bottom ${end}%`,
          onEnter: () => {
            setAnimate(true)
            setTimeout(() => {
              setReveal(true)
            }, 2000)
            // ScrollTrigger.getById(observe).kill(); // Disable the ScrollTrigger once triggered
          } ,
          scrub: true,
          markers: false,
        }
      })
    }


    // Custom Cursor F-Works
    let cursor = document.querySelector('.cursor-A')
    let CursorBg = document.querySelector('.cursor-A-bg')


    function moveCursor (e) {
      let x = e.clientX;
      let y = e.clientY;
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
    }

    document.addEventListener("mousemove", moveCursor);

    let CursorContainer = document.querySelectorAll('.fw-showcase-item')
    let TextContainer = document.querySelectorAll('.fw-showcase-item-text-wrapper')
    let TextColor = document.querySelector('.cursor-A-text-wrapper')
    let TextBorder = document.querySelector('.cursor-A-text')
    let TextArrow = document.querySelector('.cursor-A-arrow')


    CursorContainer.forEach(element => {
      element.addEventListener("mouseenter", () => {
        cursor.classList.add('cursor-active')
        CursorBg.classList.add('cursor-A-bg-active')
        TextColor.classList.add('cursor-A-text-active')
        TextBorder.classList.add('cursor-A-text-u-active')
        TextArrow.classList.add('cursor-A-arrow-reveal')
      })

      element.addEventListener("mouseleave", () => {
        CursorBg.classList.remove('cursor-A-bg-active')
        cursor.classList.remove('cursor-active')
        TextColor.classList.remove('cursor-A-text-active')
        TextBorder.classList.remove('cursor-A-text-u-active')
        TextArrow.classList.remove('cursor-A-arrow-reveal')
      })
    })

    TextContainer.forEach(element => {
      element.addEventListener("mouseenter", () => {
        cursor.classList.remove('cursor-active')
      })

      element.addEventListener("mouseleave", () => {
        cursor.classList.add('cursor-active')
      })
    })

  }, [animate]);
  

  return(
    <section className="fw-showcase snow" id="fwShowcase">
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
      {/* Works Showcasem Desktop */}
      <div className="fw-showcase-item-wrapper">
      <CursorA />
        {
          reveal === false ? 
          slice.items.map((item, i) => {
            return(
              <div key={i} 
                style={{height: animate && i === 0 ? '28em':'16.25em', width: animate && i === 0 ? '45%':''}} 
                className={ animate ? "fw-showcase-item curtain-reveal":"fw-showcase-item curtain"}>
                  <PrismicNextImage 
                    style={{height:'100%', width:'100%'}} 
                    imgixParams={{ar:'3:2'}}
                    loading="eager"
                    priority={true}
                    field={item.image}
                    sizes="100vw"
                    loader={undefined}  />
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
              <div onMouseOver={() => handleHover(i)} key={i}
               className={ active === i ? "fw-showcase-item expand-fw-showcase-item":"fw-showcase-item"}>
                <PrismicLink className="fw-showcase-item-link" field={item.work_cta_link}>
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
      {/* Works Showcase Desktop end */}
      <div className="fw-showcase-item-wrapper-mob">
        <Swiper style={{padding:'0 0 6em 0'}}
        slidesPerView={1.1}
        spaceBetween={20} 
        >
          {
            slice.items.map((item, i) => {
              return(
                <SwiperSlide key={i}>
                  <div className={"fw-showcase-item"}>
                    <PrismicLink className="fw-showcase-item-link" field={item.work_cta_link}>
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
                      <div className={ "fw-showcase-item-text-inner-wrapper active-inner-wrapper" }>
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
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
    </section>
  )
}
