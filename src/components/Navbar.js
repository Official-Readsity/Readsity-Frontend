import React from 'react'
import "./NavStyles.css";
import logo from "../assets/readsitynav.png";

const Navbar = (props) => {
  return (
    <div className='header'>

        <div className="logo">
            <img className="logo" src={logo} alt="main_logo"/>
        </div>

        <div className="navi">

                <ul className="navi">
                  <li>Home</li>
                  <li>Services</li>
                  <li>Blogs</li>
                  <li>Books</li>
                </ul>
              </div>

              <div className="cta">
                <button className="signUp">Get Started</button>
                <button className="signIn">Sign In</button>
              </div>
        

    </div>
  )
}

export default Navbar