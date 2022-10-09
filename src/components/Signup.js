import React from "react"
import "./SignUpstyles.css"
import logo from "../assets/readsitynav.png";
import { FaTimes } from 'react-icons/fa';

export default function Signup({modall, modalClickk}) {
    
    const [holdValues, setValues] = React.useState({
        email:"", password:"", confirmPass:"", okayToEmail: false
    })
    function switchUp(event) {
    const {name, value, type, checked} = event.target
        setValues(prevValues =>{
        return{...prevValues, 
        [name]: type === "checkbox" ? checked : value}    
        }
      )
    }
    
    function handleSubmit(event) {
    const {password, confirmPass, okayToEmail} = holdValues
        event.preventDefault()
        let gg = "Input password"
        password && confirmPass ? 
        (password === confirmPass ? gg = "Successfully signed up" : gg = "passwords do not match") : gg = "Input password"
        console.log(gg)
        
        (okayToEmail ? console.log("Thanks for signing up for our newsletter!"): "Not P")
    }
    
    return (
        <div className={modall ? "form-container show":"form-container"}>
            <form className="form" onSubmit={handleSubmit}>
            <FaTimes onClick={modalClickk} className="xIcon" size={20}/>
                <img src={logo} alt="" className="logo" />
                <h1 className="title">Create an account</h1>
                <p className="desc">Sign up to Readsity and access to unlimited books</p>
                <input 
                    type="email" 
                    placeholder="Email address"
                    onChange={switchUp}
                    name="email"
                    className="form--input"
                    value={holdValues.email}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    onChange={switchUp}
                    name="password"
                    className="form--input"
                    value={holdValues.password}
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    onChange={switchUp}
                    name="confirmPass"
                    className="form--input"
                    value={holdValues.confirmPass}
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        onChange={switchUp}
                        name="okayToEmail"
                        checked={holdValues.okayToEmail}
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>

                
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>

                <p className="socials">Or Sign up with Socials</p>

                <div className="socials">
                    <img src="" alt="" className="fb" />
                    <img src="" alt="" className="google" />
                </div>

                <p className="redirect">Already have an account? Log in</p>
            </form>
        </div>
    )
}