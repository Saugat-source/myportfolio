import React from 'react'
import Typed from "react-typed"
import '../App.css'
function Header() {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1 >Sometimes the heart sees what is invisible to an eye</h1>
                <Typed
                    className="typed-text"
                    strings={["Love", "Emotions", "Happiness", "Sorrow", "Joy", "Fun"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="#" className="btn-main-offer">Contact Me</a>
            </div>
        </div>
    )
}

export default Header
