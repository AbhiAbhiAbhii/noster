'use client'
import CursorA from "@/app/Component/CustomCursor/CursorA";
/**
 * @typedef {import("@prismicio/client").Content.WorksShowcaseLeftSlice} WorksShowcaseLeftSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<WorksShowcaseLeftSlice>} WorksShowcaseLeftProps
 * @param {WorksShowcaseLeftProps}
 */

import { PrismicNextImage } from "@prismicio/next"
import { PrismicLink, PrismicRichText } from "@prismicio/react"
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';


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
      link: slice.primary.cta_link_a.uid
    },
    {
      title: slice.primary.company_name_b,
      desc: slice.primary.description_b,
      image: slice.primary.image_b,
      link: slice.primary.cta_link_b.uid
    },
    {
      title: slice.primary.company_name_c,
      desc: slice.primary.description_c,
      image: slice.primary.image_c,
      link: slice.primary.cta_link_c.uid
    }, 
  ]



  useEffect(() => {
    // Custom Cursor F-Works
    let cursor = document.querySelector('.cursor-A')
    let CursorBg = document.querySelector('.cursor-A-bg')

    document.addEventListener("mousemove", moveCursor);

    function moveCursor (e) {
      let x = e.clientX;
      let y = e.clientY;
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
    }

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
  })


  return(
    <section className="snow">
      <CursorA />
      <div className="works-showcase-left">
        {
          data.map((item, i) => {
            return(
              <div style={{border:''}} onMouseOver={() => handleHover(i)} key={i}
              className={ active === i ? "fw-showcase-item expand-fw-showcase-item":"fw-showcase-item"}>
              <a href={`/works/${item.link}`} className="fw-showcase-item-link">
                <PrismicNextImage 
                  style={{height:'100%', width:'100%'}}
                  sizes="100vw"
                  loading="eager"
                  priority={true}
                  imgixParams={{ar:'3:2'}}
                  field={item.image}
                  loader={undefined} />
              </a>
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
      </div>
      <div className="works-showcase-left-mob">
        {/* <Swiper style={{padding:'0 0 6em 0'}}
        slidesPerView={1.1}
        spaceBetween={20} 
        >
          {
            data.map((item, i) => {
              return(
                <SwiperSlide key={i}>
                  <div key={i}
              className={"fw-showcase-item"}>
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
                <div className={"fw-showcase-item-text-inner-wrapper active-inner-wrapper"}>
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
                </SwiperSlide>
              )
            })
          }
        </Swiper> */}
        {
          data.map((item, i) => {
            return(
              <div style={{width:'95%', margin:'2em 0'}} key={i}>
              <a href={`/works/${item.link}`} className="fw-showcase-item-link" >
                <PrismicNextImage 
                  style={{height:'100%', width:'100%'}}
                  sizes="100vw"
                  loading="eager"
                  priority={true}
                  imgixParams={{ar:'3:2'}}
                  field={item.image}
                  loader={undefined} />
              </a>
              <div className="fw-showcase-item-text-wrapper">
                <div className={"fw-showcase-item-text-inner-wrapper active-inner-wrapper"}>
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
      </div>
    </section>
  )
}
