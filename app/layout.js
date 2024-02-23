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
import MobNav from './Component/Nav/MobNav'
import Head from 'next/head'
import { useRouter } from 'next/router'
// import { useRouter } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {

  // const router = useRouter()
  // console.log(router.asPath, "SKJSAKDJ")



  // const curtainStart = () => {
  //   let ourBody = document.body
  //   let nav = document.querySelector('.nav')
  //   let footer = document.querySelector('.footer')

  //   nav.style.opacity =  0
  //   footer.style.opacity = 0


  //   console.log("Curtain Start")
  //   ourBody.classList.add('no-scroll')
  // }

  // const curtainEnd = () => {
  //   let ourCurtain = document.querySelector('.curtain-ref')
  //   let ourBody = document.body

  //   let nav = document.querySelector('.nav')
  //   let footer = document.querySelector('.footer')

  //   console.log("Curtain End")
  //   ourBody.classList.remove('no-scroll')
  //   ourCurtain.style.opacity = 0
  //   nav.style.opacity = 1
  //   footer.style.opacity = 1

  //   setTimeout(() => {
  //     ourCurtain.style.display = 'none'
  //   }, 2000)
  // }


  useEffect(() => {

  // curtainStart()
  // setTimeout(() => curtainEnd(), 2000)
  
  let lenis;

  var speed;

  if(window.innerWidth <= 780) {
    speed = 1
  } else speed = 1.001



  if (typeof window !== "undefined") {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, speed - Math.pow(2, -10 * t)), 
      // https://www.desmos.com/calculator/brs54l4xou
      direction: 'vertical', // vertical, horizontal
      gestureDirection: 'vertical', // vertical, horizontal, both
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: true,
      touchMultiplier: 2,
      infinite: false,
      
    })
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }
  }, [])

  return (
    <html lang="en">
      {/* <Head> */}
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://noster.in/" />
      <meta property="twitter:url" content="https://noster.in/" />
      <meta property="og:image" content="/noster-meta.png" />
      <meta property="twitter:image" content="/noster-meta.png" />
      {/* </Head> */}
        <body className={inter.className}>
        {/* {
          router != "/" ?
          null
          : */}
          {/* <Curtain /> */}
        {/* } */}
          <ParallaxProvider>
            <Nav />
            <MobNav />
              {children}
            <Footer />
          </ParallaxProvider>
        </body>
    </html>
  )
}
