import React from "react"
import reactLogo from "../images/logo192.png"

export default function Navbar() {
    return (
        <nav>
            <img src={reactLogo} className="nav--icon"/>
            <h3 className="nav--logo_text">ReactFacts</h3>            
            <h4 className="nav--title">ReactCourse - Project 1</h4>
        </nav>
    )
}