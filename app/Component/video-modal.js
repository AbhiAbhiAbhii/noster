import React from 'react'

const VideoModal = ({ videoLink, closeModal }) => {
  return (
    <div className='video-modal-layer-A'>
        <div onClick={closeModal} className='video-modal-layer-B'>
            <div className='video-modal-video-container'>
                <video controls autoPlay muted="true" loop="true" preload="metadata" playsInline="true" loading="lazy">
                    <source src={videoLink} type="video/mp4" />
                </video>
            </div>
            <div onClick={closeModal} className='close-vid'>
                X
            </div>
        </div>
    </div>
  )
}

export default VideoModal