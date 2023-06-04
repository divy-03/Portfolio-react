import React from 'react';
import './Navbar.css'

function Navbar() {
  return (
    <>
      <nav className="navbar flex-row">
        <div className="nav-left flex-row">
            <div className="icon">
                Port
            </div>
            <div className="icon-name">
                folio
            </div>
        </div>
        <div className="nav-cent">
        
        </div>
        <div className="nav-right flex-row">
            <div className="nav-menu">
                <ul className="nav-list flex-row">
                    <li><a href="/">Home</a></li>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="/">Services</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                </ul>
            </div>
            <div className="download">
                <a href="/" className="CV-btn" download>Download CV</a>
            </div>
        </div>
        {/* <!-- This is the menuToggle list --> */}
        <div className="menuToggle">
            <div className="nav-resp">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="/">Services</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                    <li><a href="/" className="CV-btn-resp" download>DownloadCV</a></li>
                </ul>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar
