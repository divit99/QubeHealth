import React from 'react'
import { Link } from 'react-router-dom'

import './App.css'
 import BackgroundImage from '../assets/bg.png'

export default function LandingPage() {
    return (
        <header style={ HeaderStyle }>
            <h1 className="main-title text-center">QubeHealth Assignment</h1>
            <p className="main-para text-center">Are you a Master or a User?</p>
            <div className="buttons text-center">
                <Link to="/UserLogin">
                    <button className="primary-button">I am a user</button>
                </Link>
                <Link to="/signup">
                    <button className="primary-button" id="reg_btn"><span>I am a master </span></button>
                </Link>
            </div>
        </header>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}