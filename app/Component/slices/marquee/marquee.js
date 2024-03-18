/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Marquee = ({ text }) => {


  let images = [
    {
      src: '/marquee/CareStack.svg'
    },
    {
      src: '/marquee/dSpace.svg'
    },
    {
      src: '/marquee/Litmus7.svg'
    },
    {
      src: '/marquee/Ospyn.svg'
    },
    {
      src: '/marquee/Seqato.svg'
    },
    {
      src: '/marquee/Taurus.svg'
    },
    {
      src: '/marquee/Teranet.svg'
    },
    {
      src: '/marquee/Trenser.svg'
    },
    {
      src: '/marquee/Tryzens.svg'
    },
    {
      src: '/marquee/Vaisesika.svg'
    },
    {
      src: '/marquee/Valoriz.svg'
    },
  ]
    
  return (
    <section className='marquee-slice'>
        <div className='marquee-text' style={{textAlign:'center'}}>
            <p className='p-tag black-txt'>
              Our Collaborators
            </p>
        </div>
        <div className='logos'>
            <div className='logos-slide'>
              {
                images.map((item, i) => {
                  return(
                    <img key={i} src={item.src} alt="img" />
                  )
                })
              }
            </div>
            <div className='logos-slide'>
              {
                images.map((item, i) => {
                  return(
                    <img key={i} src={item.src} alt="img" />
                  )
                })
              }
            </div>
        </div>
    </section>
  )
}

export default Marquee