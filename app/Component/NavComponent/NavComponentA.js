import { useEffect } from "react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)


export default function NavComponentA()  {

    let data = [
        {
          text:'Brief',
          link:'#workBrief'
        },
        {
          text:'Vision',
          link:'#workVision'
        },
        {
          text:'Execution',
          link:'/'
        },
      ]

      useEffect(() => {

        let navComponentA = document.querySelector('.works-nav')

        let timer = null

        window.addEventListener("scroll", (e) => {
            if(timer !== null) {
                clearTimeout(timer)
                navComponentA.classList.add('works-nav-hide')
            }
            timer = setTimeout(() => {
                navComponentA.classList.remove('works-nav-hide')
            },10)
        })

        let elipseContainer = document.querySelectorAll('.elipse-container')
        let elipse = document.querySelectorAll('.elipse')

        const observer = new IntersectionObserver((items) => {
            items.forEach(item => {
                if(item.isIntersecting) {
                    elipse[0].style.opacity = 1
                } else {
                    elipse[0].style.opacity = 0
                }
            })
        },{threshold: 1})
        observer.observe(document.getElementById('workBrief'))


        const observerB = new IntersectionObserver((items) => {
            items.forEach(item => {
                if(item.isIntersecting) {
                    elipse[1].style.opacity = 1
                } else {
                    elipse[1].style.opacity = 0
                }
            })
        }, {threshold: 0.6})
        observerB.observe(document.getElementById('workVision'))

        
        const observerC = new IntersectionObserver((items) => {
            items.forEach(item => {
                if(item.isIntersecting) {
                    elipse[2].style.opacity = 1
                } else {
                    elipse[2].style.opacity = 0
                }
            })
        }, {threshold: 0.2})
        observerC.observe(document.querySelector('.b-scene-frame'))

        
      })



    return(
        <div className="works-nav snow">
            {
            data.map((item, i) => {
                return(
                <div className="works-nav-item snow" key={i} style={{borderRight: i != 2 ? '1px #000 solid':'', position:'relative'}}>
                    <div className="elipse-container" style={{width:'10%', display:'flex', alignItems:'center', justifyContent:'center', overflow:'hidden', position:'relative', left:'-5%'}}>
                        <div className="elipse" style={{height:'0.5em', width:'0.5em', background:'#000', borderRadius:'50%', position:'relative', opacity:'0'}} />
                    </div>
                    <a className="black-txt" href={item.link} style={{position:'relative', width:'60%', display:'flex', alignItems:'center', justifyContent:'flex-start'}}>
                    { item.text }
                    </a>
                </div>
                )
            })
            }
        </div>
    )
}