'use client'

import { PrismicRichText } from "@prismicio/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger)

/**
 * @typedef {import("@prismicio/client").Content.ContactShowcaseSlice} ContactShowcaseSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ContactShowcaseSlice>} ContactShowcaseProps
 * @param {ContactShowcaseProps}
 */
export default function ContactShowcase({ slice }){


  let Info = [ // Contact Mail/Phone Info
    {
      text: <PrismicRichText field={slice.primary.email} />,
      format: 'mailto'
    },
    {
      text: <PrismicRichText field={slice.primary.phone} />,
      format: 'telto'
    }
  ]

  useEffect(() => { // C-Showcase Title Anim Gsap
    const observe = document.querySelector('.c-showcase')

    if(observe) {
      gsap.to(observe, {
        scrollTrigger: {
          trigger: observe,
          start: 'top 18%',
          onEnter: () => {
            AnimTrigger()
            // ScrollTrigger.getById(observe).kill();
          },
          scrub: true
        }
      })
    }

    function AnimTrigger() { 

      const TxtTop = document.querySelector('.c-showcase-title-top')
      const TxtMid = document.querySelector('.c-showcase-title-mid')
      const TxtBottom = document.querySelector('.c-showcase-title-bottom')

      TxtMid.style.opacity = "1"

      setTimeout(() => {
        TxtTop.style.transform= "translateY(0)"
        TxtBottom.style.transform= "translateY(0)"

        TxtTop.style.opacity = "1"
        TxtBottom.style.opacity = "1"

      }, 600)
    }

  })


  // TESTING ANIM
  // useEffect(() => {

  //   const target = document.querySelector('.test')

  //   const elipse = document.querySelectorAll('.elipse')

  //   let tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: '.test',
  //       start:'top 20%',
  //       end:'200%',
  //       scrub: 1,
  //       markers: true,
  //       pin: true
  //     }
  //   })

  //   tl.to(elipse, {
  //     left:'50%',
  //   })


  // })

  return(
    <section className="c-showcase snow">
      <div className="c-showcase-border">
        <div className="c-showcase-title-wrapper black-txt">
          <div className="c-showcase-title-top">
            <h1 className="c-showcase-title h1-xl">
              <PrismicRichText field={slice.primary.showcase_title} />
            </h1>
          </div>
          <div className="c-showcase-title-mid">
            <h1 className="c-showcase-title h1-xl">
              <PrismicRichText field={slice.primary.showcase_title} />
            </h1>
          </div>
          <div className="c-showcase-title-bottom">
            <h1 className="c-showcase-title h1-xl">
              <PrismicRichText field={slice.primary.showcase_title} />
            </h1>
          </div>
        </div>
        <div className="c-showcase-info-wrapper">
          <div className="c-showcase-info-left">
            <p className="p-l black-txt">
              <PrismicRichText field={slice.primary.contact_info_text} />
            </p>
          </div>
          <div className="c-showcase-info-right">
            {
              Info.map((item, i) => {
                return(
                  <div key={i} className="c-showcase-info-right-item">
                    <a className="p-l black-txt" href={`${item.format}:${item.text} `}>
                      { item.text }
                    </a>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      {/* TESTING */}
      {/* <div className="test">
        <div className="elipse-wrapper">
          <div className="elipse elipse-A" />
          <div className="elipse elipse-B" />
          <div className="elipse elipse-C" />
          <div className="elipse elipse-D" />
        </div>
      </div> */}
    </section>
  )
}
