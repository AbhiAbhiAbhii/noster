import { useEffect } from "react"


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

        // window.addEventListener("scrollend", () => {
        //     navComponentA.classList.remove('works-nav-hide')
        // })

        // window.removeEventListener("scroll", () => {
        //     navComponentA.classList.remove('works-nav-hide')
        // })

      })


    return(
        <div className="works-nav snow">
            {
            data.map((item, i) => {
                return(
                <div className="works-nav-item snow" key={i} style={{borderRight: i != 2 ? '1px #000 solid':''}}>
                    <a className="black-txt" href={item.link}>
                    { item.text }
                    </a>
                </div>
                )
            })
            }
        </div>
    )
}