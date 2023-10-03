/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { useEffect } from "react";

gsap.registerPlugin(Draggable)


export default function dummy(){

    let dummyData = [
        {
            id: '1'
        },
        {
            id: '2'
        },
        {
            id: '3'
        },
        {
            id: '4'
        },
        {
            id: '5'
        },
        {
            id: '6'
        },
        {
            id: '7'
        },
    ]


    useEffect(() => {
        const hero = document.querySelector('.hero'),
        heroWrapper = document.querySelector('.hero-wrapper'),
        heroFrames = document.querySelectorAll('.hero-frame'),
        heroImages = document.querySelectorAll('.hero-frame-image')

//   const init = () => {
//     gsap.from('.hero-frame', {
//       duration: 1.8,
//       scale: 0,
//       ease: 'expo.inOut',
//       onComplete: drag(),
//       stagger: 0.8
//     })
//   }

//   const drag = () => {
//     Draggable.create('.hero-wrapper', {
//       type: 'x,y',
//       bounds: window,
//       inertia: true,
//       onDragStart: function(){
//         gsap.to(heroFrames, {
//           duration: 0.2,
//           scale: 1.1,
//           ease: 'power1.out'
//         })
//       },
//       onDragEnd: function(){
//         gsap.to(heroFrames, {
//           duration: 0.2,
//           scale: 1,
//           ease: 'power1.out'
//         })
//       }
//     })
//   }


const imgFrames = document.querySelectorAll('.img-frame')


    const init = () => {
      gsap.from('.img-frame', {
        duration: 1.8,
        scale: 0,
        ease: 'expo.inOut',
        onComplete: drag(),
        stagger: 0.8
      })
    }
  
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

  window.onload = () => {
    init();
  }  
    })

    return(
        // <main className="app">
        //     <div className="hero">
        //         <div className="hero-wrapper">
        //             {
        //                 dummyData.map((item, i) => {
        //                     return(
        //                         <div key={i} className="hero-frame">
        //                             <figure className="hero-frame-figure" style={{border:'1px green solid'}}>
        //                                 <p style={{color:'white'}} className="hero-frame-image">
        //                                     {item.id}
        //                                 </p>
        //                             </figure>
        //                         </div>
        //                     )
        //                 })
        //             }
        //         </div>
        //     </div>
        // </main>
    // <div className="frame-X">
      <div className="frame-A snow" style={{overflow:'hidden'}}>
        <div className="frame-B">
          {
            dummyData.map((item, i) => {
              return(
                <div key={i} className="img-frame">
                  <figure className="img-frame-figure">
                    <p style={{color:'red'}}>
                        {item.id}
                    </p>
                  </figure>
                </div>
              )
            })
          }
        </div>
        </div>
    //  </div>
    )
}
