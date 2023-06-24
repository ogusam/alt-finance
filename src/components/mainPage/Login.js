import React from 'react'
import { Link } from 'react-router-dom';

const Login=() =>{
  
    return (
      <div className='form-input'>
        <div className='sub-main'>
      <h1>Log in to support portal</h1>
      <h4>Are you a new user?<Link to='/signup'>Sign up with us</Link></h4>
      
      <form>
        <div className="form_input" >
          <label className='lb'>Your e-mail address</label>
          <br/>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3">
          <label className='lb'>Password</label>
          <br/>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
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
        

        <div className="btn" w-20>
          <button type="submit">
            Login
          </button>
        </div>
        <p className="forgot-password">
          <Link>Forgot password?</Link>
        </p>
      </form>
      </div>
      </div>
    )
  }

  export default Login;