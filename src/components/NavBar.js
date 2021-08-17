import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import Logo from '../logo.png'

const NavBar = (props) => {

    return (
        <nav className="nav-wrapper green darken-6">
            <p style={{fontSize: '26px'}}>Fun facts</p>
                <a href="/" className="brand-logo left">
                    <img id="logo" src={Logo} alt="logo" />
                </a>
                <ul className="right">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/Fact1">Fun fact 1</NavLink></li>
                    <li><NavLink to="/Fact2">Fun fact 2</NavLink></li>
                    <li><NavLink to="/Fact3">Fun fact 3</NavLink></li>
                    <li><NavLink to="/Fact4">Fun fact 4</NavLink></li>
                </ul>
            
        </nav>
    )
}

export default withRouter(NavBar)
