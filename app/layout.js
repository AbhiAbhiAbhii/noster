// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

'use client'

import { useEffect, useState } from 'react'
import Lenis from '@studio-freight/lenis'
import './globals.css'
import './styles/Home/home.css' 
import './styles/Works/works.css'

import { Inter } from 'next/font/google'
import Footer from './Component/Footer/Footer'
import Nav from './Component/Nav/Nav'
import { ParallaxProvider } from 'react-scroll-parallax'
import Curtain from './Component/Curtain/Curtain'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {

  const [ curtain, setCurtain ] = useState(false)

  const curtainStart = () => {
    let ourBody = document.body
    let nav = document.querySelector('.nav')
    let footer = document.querySelector('.footer')

    nav.style.opacity = 0
    footer.style.opacity = 0


    console.log("Curtain Start")
    ourBody.classList.add('no-scroll')
  }

  const curtainEnd = () => {
    let ourCurtain = document.getElementById('curtainRef')
    let ourBody = document.body

    let nav = document.querySelector('.nav')
    let footer = document.querySelector('.footer')

    console.log("Curtain End")
    ourBody.classList.remove('no-scroll')
    ourCurtain.style.opacity = 0
    nav.style.opacity = 1
    footer.style.opacity = 1

    setTimeout(() => {
      ourCurtain.style.display = 'none'
    }, 2000)
  }




  useEffect(() => {
  
  let lenis;

  if (typeof window !== "undefined") {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: 'vertical', // vertical, horizontal
      gestureDirection: 'vertical', // vertical, horizontal, both
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: true,
      touchMultiplier: 2,
      infinite: false,
    })

    // lenis.on('scroll', (e) => {
    //   console.log(e, "Lenis Scrolling")npm 

    // })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }

  setTimeout(() => {
    setCurtain(true)
  }, 1000)

  {curtain ? curtainEnd() : curtainStart()}

  })

  return (
    <html lang="en">
        <body className={inter.className}>
        <Curtain />
          <ParallaxProvider>
            <Nav />
              {children}
            <Footer />
          </ParallaxProvider>
        </body>
    </html>
  )
}
