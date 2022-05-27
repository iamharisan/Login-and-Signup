import React from "react";
import Leftside from "../Leftside/Leftside";
import Rightside from "../Rightside/Rightside";



import './Login.css'
const Login = () => {

  const linkHandler = () => {

  }

  return (

    <div className="login_form">
      <p className="card">Don’t have an account?<a onClick={linkHandler} href='/Register' style={{ color: '#2065D1', fontWeight: 'bold' }}>Get started</a></p>
      <Leftside />
      <Rightside />
    </div>


  )
}
export default Login;