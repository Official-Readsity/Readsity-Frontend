import React, { useState } from 'react'
import "./NavStyles.css";
import logo from "../assets/readsitynav.png";
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = (props) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  
  return (
		<div className="navbar_section">
			<div className="navbar_container">
				<div className="header">
					<div className="logodiv">
						<img className="logo" src={logo} alt="main_logo" />
					</div>

					<div className={click ? "navi active":"navi"}>
						<ul className="navig">
							<li className="nav_items">Home</li>
							<li className="nav_items">Services</li>
							<li className="nav_items">Blogs</li>
							<li className="nav_items">Books</li>
							<li className="nav_items">Contact us</li>

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
			</div>
		</div>
	);
}

export default Navbar