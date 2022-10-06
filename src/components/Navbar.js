import React, { useState } from 'react'
import "./NavStyles.css";
import logo from "../assets/readsitynav.png";
import { FaBars, FaTimes } from 'react-icons/fa';
import { useEffect } from 'react';
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  const [color, setColor] = useState(false);
  
	const changeColor = () => {
        if (window.scrollY >= 1) {
            setColor(true);
        } else {
            setColor(false);
        }
    };

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const handleClicker = () => setClick(false);
  
  useEffect(() => {
	window.addEventListener("scroll", changeColor);
  }, [])
  
  return (
		<div className={color ? "header header-bg" : "header"}>
					<div className="logodiv">
						<img className="logo" src={logo} alt="main_logo" />
					</div>

					<div className={click ? "navi active":"navi"}>
						<ul className="navig">
							<li className="nav_items" onClick={handleClicker}><NavLink to="/" >Home</NavLink></li>
							<li className="nav_items" onClick={handleClicker}><NavLink to="/Services" >Services</NavLink></li>
							<li className="nav_items" onClick={handleClicker}><NavLink to="/Blogs" >Blogs</NavLink></li>
							<li className="nav_items" onClick={handleClicker}><NavLink to="/Books" >Books</NavLink></li>
							<li className="nav_items" onClick={handleClicker}><NavLink to="/Contact" >Contact us</NavLink></li>

					<div className="cta">
						<button className="signUp action_button">Get Started</button>
						<button className="signIn action_button">Sign In</button>
					</div>
						</ul>
          
					</div>


          <div className="hamburger" onClick={handleClick}>
                {!click ?
                (<FaBars className="Ham" size={20}/> ): 
                (<FaTimes className="xIcon" size={20}/>) }
            </div>
		</div>
	);
}

export default Navbar