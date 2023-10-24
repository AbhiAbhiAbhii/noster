'use client'

import { useState } from "react"
import CTA from "../CTA/CTA"
import FooterCTA from "../CTA/FooterCTA"

export default function Footer(){

    const [ formFocus, setFormFocus ] = useState(false)

    const handleFormFocus = () => {
        setFormFocus(true)
    }

    const handleFormBlur = () => {
        setFormFocus(false)
    }


    let FooterLeft = [ // Footer Left Info
        {
            title: 'All rights reserved',
            list: [{text:'Noster Associates (c) 2023'}]
        },
        {
            title:'Company',
            list:[
                {text:'Work', link:'/'},
                // {text:'About', link:'/'},
                // {text:'Blog', link:'/'}
            ]
        },
        {
            title:'Follow us',
            list:[{text:'Instagram', link:'https://www.instagram.com/noster_associates/'},{text:'Linked-in', link:'https://www.instagram.com/noster_associates/'}]
        }
    ]

    let Text ="Sign up with your email address to recieve news and updates"


    return(
        <footer className="footer snow">
            <div className="footer-left">
                {
                    FooterLeft.map((item, i) => {
                        return(
                            <div className="footer-left-item black-txt" key={i}>   
                                <p className="p-r">
                                    {item.title}
                                </p>
                                <ul className="footer-left-list-items">
                                    {
                                        item.list.map((data, i) => {
                                            return(
                                                <a href={data.link} className="footer-left-list-item" key={i}>
                                                    {data.text}
                                                </a>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
            <div className="footer-right">
                <div className="footer-right-top">
                    <div className="footer-right-text-A">
                        <p className="p-r black-txt">
                            {Text}
                        </p>
                    </div>
                    <div className="footer-right-text-B">
                        <a href="" className="black-txt">
                            Privacy Policy
                        </a>
                    </div>
                </div>
                <div className="footer-right-bottom">
                    <form className="footer-form">
                        <div className="footer-form-wrapper">
                            <input type="email" onBlur={handleFormBlur} onFocus={handleFormFocus} />
                            <div className="footer-form-border">
                                <div style={{height:'100%', width:'100%', position:'relative'}}>
                                    <div style={{width: formFocus ? '100%':'0'}} className="footer-form-border-inner" />
                                </div>
                            </div>
                           <div style={{position:'absolute', right:'0', bottom:'40%'}}>
                            <p className="black-txt" style={{fontSize:'0.9em'}}>
                                Sign up
                            </p>
                           </div>
                        </div>
                    </form>
                </div>
            </div>
        </footer>
    )
}