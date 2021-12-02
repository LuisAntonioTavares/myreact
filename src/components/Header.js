import React from "react"
import reactLogo from "../images/logo192.png"

export default function Header(){
    return (
        <header>
            <nav className="mynav">
                <img src={reactLogo} className="nav-logo"/>
                <ul className="nav-items">
                    <li>Princing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}
