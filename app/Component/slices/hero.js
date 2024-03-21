'use client'
import PlayBtn from "@/app/Component/play-btn";
import { PrismicRichText } from "@prismicio/react";

import React, { useRef, useState } from 'react'
import VideoModal from "../video-modal";

const Hero = ({ slice }) => {

    const [ modal, setModal ] = useState(false)
    const vidRef = useRef()    
    const modalVidRef = useRef()    

    let videoLink = "/video/home/Noster_Website_Video.mp4"

   const handleModalClick = () => {
        setModal(true)
        vidRef.current.pause()
        document.body.classList.add("no-scroll")
   }

   const handleCloseModal = () => {
        setModal(false)
        vidRef.current.play()
        modalVidRef.current.play()
        document.body.classList.remove("no-scroll")
   }


  return (
    <section className="home-hero">
        <div className="home-hero-title">
            <h1 className="haffer-R green-txt">
            <PrismicRichText field={slice.primary.title} />
            </h1>
        </div>
        <div className="home-hero-vid" style={{width: 'fit-content'}}>
            <video ref={vidRef} autoPlay= { modal ? 'true' : 'false'} muted loop="true" preload="metadata" playsInline="true" loading="lazy">
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
        { modal && <VideoModal modalVidRef={modalVidRef} closeModal={handleCloseModal} videoLink={videoLink} />}
    </section>
  )
}

export default Hero