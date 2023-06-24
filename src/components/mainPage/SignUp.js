import { Link } from "react-router-dom";
import { useState } from "react";
import validation from './Validation';

function SignUp() {
const [values, setValues]= useState({
    email: '',
    password: '',
    confirm_password: '',
})
const [errors, setErrors]=useState({})
    const handleInput=(e)=>{
setValues({...values, [e.target.name]:[e.target.value]})
    }

    function handleValidation(e) {
        e.preventDefault()
        setErrors(validation(values))
    }
    return(
        <div className="signup_container  d-flex justify-content-center mt-4">
            <div className="signup-form mt-4 w-40">
                <h3>Sign Up for support portal</h3>
                <h4>Already a user?<Link to="/signIn" style={{color: 'red'}}>Login</Link></h4>
                <div className="form">
                    <form onSubmit={handleValidation}>
                        <label>Email</label>
                        <input type="email" placeholder="Enter Email" name='email'
                         onChange={handleInput} className="form-control"/>
                         {errors.email && <p style={{color:"red"}}>{errors.email}</p>}
                   
                   <label>Password</label>
                   <input type="password" placeholder="Enter password"
                   name='password'
                   onChange={handleInput} className="form-control"/>
                    {errors.password && <p style={{color: 'red'}}>{errors.password}</p>}

                    <label for='confirm_password' className="mt-2">Confirm Password</label>
                   <input type="password" placeholder="Enter confirm passord" 
                   name='confirm_password'
                   onChange={handleInput} className="form-control"/>
                   {errors.confirm_password &&<p style={{color: 'red'}}>{errors.confirm_password}</p>}

                    <button className="btn w-20 mt-4" style={{backgroundColor: 'red'}}>Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp;