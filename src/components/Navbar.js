import React from 'react'
import "./NavStyles.css";
import logo from "../assets/readsitynav.png";

const Navbar = (props) => {
  return (
		<div className="navbar_section">
			<div className="navbar_container">
				<div className="header">
					<div className="logodiv">
						<img className="logo" src={logo} alt="main_logo" />
					</div>

					<div className="navi">
						<ul className="navi">
							<li className="nav_items">Home</li>
							<li className="nav_items">Services</li>
							<li className="nav_items">Blogs</li>
							<li className="nav_items">Books</li>
						</ul>
					</div>

					<div className="cta">
						<button className="signUp action_button">Get Started</button>
						<button className="signIn action_button">Sign In</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar