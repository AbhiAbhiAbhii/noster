/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { PrismicRichText } from "@prismicio/react"
import { PrismicNextImage } from "@prismicio/next"

const Marquee = ({ slice }) => {


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
        <div className='marquee-text side-pad'>
            <div className='p-tag black-txt'>
              <PrismicRichText field={slice.primary.title} />
            </div>
        </div>
        <div className='logos'>
            <div className='logos-slide'>
              {
                slice.items.map((item, i) => {
                  return(
                    // <img key={i} src={item.src} alt="img" />
                    <PrismicNextImage 
                      key={i}
                      field={item.marquee_logo}
                      alt=''
                    />
                  )
                })
              }
            </div>
            <div className='logos-slide'>
              {
                slice.items.map((item, i) => {
                  return(
                    // <img key={i} src={item.src} alt="img" />
                    <PrismicNextImage 
                      key={i}
                      field={item.marquee_logo}
                      alt=''
                    />
                  )
                })
              }
            </div>
        </div>
    </section>
  )
}

export default Marquee