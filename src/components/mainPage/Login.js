import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login=() =>{
  const [values, setValues]= useState({
    email: '',
    password: '',
    
})
const navigate=useNavigate()
  
function handleSubmit(e) {
  e.preventDefault()
  axios.post(`https://admin.el-demo.elnexuconsult.com/api/agents/auth/login`, values)
  .then(res =>{
    if(res.data.status =="success"){
      navigate('/')
    }else{
      alert("Error")
    }
  })
  

}
  
    return (
      <div className='form-input w-70'>
        <div className='sub-main w-10 justity-content-center'>
      <h1>Log in to support portal</h1>
      <h4>Are you a new user?<Link to='/signup'>Sign up with us</Link></h4>
      
      <form onSubmit={handleSubmit}>
        <div className="form_input" >
          <label className='lb'>Your e-mail address</label>
          <br/>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={e=>setValues({...values, email:e.target.value})}
          />
        </div>

        <div className="mb-3">
          <label className='lb'>Password</label>
          <br/>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e=>setValues({...values,password:e.target.value}))}
          />
        </div>

        
          <div className="custom-control custom-checkbox">
            
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me on this computer
            </label>
          </div>
        

        
          <button type="submit">
            Login
          </button>
        
        <p className="forgot-password">
          <Link>Forgot password?</Link>
        </p>
      </form>
      </div>
      </div>
    )
  }

  export default Login;