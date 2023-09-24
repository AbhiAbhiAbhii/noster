'use client'
/**
 * @typedef {import("@prismicio/client").Content.BehindTheScenesSlice} BehindTheScenesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BehindTheScenesSlice>} BehindTheScenesProps
 * @param {BehindTheScenesProps}
 */

import { PrismicNextImage } from "@prismicio/next"
import { PrismicLink } from "@prismicio/react";

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



  return(
    <section className="b-scene snow">
      <div className="b-scene-border">
        <div className="b-scene-title">
          <h1 className="h-l black-txt">
            Behind<br /><span className="haffer-I">the </span>Scenes
          </h1>
        </div>
        {/* Experimental */}
        {
          slice.items.map((item, i) => {
            const { left, top, right, bottom, width, height } = getRandomPositionAndSize(
              sectionWidth,
              sectionHeight,
              10, // Minimum width
              10, // Minimum height
              12, // Maximum width difference
              12, // Maximum height difference
            );

            return(
              <div key={i} className="b-scene-img" style={{height:`${height}em`, width:`${width}em`, position: "absolute", left: `${left}%`, top: `${top}%`}}>
                <PrismicNextImage field={item.image} style={{height:'100%', width:'100%', objectFit:'fill'}} />
              </div>
            )
          })
        }
      </div>
      <div className="b-scene-cta">
        <PrismicLink field={slice.primary.cta_link} className="b-scene-cta-text p-26">View Next Project {arrow}</PrismicLink>
      </div>
    </section>
  )
}
