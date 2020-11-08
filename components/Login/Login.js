import React from "react";
import './Login.css'


const Login = () => {
  return (
      <div className="login">
          <form className="login-form">
              <h1>Boswell's E-Commerce</h1>
          <input className="input-text" 
          type="email"
          placeholder="email address"
          name="email"
          required
          />
          <input className="input-text" 
          type="password"
          placeholder="password"
          name="password"
          required
          />
          <input className="input-submit" 
          type="submit"
          value="login"
          />
          </form>
      </div>
  )
}

export default Login;

