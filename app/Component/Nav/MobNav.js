'use client'

import { useEffect } from "react"

export default function MobNav({uid}){


    let text = "View Works"
    let textB = "Talk to us"

    let arrow = "->"



    useEffect(() => {
        let mobNav = document.querySelector('.mobile-Nav')

        let footer = document.querySelector('.footer')

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    mobNav.style.opacity = "0"
                    setTimeout(() => {
                        mobNav.style.display = "none"
                    }, 400)
                } else {
                    mobNav.style.display = "flex"
                    setTimeout(() => {
                        mobNav.style.opacity = "1"
                    }, 300)
                }
            })
        }, {threshold: 0.3})
        observer.observe(footer)

    })


    return(
        <nav className="mobile-Nav" style={
                {
                    border:'1px rgba(0, 0, 0, 0.17) solid', height:'70px', width:'175px', borderRadius:'20em',
                    background:'#FFF', padding:'5px 0 5px 0px', zIndex:'100', 
                }
            }>
            {/* <div>
                <a href="/works" className="haffer-M" style={{fontSize:'16px', color:'#1E1E1E', position:'relative'}}>
                    { text }
                    <div style={{opacity: uid ?'1':'0' ,height:'7px', width:'7px', borderRadius:'20em', background:'#000', transition:'all 1s ease', position:'absolute', left:'-12%', top:'55%', transform:'translate(0, -50%)'}}>
                    </div>
                </a>
            </div> */}
            <div style={{display:'flex', alignItems:'center', justifyContent:'center', borderRadius:'20em', width:'', background:'rgba(30, 30, 30, 1)', padding:'14px'}}>
                <div className="">
                    <a href='tel: +91-7025576677' className="" style={{fontSize:'16px'}}>
                        Talk to us
                    </a>
                </div>
                <div style={{height:'5em',width:'18px', display:'flex', alignItems:'center', justifyContent:'center', background:'#FFF', borderRadius:'2px', marginLeft:'10px'}}>
                    <p style={{width:'100%', fontSize:'16px', color:'#000'}}>
                        { arrow }
                    </p>
                </div>
            </div>
        </nav>
    )
}