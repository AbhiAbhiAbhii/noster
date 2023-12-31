'use client'

import CursorB from "@/app/Component/CustomCursor/CursorB";
import { PrismicRichText } from "@prismicio/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef, useState } from "react";
gsap.registerPlugin(ScrollTrigger)

/**
 * @typedef {import("@prismicio/client").Content.ContactShowcaseSlice} ContactShowcaseSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ContactShowcaseSlice>} ContactShowcaseProps
 * @param {ContactShowcaseProps}
 */
export default function ContactShowcase({ slice }){

  const [ scroll, setScroll ] = useState(40)

  const borderTopRef = useRef()
  const borderBottomRef = useRef()

  let Info = [ // Contact Mail/Phone Info
    {
      text:`${slice.primary.email[0].text}`,
      format: 'mailto'
    },
    {
      text: `${slice.primary.phone[0].text}`,
      format: 'tel'
    }
  ]

  let value = "cubic-bezier(0.83, 0, 0.17, 1)"

  useEffect(() => { // C-Showcase Title Anim Gsap
    const observe = document.querySelector('.c-showcase')
    const bg = document.querySelectorAll('.snow')
    const text = document.querySelectorAll('.black-txt')
    const border = document.querySelector('.c-showcase-border')

    const TxtTop = document.querySelector('.c-showcase-title-top')
    const TxtBottom = document.querySelector('.c-showcase-title-bottom')



    const AnimTrigger = () => { // Trigger Anim
      TxtTop.style.transform= "translateY(0)"
      TxtBottom.style.transform= "translateY(0)"

      TxtTop.style.opacity = "1"
      TxtBottom.style.opacity = "1"
    }

    const AnimRevert = () => { // Revert Anim
      TxtTop.style.transform= "translateY(100%)"
      TxtBottom.style.transform= "translateY(-100%)"

      TxtTop.style.opacity = "0"
      TxtBottom.style.opacity = "0"
    }

    const darkMode = () => { // Dark Mode
      bg.forEach(item => {
        item.classList.add("darkMode")
      })

      text.forEach(item => {
        item.classList.add("snow-txt")
      })

        borderTopRef.current.style.background = "#FFF"
        borderBottomRef.current.style.background = "#FFF"

    }

    const lightMode = () => { // Light Mode
      bg.forEach(item => {
        item.classList.remove("darkMode")
      })

      text.forEach(item => {
        item.classList.remove("snow-txt")
      })

      borderTopRef.current.style.background = "#000"
      borderBottomRef.current.style.background = "#000"
    }

    const expandLine = () => { // Expand Line
        borderTopRef.current.style.width = "100%"
        borderBottomRef.current.style.width = "100%"
    }

    const shrinkLine = () => { // Shrink Line
      borderTopRef.current.style.width = "0%"
      borderBottomRef.current.style.width = "0%"
    }

    if(observe) {
      gsap.to(observe, 
        {
        scrollTrigger: {
          trigger: observe,
          // start: `top ${scroll}%`,
          start: 'top 35%',
          onEnter: () => {
            setTimeout(() => AnimTrigger(), 400);
            darkMode();
            // ScrollTrigger.getById(observe).kill
          },
          onLeaveBack: () => {
            setTimeout(() => lightMode(), 500)
            AnimRevert();
          },
          scrub: true,
          // markers: true
        }
      }
      )
    }

    gsap.to([borderTopRef.current, borderBottomRef.current], {
      scrollTrigger: {
        trigger: observe,
        start:'top 80%',
        onEnter: () => {
          expandLine()
        },
        onLeaveBack: () => {
          shrinkLine()
        }
      }
    })




    // Custom CursorB
    // cursor DOM
    // let cursorB = document.querySelector('.cursor-B')
    // let CursorBg = document.querySelector('.cursor-B-bg')

    // let contactArea = document.querySelector('.c-showcase-border')
    // let TextColor = document.querySelector('.cursor-B-text-wrapper')
    // let TextBorder = document.querySelector('.cursor-B-text')
    // let TextArrow = document.querySelector('.cursor-B-arrow')

    // let prevDiv = document.querySelector('.news-showcase')

    // // Cursor BG DOM
    // let circleImg = document.querySelector('.cursor-b-img-outer')

    // function moveCursorB (e) {
    //   let x = e.clientX;
    //   let y = e.clientY;
    //   circleImg.style.left = `${x}px`;
    //   circleImg.style.top = `${y}px`;
    //   // circleImg.style.transform = "translate(-50%, -50%)"
    // }

    // document.body.addEventListener("mousemove", moveCursorB)

    //   contactArea.addEventListener("mouseenter", () => {
    //     cursorB.classList.add('cursor-active')
    //     CursorBg.classList.add('cursor-B-bg-active')
    //     TextColor.classList.add('cursor-B-text-active')
    //     TextBorder.classList.add('cursor-B-text-u-active')
    //     TextArrow.classList.add('cursor-B-arrow-reveal')
  
    //     circleImg.classList.add('circle-img-reveal')
    //   })
      
    //   prevDiv.addEventListener("mouseenter", () => {
    //     cursorB.classList.remove('cursor-active')
    //     CursorBg.classList.remove('cursor-B-bg-active')
    //     TextColor.classList.remove('cursor-B-text-active')
    //     TextBorder.classList.remove('cursor-B-text-u-active')
    //     TextArrow.classList.remove('cursor-B-arrow-reveal')
  
    //     circleImg.classList.remove('circle-img-reveal')
    //   })

    // contactArea.addEventListener("mouseleave", () => {
    //   cursorB.classList.remove('cursor-active')
    //   CursorBg.classList.remove('cursor-B-bg-active')
    //   TextColor.classList.remove('cursor-B-text-active')
    //   TextBorder.classList.remove('cursor-B-text-u-active')
    //   TextArrow.classList.remove('cursor-B-arrow-reveal')

    //   circleImg.classList.remove('circle-img-reveal')
    // })

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
    <section className="c-showcase snow" style={{transition:`all 0.2s ${value}`}}>
      <div className="c-showcase-border" style={{transition:`all 0.2s ${value}`, position:'relative', border:'1px rgba(255, 255, 255, 0) solid'}}>
        <div ref={borderTopRef} style={{position:'absolute', top:'0', left:'0', height:'2px', width:'0%', background:'#000', transition:`all 0.8s ${value}` }}  />
        <div ref={borderBottomRef} style={{position:'absolute', bottom:'0', left:'0', height:'2px', width:'0%', background:'#000', transition:`all 0.8s ${value}` }}  />
      {/* <CursorB image={slice.primary.cursorimage} /> */}
        {/* Desktop */}
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
        {/* Desktop End */}
        {/* Mob */}
        <div className="c-showcase-title-wrapper mob">
          <div className="c-showcase-title-mid">
            <h1 className="c-showcase-title h1-xl">
              <PrismicRichText field={slice.primary.showcase_title} />
            </h1>
          </div>
        </div>
        {/* Mob */}
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
