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
import { useEffect } from "react";

export default function BehindTheScenes({ slice }){

  const arrow = "->"

  // Image JavaScript
  useEffect(() => {
    const images = document.querySelectorAll('.b-scene-img-item')

    // --------------------------
    const displayDistance = 50 // distance in px to display another photo
    const nDisplay = 5 // number of pictures to display at once


    let globalIndex = 0 // used to count up the images
    let lastMousePosition = {x: 0, y: 0} // used to get the last mouse position

    // function to activate photos
    function activatePic(img, x, y){
        img.dataset.status = "active" 
        img.style.left = `${x}px`
        img.style.top = `${y}px`
        img.style.zIndex = globalIndex // otherwise the last pic will always be at the top
        lastMousePosition = {x: x, y: y} // update the last mouse position
    }

    // compute mouse distance 
    function mouseDistance(x, y){
      return Math.hypot(x - lastMousePosition.x, y - lastMousePosition.y)
    }

    document.querySelector('.b-scene-border').addEventListener('mousemove', (e) => { // div mouse event listener
    if (mouseDistance(e.clientX, e.clientY) > displayDistance){
      let activePic = images[globalIndex % images.length]
      let inactivePic = images[(globalIndex - nDisplay) % images.length]

      activatePic(activePic, e.clientX, e.clientY)
      if (inactivePic){inactivePic.dataset.status = "inactive"}

      globalIndex++
    }
  })

  })

  return(
    <section className="b-scene snow">
      <div className="b-scene-border">
        <div className="b-scene-title">
          <h1 className="h-l black-txt">
            Behind<br /><span className="haffer-I">the </span>Scenes
          </h1>
        </div>
        {/* Cursor Trailing */}
        <div className="b-scene-img-container">
          <div className="b-scene-img-inner-container">
            {
              slice.items.map((item, i) => {
                return(
                  <Image className="b-scene-img-item" height={500} width={500} 
                    src={item.image.url} alt="img" 
                    loading="eager" priority={true} 
                    key={i} data-index={i} 
                    data-status="inactive" />
                )
              })
            }
          </div>
        </div>
        <div className="b-scene-img-container-mob">
          {
            slice.items.map((item, i) => {
              return(
                <div key={i} style={{width:'100%', height:'100vw', margin:'1em 0'}}>
                  <PrismicNextImage
                    field={item.image} style={{height:'100%', width:'100%'}}
                    imgixParams={{ar:'3:2'}} 
                    loading="eager"
                     />
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="b-scene-cta">
        <PrismicLink field={slice.primary.cta_link} className="b-scene-cta-text p-26">View Next Project {arrow}</PrismicLink>
      </div>
    </section>
  )
}
