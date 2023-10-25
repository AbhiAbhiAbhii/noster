// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

'use client'

import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import './globals.css'
import './styles/Home/home.css' 
import './styles/Works/works.css'

import { Inter } from 'next/font/google'
import Footer from './Component/Footer/Footer'
import Nav from './Component/Nav/Nav'
import { ParallaxProvider } from 'react-scroll-parallax'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {


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
  })

  return (
    <html lang="en">
        <body className={inter.className}>
          <ParallaxProvider>
            <Nav />
              {children}
            <Footer />
          </ParallaxProvider>
        </body>
    </html>
  )
}
