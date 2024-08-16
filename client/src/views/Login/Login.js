import React, { useState } from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'

import './../Signup/Signup.css'
import loginUser from './user.png'
import loginSVg from './Login-amico.svg'


function Login() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const loginNow = async () => {
    const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`, {
      email: email,
      password: password
    })
    if (response.data.success) {
      toast.success(response.data.message)
      localStorage.setItem('currentUser', JSON.stringify(response.data.data))
      toast.loading('Redirecting to Dashboard...')

      setTimeout(() => {
        window.location.href = '/'
      }, 3000)
    }
    else {
      toast.error(response.data.message)
    }
  }
  return (
    <div>
      <div className='login-pg'>
        <form className='register-form text-style'>
          <div className='name-container'>
            <h2>Login Here</h2>
            <img src={loginUser} alt='register-img' className='register-img' />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control login-input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control login-input" id="exampleInputPassword1" placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="button" className="register-btn" onClick={loginNow}>Login</button>
          <Link to='/Signup' className='login-pg-link'>Don't have account? <span className='pg-link-nm'>Register</span></Link>
        </form>

        <div>
          <img src={loginSVg} className='svg-logo' />
        </div>
      </div>
      <Toaster />
    </div>
  )
}

export default Login