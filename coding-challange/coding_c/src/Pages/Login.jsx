import React from 'react'
import "./Login.css"
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from "react"
import { Link, useNavigate} from "react-router-dom" 
import { AuthContext } from '../context/AuthContext'



const Login = () => {

  const {handleAuth}=useContext(AuthContext);
  const navigate=useNavigate()

  const [emaillog,setEmaillog] = useState("");
  const [passwordlog,setPasswordlog] = useState("");
//   console.log(emaillog)
//   console.log(passwordlog)

//   const [flag,setFlag] = useState(false);
//   const [home,setHome] = useState(false);
  



  function handleLogin(e) {
    e.preventDefault();
    let pass = JSON.parse(localStorage.getItem("Password"))
    let mail = JSON.parse(localStorage.getItem("Email"))  
    // console.log(pass)
    // console.log(mail) 
    

    if (passwordlog != pass || emaillog != mail) {
    //   setFlag(true);
    //   setHome(false);
      alert ("Invalid username or password");
    } else {
    //   setHome(true);
    //   setFlag(false);
      handleAuth(true);

      localStorage.setItem("token",true);
      alert("Login Sucessfull")
      navigate("/");
    }
  }
  useEffect(()=>{
    let token=localStorage.getItem("token");
    if(token){
      // navigate("/")
    }
  })

  return (
    <div>
      <div className="loginheader_at"><h4>Customer Login</h4></div>
      <div className="container">
        <div className="loginsection_at">
            <div className="logandregiter_at" >
                
                 <div className="login_heading_at">REGISTRED CUSTOMERS</div>
                  <div className="logintext_at">If you have an account, sign in with your email address.</div>
                    <form onSubmit={handleLogin}>
                        <label htmlFor="email" className="loginlabel_at">Email: </label>
                        <input htmltype="email"  className="input_at" onChange={(e)=>{setEmaillog(e.target.value)}}/>
                        <label htmlFor="password" className="label_at">Password: </label>
                        <input type="password"  className="input_at" onChange={(e)=>{setPasswordlog(e.target.value)}}/>
                    
                   
                    <span>
                        <button className="login_button_at" type='submit'>SIGN IN</button>
                        <Link  className="forgotpwd_at"> Forgot Your Password?</Link>
                        <Link to="/signup">SignUp</Link>
                    </span>
                    </form>

                </div>
         </div>    
    </div>
    </div>
  )
}

export default Login
