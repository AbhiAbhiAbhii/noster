import PlayBtn from "@/app/Component/play-btn";
import { PrismicRichText } from "@prismicio/react";

import React from 'react'

const Hero = ({ slice }) => {
  return (
    <section className="home-hero">
        <div className="home-hero-title">
            <h1 className="haffer-R h1-small green-txt">
            <PrismicRichText field={slice.primary.title} />
            </h1>
        </div>
        <div className="home-hero-vid">
            <video autoPlay="true" muted="true" loop="true" preload="metadata" playsInline="true" loading="lazy">
            <source src="/video/home/dspace.mp4" type="video/mp4" />
            </video>
            <div className="home-hero-vid-overlay">
            <div style={{position: 'relative', height:'100%', width:'100%'}}>
                <div className="play-btn-container">
                <PlayBtn />
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Hero