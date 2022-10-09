import React from "react"
import "./SignUpstyles.css"
import { FaTimes } from 'react-icons/fa';

export default function Signin({modall, modalClickk}) {
    
    
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
                    Sign In
                </button>
            </form>
        </div>
    )
}
