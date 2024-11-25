import React from 'react'
import "./Login.css"
import logo from "../../assets/logo.png"

const Login = () => {
  return (
    <div className='login'>
      <img src={logo} className='login-logo' alt="" />
      <div className="login-form">
        <h1>Sign Up</h1>
        <form action="">
          <input type="text" placeholder='Enter your name here' />
          <input type="email" placeholder='Enter your email here' />
          <input type="password" placeholder='Enter Password Here' />
          <button>Sign Up</button>
          <div className="from-help">
            <div className="remember">
              <input type="checkbox"/>
              <label >Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login