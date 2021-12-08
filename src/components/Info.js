import React from "react"
import photo from "../images/pp.jfif"

export default function Info() {
    return (
        <div className="info">
            <img src={photo} className="info--img"/>
            <h1 className="info--title1">Luis Tavares</h1>
            <h3 className="info--title2">Frontend developer</h3>
            <h4 className="info--title3">luistavares.com</h4>
            <div className="info--buttons">
                <button className="info--button-email"><i class="fas fa-envelope"></i>Email</button>
                <button className="info--button-linkedin"><i class="fab fa-linkedin"></i>LinkedIn</button>
            </div>            
        </div>
    )
}