import React, { useState } from 'react';
import './Navbar.css'
// import { isVisible } from '@testing-library/user-event/dist/utils';

function Navbar(props) {

    const [isVisible, setIsVisible] = useState("v-hidden")

    const toggleMenu = () => {
        setIsVisible(isVisible === "v-hidden" ? "v-visible" : "v-hidden");
    }


  return (
    <>
      <nav className={`navbar${props.mode} flex-row`}>
        <div className="nav-left flex-row">
            <div className={`icon${props.mode}`}>
                Port
            </div>
            <div className={`icon-name${props.mode}`}>
                folio
            </div>
        </div>

        <div className="nav-right flex-row">
            <div className="nav-menu">
                <ul className={`nav-list${props.mode} flex-row`}>
                    <li><a href="/">Home</a></li>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="/">Services</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                </ul>
            </div>
            <div className="download flex-row">
                <a href="/" className="CV-btn" download>Download CV</a>
                <button onClick={props.toggleMode} className={`btn-${props.mode}`}>{props.mode} Mode</button>
            </div>
        </div>
        <button className='btn-menu' onClick={toggleMenu}>#</button>
        {/* <!-- This is the menuToggle list --> */}
            <div className={`nav-resp${props.mode} ${isVisible}`}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="/">Services</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                    <li><a href="/" className="CV-btn-resp" download>DownloadCV</a></li>
                <button onClick={props.toggleMode} className={`btn-${props.mode}`}>{props.mode} Mode</button>
                </ul>
            </div>
    </nav>
    </>
  )
}

export default Navbar
