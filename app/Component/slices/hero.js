'use client'
import PlayBtn from "@/app/Component/play-btn";
import { PrismicRichText } from "@prismicio/react";

import React, { useRef, useState } from 'react'
import VideoModal from "../video-modal";

const Hero = ({ slice }) => {

    const [ modal, setModal ] = useState(false)
    const vidRef = useRef()    

    let videoLink = "/video/home/dspace.mp4"

   const handleModalClick = () => {
    setModal(true)
    vidRef.current.pause()
   }

   const handleCloseModal = () => {
    setModal(false)
    vidRef.current.play()
   }


  return (
    <section className="home-hero">
        <div className="home-hero-title">
            <h1 className="haffer-R h1-small green-txt">
            <PrismicRichText field={slice.primary.title} />
            </h1>
        </div>
        <div className="home-hero-vid">
            <video ref={vidRef} autoPlay= { modal ? 'true' : 'false'} muted="true" loop="true" preload="metadata" playsInline="true" loading="lazy">
                <source src={videoLink} type="video/mp4" />
            </video>
            <div className="home-hero-vid-overlay">
            <div style={{position: 'relative', height:'100%', width:'100%'}}>
                <div onClick={handleModalClick} className="play-btn-container">
                    <PlayBtn />
                </div>
            </div>
            </div>
        </div>
        { modal && <VideoModal  closeModal={handleCloseModal} videoLink={videoLink} />}
    </section>
  )
}

export default Hero