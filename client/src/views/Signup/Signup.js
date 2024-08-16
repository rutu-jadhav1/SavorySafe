import React, { useState } from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'

import './Signup.css'
import registerlogo from './register.png'

function Signup() {

    const [user, setUser] = useState({
        fullName: '',
        email: '',
        password: '',
        dob: ''
    })

 const register = async (req , res) => {
    const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/signup`, {
        fullName: user.fullName,
        email: user.email,
        password: user.password,
        dob: user.dob
    })
    if(response.data.success)
    {
        toast.success(response.data.message)
        setUser({
            fullName: '',
            email: '',
            password: '',
            dob: ''
        })
        // Redirect to login page after successful registration
        setTimeout(() => {
            window.location.href = '/login';
        }, 2000); // Wait for 2 seconds before redirecting
    }
    else{
        toast.error(response.data.message)
    }
 }

    return (
        <div>
            <form className='register-form text-style'>
                <div className='register-name-container'>
                    <h2>Register Here</h2>
                    <img src={registerlogo} alt='register-img' className='register-img' />
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Full Name</label>
                    <input type="text" className="form-control register-input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Fullname"
                        value={user.fullName}
                        onChange={(e) => { setUser({ ...user, fullName: e.target.value }) }} />
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control register-input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                        value={user.email}
                        onChange={(e) => { setUser({ ...user, email: e.target.value }) }} />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control register-input" id="exampleInputPassword1" placeholder="Password"
                        value={user.password}
                        onChange={(e) => { setUser({ ...user, password: e.target.value }) }} />
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">DOB </label>
                    <input type="date" className="form-control register-input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your Fullname"
                        value={user.dob}
                        onChange={(e) => { setUser({ ...user, dob: e.target.value }) }} />
                </div>

                <button type="button" className="register-btn" onClick={register}>Register</button>
                <Link to='/login' className='register-pg-link'>Already have account? <span className='pg-link-nm'>Login</span></Link>
              
            </form>
            <Toaster />
        </div>
    )
}

export default Signup