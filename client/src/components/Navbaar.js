import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbaar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">QubeHealth Assignment</NavLink>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbaar
