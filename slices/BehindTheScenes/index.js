/* eslint-disable @next/next/no-img-element */
'use client'
/**
 * @typedef {import("@prismicio/client").Content.BehindTheScenesSlice} BehindTheScenesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BehindTheScenesSlice>} BehindTheScenesProps
 * @param {BehindTheScenesProps}
 */

import { PrismicNextImage } from "@prismicio/next"
import { PrismicLink } from "@prismicio/react";
import { useEffect } from "react";

export default function BehindTheScenes({ slice }){

  let sectionHeight = 400;
  let sectionWidth = 200;

  // function getRandomPosition(maxWidth, maxHeight) {

  //   maxHeight = 70
  //   maxWidth = 80

  //   const left = Math.random() * maxWidth;
  //   const top = Math.random() * maxHeight;
  //   const width = Math.random() * (maxWidth / 2); // Adjust the width
  //   const height = Math.random() * (maxHeight / 2); // Adjust the height 
  //   return { left, top, width, height };
  // }


  function getRandomPositionAndSize(maxWidth, maxHeight, minWidth, minHeight, maxWidthDiff, maxHeightDiff) {

    maxHeight = 20
    maxWidth = 100

    const left = Math.random() * maxWidth;
    const top = Math.random() * maxHeight;
    const right = Math.random() * maxWidth;
    const bottom = Math.random() * maxHeight;
    const width = minWidth + Math.random() * maxWidthDiff;
    const height = minHeight + Math.random() * maxHeightDiff;
    return { left, top, right, bottom, width, height };


  }

  const arrow = "->"

  // Image JavaScript
  useEffect(() => {
    const images = document.querySelectorAll('.b-scene-img-item')
    const imgPlayGround = document.querySelector('.b-scene-img-container')

    // --------------------------
    const displayDistance = 100 // distance in px to display another photo
    const nDisplay = 8 // number of pictures to display at once


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

    document.querySelector('.b-scene-img-inner-container').addEventListener('mousemove', (e) => {
    if (mouseDistance(e.clientX, e.clientY) > displayDistance){
      let activePic = images[globalIndex % images.length]
      let inactivePic = images[(globalIndex - nDisplay) % images.length]

      activatePic(activePic, e.clientX, e.clientY)
      if (inactivePic){inactivePic.dataset.status = "inactive"}

      globalIndex++
    }
  })


  // Title Div test
  document.querySelector('.b-scene-title').addEventListener('mousemove', (e) => {
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
        {/* Experimental */}
        <div className="b-scene-img-container">
          <div className="b-scene-img-inner-container">
            {
              slice.items.map((item, i) => {
                return(
                  <img className="b-scene-img-item" src={item.image.url} alt="img" key={i} data-index={i} data-status="inactive" />
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
                  <PrismicNextImage field={item.image} style={{height:'100%', width:'100%'}} />
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
