/* eslint-disable @next/next/no-img-element */
'use client'
/**
 * @typedef {import("@prismicio/client").Content.BehindTheScenesSlice} BehindTheScenesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BehindTheScenesSlice>} BehindTheScenesProps
 * @param {BehindTheScenesProps}
 */

import { PrismicNextImage } from "@prismicio/next"
import { PrismicLink } from "@prismicio/react";
import Image from "next/image";
import { useEffect, useState } from "react";

import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(Draggable, ScrollTrigger)

export default function BehindTheScenes({ slice }){

  const arrow = "->"

  // // Image JavaScript
  // useEffect(() => {
  //   const images = document.querySelectorAll('.b-scene-img-item')

  //   // --------------------------
  //   const displayDistance = 140 // distance in px to display another photo
  //   const nDisplay = 3 // number of pictures to display at once


  //   let globalIndex = 0 // used to count up the images
  //   let lastMousePosition = {x: 0, y: 0} // used to get the last mouse position

  //   // function to activate photos
  //   function activatePic(img, x, y){
  //       img.dataset.status = "active" 
  //       img.style.left = `${x}px`
  //       img.style.top = `${y}px`
  //       img.style.zIndex = globalIndex // otherwise the last pic will always be at the top
  //       lastMousePosition = {x: x, y: y} // update the last mouse position
  //   }

  //   // compute mouse distance 
  //   function mouseDistance(x, y){
  //     return Math.hypot(x - lastMousePosition.x, y - lastMousePosition.y)
  //   }

  //   document.querySelector('.b-scene-border').addEventListener('mousemove', (e) => { // div mouse event listener
  //   if (mouseDistance(e.clientX, e.clientY) > displayDistance){
  //     let activePic = images[globalIndex % images.length]
  //     let inactivePic = images[(globalIndex - nDisplay) % images.length]

  //     activatePic(activePic, e.clientX, e.clientY)
  //     if (inactivePic){inactivePic.dataset.status = "inactive"}

  //     globalIndex++
  //   }
  // })

  // document.querySelector('.b-scene-border').addEventListener("onmouseup", () => {    
  //   console.log("MOUSE UP")
  // })

  // })

  // const [ mouseTrack, setMouseTrack ] = useState({x:0, y:0})



  // // experiment
  // useEffect(() => {

  //   let mouseArea = document.querySelector('.b-scene-border');


  //   mouseArea.addEventListener('mousemove', (e) => {
  //     console.log(e.target.offsetLeft, "OFFSET LEFT")

  //     let mouseXPos = e.target.offsetLeft
  //     let mouseYPos = e.clientY / e.target.offsetTop 

  //     setMouseTrack({ x: mouseXPos, y: mouseYPos})

  //     console.log(`Mouse x-axis ${mouseXPos} and y-axis ${mouseYPos}`)

  //   })


  

  // })


  useEffect(() => {


    const imgFrames = document.querySelectorAll('.img-frame')
    const frame = document.querySelector('.frame-B')
  
    const drag = () => {
      Draggable.create('.frame-B', {
        type: 'x,y',
        bounds: window,
        inertia: true,
        onDragStart: function(){
        console.log("Drag Start")
          gsap.to(imgFrames, {
            duration: 0.2,
            scale: 1.1,
            ease: 'power1.out'
          })
        },
        onDragEnd: function(){
            console.log("Drag End")
          gsap.to(imgFrames, {
            duration: 0.2,
            scale: 1,
            ease: 'power1.out'
          })
        }
      })
    }

    gsap.from(imgFrames, {
      scrollTrigger: {  
        trigger: '.frame-A',
        start: 'top bottom',
        // end: 'top top',
        // markers: true,
        onEnter: () => {
          drag()
          console.log("drag function enter")
        },
        onLeave: () => {
          console.log("drag function leave")
        }
      },
      duration: 0.3,
      scale: 1,
      ease: 'expo.inOut',
      // onComplete: drag(),
      stagger: 0.8
    })

   

  })

  return(
    <div style={{position:'relative', height:'100vh', width:'100vw', overflow:'hidden', zIndex:'1'}}>
      <div className="frame-A snow">
        <div className="frame-B">
          {
            slice.items.map((item, i) => {
              return(
                <div key={i} className="img-frame" style={{scale:'0'}}>
                  <figure className="img-frame-figure">
                    <PrismicNextImage loading="eager" height={500} width={500} priority={true} field={item.image} style={{height:'100%', width:'100%', objectFit:'cover'}} />
                  </figure>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
    // <section className="b-scene snow">
    //   <div className="b-scene-border">
    //     <div className="b-scene-title">
    //       <h1 className="h-l black-txt">
    //         Behind<br /><span className="haffer-I">the </span>Scenes
    //       </h1>
    //     </div>
        //  <div className="b-scene-img-container">
        //   <div className="b-scene-img-inner-container">
        //     {
        //       slice.items.map((item, i) => {
        //         return(
        //           // <Image className="b-scene-img-item" height={500} width={500} 
        //           //   src={item.image.url} alt="img" 
        //           //   loading="eager" priority={true} 
        //           //   key={i} data-index={i} 
        //           //   data-status="inactive" />
        //           <div className="b-scene-img-frame" key={i}>
        //             <figure className="b-scene-img-frame-figure" style={{height:'100%', width:'100%'}} key={i}>
        //             <Image className="b-scene-img-item" height={500} width={500} 
        //               src={item.image.url} alt="img" 
        //               loading="eager" priority={true} 
        //               key={i} data-index={i} 
        //               />
        //           </figure>
        //           </div>
        //         )
        //       })
        //     }
        //   </div>
        // </div> 
        // <div className="b-scene-img-container">
        //   <div className="b-scene-img-wrapper">
        //     {
        //       slice.items.map((item, i) => {
        //         return(
        //           <div key={i} className="b-scene-img-frame">
        //             <figure className="b-scene-img-frame-figure">
        //               <PrismicNextImage field={item.image} className="b-scene-img" style={{height:'100%', width:'100%', objectFit:'cover'}} />
        //             </figure>
        //           </div>
        //         )
        //       })
        //     }
        //   </div>
        // </div> 
    //     <div className="b-scene-img-container-mob">
    //       {
    //         slice.items.map((item, i) => {
    //           return(
    //             <div key={i} style={{width:'100%', height:'100vw', margin:'1em 0'}}>
    //               <PrismicNextImage
    //                 field={item.image} style={{height:'100%', width:'100%'}}
    //                 imgixParams={{ar:'3:2'}} 
    //                 loading="eager"
    //                  />
    //             </div>
    //           )
    //         })
    //       }
    //     </div>
    //   </div>
    //   <div className="b-scene-cta">
    //     <PrismicLink field={slice.primary.cta_link} className="b-scene-cta-text p-26">View Next Project {arrow}</PrismicLink>
    //   </div>
    // </section> 
  )
}
