import React from 'react'
import "./SignUp.css"
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
const SignUp = () => {
    
    const [password,setPassword]=useState("");
const [email,setEmail]=useState("");
const [flag,setFlag]=useState(false);
const [login,setLogin]=useState(false);
const navigate=useNavigate()


const handleSubmit=(e)=>{
    console.log("clicked")
     e.preventDefault();
 
      setFlag(false);
      localStorage.setItem("Email", JSON.stringify(email));
      localStorage.setItem("Password",JSON.stringify(password));
      console.log("Saved in Local Storage");
      setLogin(!login);
      alert("Successfull");
      navigate("/login")
     
    
}
  return (
    <div>
        <Navbar/>
        <div>
        <div className="register_cont_at">
        <div className="register_at">
            <div className="registermainheading_at">CREATE NEW ACCOUNT</div>
            <form >
            <div className="info_container_at">
                <div className="title_at">PERSONAL INFORMATION</div>

                <div className="registerdetails_at">
                    <div className="inp">
                        <label htmlFor="firstname_at">Full Name</label>
                        <input type="text" className="firstname_at" required/>
                    </div>

                    <div className="inp">
                        <label htmlFor="email_at">Email</label>
                        <input type="email" className="email_at" required onChange={(e)=>{setEmail(e.target.value)}}/>
                    </div>

                    <div className="inp">
                        <label htmlFor="password_at">Password</label>
                        <input type="password" className="password_at" required onChange={(e)=>{setPassword(e.target.value)}} minLength="6" />
                    </div>

                </div>
                <button className="registerbutton_at" type='submit' onClick={handleSubmit}>Create An Account</button>

                <Link style={{paddingLeft:"30%"}}  to="/login">Login</Link>
            </div>
            </form>
        </div>
    </div>
    </div>
    </div>
  )
}

export default SignUp