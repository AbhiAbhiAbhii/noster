'use client'

import { useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger);

export default function Nav(){

    const [ hbActive, setHbActive ] = useState(false)


    const handleHbClick = () => {
        setHbActive(!hbActive)

        let bottom = document.querySelector('.line-bottom')
        let top = document.querySelector('.line-top')
        let logo = document.querySelector('.nav-logo-svg')

        if(!hbActive) {
            setTimeout(() => {
                bottom.style.transform = 'translate(-50%,-50%) rotate(45deg)'
                top.style.transform = 'translate(-50%,-50%) rotate(-45deg)'
                bottom.style.background = '#000'
                top.style.background = '#000'
                logo.style.color = '#000'
                bottom.style.width = '80%'
                top.style.width = '80%'

            }, 500)
        } else {
            bottom.style.transform = 'translate(-50%,-50%) rotate(0deg)'
            top.style.transform = 'translate(-50%,-50%) rotate(0deg)'
            bottom.style.background = '#FFF'
            top.style.background = '#FFF'
            bottom.style.width = '100%'
            top.style.width = '100%'
            logo.style.color = '#FFF'
        }

    }


    const arrow = '->'

    let NavLink = [
        {
            text:'Work',
            link:'/works'
        },
        // {
        //     text:'About',
        //     link:'/'
        // },
        // {
        //     text:'Blog',
        //     link:'/'
        // }
    ]

    useEffect(() => {

        let Section = document.getElementById('homeBrief')


        let tl = gsap.timeline({
            scrollTrigger:{
                trigger: Section,
                start: 'top 10%',
                end: 'top 10%',
                markers: false,
                scrub: true
            },
        });

        tl.fromTo(['.nav-mid-item', '.nav-logo-svg', '.nav-right-text'], 
        {
            color:'white'
        },
        {
            color:'black'
        })
        tl.fromTo(['.nav'], 
        {
            background:'none'
        },
        {
            background:'#FFF'
        })

        tl.fromTo('.nav-right-arrow',
        {
            background:'#FFF',
            color:'#000'
        },
        {
            background:'#000',
            color:'#FFF'
        })

        tl.fromTo('.hb-line', 
        {
            background: '#FFF'
        }, 
        {
            background: '#000'
        }
        )

    })


    return(
        <nav className="nav">
            <div className="nav-left">
                <a href={'/'} style={{cursor:'pointer'}} className="nav-logo">
                    <svg className="nav-logo-svg" width="94" height="22" viewBox="0 0 94 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.8719 21.7556H10.7254L2.65399 5.07901V21.7556H0V0.244445H3.31065L11.1905 16.6765V0.244445H13.8719V21.7556Z" fill="currentColor"/>
                        <path d="M24.0894 0C27.2906 0 29.3427 1.05926 30.5466 3.01481C31.6136 4.67161 32.0788 7.27901 32.0788 10.8914C32.0788 14.7753 31.5589 17.2741 30.4098 18.9852C29.2333 21.0222 27.2086 22 24.0894 22C20.9703 22 18.8909 20.9679 17.7417 19.0123C16.6747 17.3556 16.0727 14.884 16.0727 10.9457C16.0727 7.41482 16.5652 4.83457 17.6597 3.0963C18.7814 1.22222 20.8609 0 24.0894 0ZM24.0894 19.5556C25.9226 19.5556 27.1538 18.9037 27.8926 17.8716C28.8228 16.6222 29.2606 14.2321 29.2606 10.9728C29.2606 8.41975 28.8776 5.5679 28.0567 4.37284C27.2633 3.28642 26.0868 2.55309 24.0894 2.55309C22.0374 2.55309 20.9429 3.28642 20.1768 4.34568C19.356 5.5679 18.973 8.44691 18.973 11.0272C18.973 13.7704 19.356 16.4593 20.3684 17.8716C21.1345 19.0667 22.4751 19.5556 24.0894 19.5556Z" fill="currentColor"/>
                        <path d="M48.1725 16.079C48.1725 19.8272 45.8194 22 41.0587 22C35.0119 22 33.4524 19.4469 33.4524 15.563H36.2705C36.2705 18.7407 37.8301 19.5827 41.086 19.5827C44.041 19.5827 45.2722 18.442 45.2722 16.2691C45.2722 13.4988 43.2202 12.7926 40.1558 11.7877C36.5168 10.5926 33.5618 9.64198 33.5618 5.32346C33.5618 2.28148 35.5044 0.0271619 40.5935 0.0271619C46.011 0.0271619 47.8715 2.63457 47.8715 6.30124H45.026C45.026 3.82963 44.041 2.47161 40.4841 2.47161C37.5291 2.47161 36.4347 3.58519 36.4347 5.24198C36.4347 7.84938 38.6236 8.50124 41.77 9.56049C45.1628 10.7012 48.1725 11.8148 48.1725 16.079Z" fill="currentColor"/>
                        <path d="M62.9066 2.82469H57.0514V21.7556H54.1786V2.82469H48.3507V0.244445H62.9066V2.82469Z" fill="currentColor"/>
                        <path d="M76.8076 21.7556H64.2764V0.244445H76.7255V2.82469H67.0398V9.61481H76.2604V12.2222H67.0398V19.1753H76.8076V21.7556Z" fill="currentColor"/>
                        <path d="M92.7961 6.30124C92.7961 10.1309 91.346 11.4074 89.8412 11.842L94 21.7556H90.9903L87.1324 12.3852H81.8792V21.7556H79.1431V0.244445H87.6523C90.9903 0.244445 92.7961 1.79259 92.7961 6.30124ZM89.9232 6.38272C89.9232 3.61235 89.1024 2.77037 87.1051 2.77037H81.9065C81.9065 2.77037 81.9065 9.72346 81.9065 9.94074H87.2419C89.4034 9.94074 89.9232 8.82716 89.9232 6.38272Z" fill="currentColor"/>
                    </svg>
                </a>
            </div>  
            <div className="nav-mid">
                {
                    NavLink.map((item, i) => {
                        return(
                            <a href={item.link} key={i} className="nav-mid-item p-r">
                                {item.text}
                            </a>
                        )
                    })
                }
            </div>
            <a href="tel: 1234567890" className="nav-right">
                <div className="nav-right-wrapper">
                    <div className="nav-right-text">
                        <a href='tel: +91-7025576677' className="p-r">
                            Book an Appointment
                        </a>
                    </div>
                    <div className="nav-right-arrow">
                        <p className="p-r">
                            { arrow }
                        </p>
                    </div>
                </div>
            </a>
            {/* Hamburger */}
            <div className="nav-hb">
                <div onClick={handleHbClick} className="nav-hb-wrapper">
                    <div className="hb-line line-top" style={{top: !hbActive ? '40%':'50%', transitionDelay: !hbActive ? '':'500ms', background: !hbActive ? '#FFF':'#000'}} />
                    <div className="hb-line line-mid" style={{width: !hbActive ? '100%':'0%', transitionDelay: !hbActive ? '500ms':''}} />
                    <div className="hb-line line-bottom" style={{top: !hbActive ? '60%':'50%', transitionDelay: !hbActive ? '':'500ms', background: !hbActive ? '#FFF':'#000'}} />
                </div>
            </div>
            {/* Hamburger Inner */}
            <div className="hb-inner" style={{top: !hbActive ? '-150%':'0%', transitionDelay: !hbActive ? '':'1000ms'}}>
                <div className="hb-inner-wrapper"> 
                    {
                        NavLink.map((item, i) => {
                            return(
                                <a className="hb-inner-item black-txt p-r" href={item.link} key={i}>
                                    {item.text}
                                </a>
                                // +91-7025576677
                            )
                        })
                    }
                    <a className="hb-inner-item black-txt p-r" href='tel: +91-7025576677'>
                        Book an appointment
                    </a>
                </div>
            </div>
        </nav>
    )
}