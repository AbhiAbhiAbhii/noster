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
        // {
        //     text:'Work',
        //     link:'/works'
        // },
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

        document.querySelector('.nav').style.opacity = 1

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
        <nav className="nav" style={{opacity:'1'}}>
            <div className="nav-left" style={{}}>
                <a href={'/'} style={{cursor:'pointer'}} className="nav-logo">
                    {/* <svg className="nav-logo-svg" width="94" height="22" viewBox="0 0 94 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.8719 21.7556H10.7254L2.65399 5.07901V21.7556H0V0.244445H3.31065L11.1905 16.6765V0.244445H13.8719V21.7556Z" fill="currentColor"/>
                        <path d="M24.0894 0C27.2906 0 29.3427 1.05926 30.5466 3.01481C31.6136 4.67161 32.0788 7.27901 32.0788 10.8914C32.0788 14.7753 31.5589 17.2741 30.4098 18.9852C29.2333 21.0222 27.2086 22 24.0894 22C20.9703 22 18.8909 20.9679 17.7417 19.0123C16.6747 17.3556 16.0727 14.884 16.0727 10.9457C16.0727 7.41482 16.5652 4.83457 17.6597 3.0963C18.7814 1.22222 20.8609 0 24.0894 0ZM24.0894 19.5556C25.9226 19.5556 27.1538 18.9037 27.8926 17.8716C28.8228 16.6222 29.2606 14.2321 29.2606 10.9728C29.2606 8.41975 28.8776 5.5679 28.0567 4.37284C27.2633 3.28642 26.0868 2.55309 24.0894 2.55309C22.0374 2.55309 20.9429 3.28642 20.1768 4.34568C19.356 5.5679 18.973 8.44691 18.973 11.0272C18.973 13.7704 19.356 16.4593 20.3684 17.8716C21.1345 19.0667 22.4751 19.5556 24.0894 19.5556Z" fill="currentColor"/>
                        <path d="M48.1725 16.079C48.1725 19.8272 45.8194 22 41.0587 22C35.0119 22 33.4524 19.4469 33.4524 15.563H36.2705C36.2705 18.7407 37.8301 19.5827 41.086 19.5827C44.041 19.5827 45.2722 18.442 45.2722 16.2691C45.2722 13.4988 43.2202 12.7926 40.1558 11.7877C36.5168 10.5926 33.5618 9.64198 33.5618 5.32346C33.5618 2.28148 35.5044 0.0271619 40.5935 0.0271619C46.011 0.0271619 47.8715 2.63457 47.8715 6.30124H45.026C45.026 3.82963 44.041 2.47161 40.4841 2.47161C37.5291 2.47161 36.4347 3.58519 36.4347 5.24198C36.4347 7.84938 38.6236 8.50124 41.77 9.56049C45.1628 10.7012 48.1725 11.8148 48.1725 16.079Z" fill="currentColor"/>
                        <path d="M62.9066 2.82469H57.0514V21.7556H54.1786V2.82469H48.3507V0.244445H62.9066V2.82469Z" fill="currentColor"/>
                        <path d="M76.8076 21.7556H64.2764V0.244445H76.7255V2.82469H67.0398V9.61481H76.2604V12.2222H67.0398V19.1753H76.8076V21.7556Z" fill="currentColor"/>
                        <path d="M92.7961 6.30124C92.7961 10.1309 91.346 11.4074 89.8412 11.842L94 21.7556H90.9903L87.1324 12.3852H81.8792V21.7556H79.1431V0.244445H87.6523C90.9903 0.244445 92.7961 1.79259 92.7961 6.30124ZM89.9232 6.38272C89.9232 3.61235 89.1024 2.77037 87.1051 2.77037H81.9065C81.9065 2.77037 81.9065 9.72346 81.9065 9.94074H87.2419C89.4034 9.94074 89.9232 8.82716 89.9232 6.38272Z" fill="currentColor"/>
                    </svg> */}
                    <svg className="nav-logo-svg" viewBox="0 0 3252 574" fill="currentColor" xmlns="http://www.w3.org/2000/svg" 
                        // width="3252" height="574"
                        width="150" height="25">
                        <path d="M728.613 226.947C722.613 241.03 718.809 255.95 717.332 271.186L595.675 270.301C599.071 200.148 628.025 133.664 677.075 83.3924C702.962 56.8442 733.93 35.7793 768.131 21.4527C802.333 7.12603 839.068 -0.169198 876.149 0.00221976C913.196 0.0540067 949.866 7.45056 984.036 21.7642C1018.21 36.0778 1049.2 57.0245 1075.22 83.3924C1124.69 133.76 1153.77 200.656 1156.84 271.186L1035.19 271.186C1032.76 243.889 1022.82 217.799 1006.46 195.814C990.095 173.83 967.959 156.813 942.507 146.654C921.432 138.055 898.911 133.551 876.149 133.382C844.931 131.97 814.034 140.19 787.643 156.926C761.253 173.662 740.645 198.107 728.613 226.947Z" fill="currentColor"/>
                        <path d="M1465.41 115.02C1479.33 117.306 1492.54 122.739 1504.04 130.904C1515.54 139.068 1525.02 149.75 1531.77 162.134L1672.45 162.134C1653.2 69.6751 1575.34 12.1647 1466.52 7.29845L1465.41 115.02Z" fill="currentColor"/>
                        <path d="M1530.22 238.228L1419.62 213.233C1393.96 207.924 1375.38 195.759 1375.38 168.994C1375.38 142.23 1401.71 119.889 1433.11 115.465V7.96502C1324.95 13.2737 1236.47 71.6688 1236.47 176.957C1236.47 258.946 1284.69 310.558 1381.13 331.793L1493.5 355.903C1522.92 361.875 1543.27 372.714 1543.27 403.46C1543.27 440.842 1506.11 458.095 1465.63 458.758V569.355C1491.36 568.891 1516.93 565.175 1541.72 558.296C1615.16 537.724 1678.2 487.735 1678.2 395.276C1678.2 302.816 1613.17 256.366 1530.22 238.228Z" fill="currentColor"/>
                        <path d="M1393.52 438.592C1405.09 447.268 1418.61 452.977 1432.89 455.218L1431.79 567.584C1346.63 562.718 1280.93 528.433 1245.76 474.241C1232.25 453.461 1223.41 429.986 1219.88 405.449H1366.54C1372.69 418.536 1381.95 429.915 1393.52 438.592Z" fill="currentColor"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2891.23 365.418L3082.78 365.418C3122.94 358.631 3159.32 337.622 3185.27 306.229C3211.22 274.836 3225.01 235.156 3224.12 194.435C3224.12 85.829 3141.4 17.4801 3030.58 17.4801L2758.51 17.4801V556.308H2891.23V365.418ZM2891 131.616H3016.2C3058.89 131.616 3094.06 153.735 3094.06 195.983C3094.06 238.231 3059.55 261.014 3016.2 261.014H2891V131.616Z" fill="currentColor"/>
                        <path d="M2952.27 397.712H3111.53L3251.33 556.308H3091.63L2952.27 397.712Z" fill="currentColor"/>
                        <path d="M1887.67 556.308H2019.28V166.565H1887.67V556.308Z" fill="currentColor"/>
                        <path d="M1713.37 134.042V18.3578L2193.58 18.3578V134.042L1713.37 134.042Z" fill="currentColor"/>
                        <path d="M132.716 45.3505L109.933 18.3648L0 18.3648L2.35143e-05 556.308H132.495L132.495 244.867L132.716 245.31V45.3505Z" fill="currentColor"/>
                        <path d="M349.486 493.266L165.231 282.468V83.836L349.486 301.048V493.266Z" fill="currentColor"/>
                        <path d="M382.223 18.3648L382.223 339.538L382.002 339.317V530.429L404.564 556.308H513.833V18.3648L382.223 18.3648Z" fill="currentColor"/>
                        <path d="M1035.19 304.582C1033.33 320.991 1029.01 337.024 1022.36 352.139C1009.52 379.813 988.799 403.08 962.787 419.018C936.775 434.955 906.634 442.854 876.149 441.722C854.733 441.769 833.499 437.792 813.551 429.999C787.268 420.374 764.265 403.471 747.227 381.264C730.19 359.057 719.821 332.461 717.332 304.582H595.675C599.284 374.426 628.222 440.56 677.074 490.606C702.947 517.175 733.912 538.253 768.117 552.581C802.322 566.909 839.065 574.193 876.149 573.996C913.207 574.018 949.898 566.655 984.079 552.337C1018.26 538.019 1049.24 517.034 1075.22 490.606C1124.57 440.496 1153.71 373.948 1157.07 303.697L1035.19 304.582Z" fill="currentColor"/>
                        <path d="M2388.89 233.586L2675.56 233.586V341.087H2388.89V556.308H2256.4V18.3648L2388.89 18.3648V233.586Z" fill="currentColor"/>
                        <path d="M2675.56 132.497L2421.41 132.497V18.3613L2675.56 18.3613V132.497Z" fill="currentColor"/>
                        <path d="M2421.41 556.308H2675.56V442.172H2421.41V556.308Z" fill="currentColor"/>
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
            <a href="tel:+919656922212" className="nav-right">
                <div className="nav-right-wrapper">
                    <div className="nav-right-text">
                        <p className="p-r">
                            Book an Appointment
                        </p>
                    </div>
                    <div className="nav-right-arrow" style={{}}>
                        <p className="p-r" style={{width:'100%', position:'relative', top:'-2%', left:'8%'}}>
                            { arrow }
                        </p>
                    </div>
                </div>
            </a>
            {/* Hamburger */}
            <div className="nav-hb" style={{display:'none'}}>
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