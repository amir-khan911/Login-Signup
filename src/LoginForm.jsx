import React, { useState } from 'react'

const LoginForm = () => {
    const[isLogin,setIsLogin] = useState(true);
  return (
    <>
    <div className="container">
        <div className="form-container">
            <div className="form-toggle">
                <button className={isLogin?'active':""} onClick={()=>setIsLogin(true)}>Login</button>
                <button className={!isLogin?'active':""}onClick={()=>setIsLogin(false)}>Signup</button>
            </div>
            {isLogin ? <>
              <div className="form">
                <h2>Login Form</h2>
                <input type="email" placeholder='Enter Email'/>
                <input type="password" placeholder='Enter Password'/>
                <a href="#">Forgot Password</a>
                <button>Login</button>
                <p>Not a Member ? <a href="#" onClick={()=>setIsLogin(false)}>Signup Now</a></p>
              </div>
            </>:<>
            <div className="form">

            <h2>Login Form</h2>
                <input type="email" placeholder='Enter Email'/>
                <input type="password" placeholder='Enter Password'/>
                <input type="password" placeholder='Enter Confirm Password'/>
                <button>Sing Up</button>
            </div>
            
            </>}
        </div>
    </div>
    </>
  )
}

export default LoginForm
