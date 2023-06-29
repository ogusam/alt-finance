import { Link } from "react-router-dom";
import { useState } from "react";
import validation from './Validation';
import axios from "axios";


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
    

    function handleSubmit(e) {
        e.preventDefault()
        setErrors(validation(values))
        axios.post(`https://admin.el-demo.elnexuconsult.com/api/agents/auth/register`, values)
        .then(res =>console.log(res))
        .then(err =>console.log(err));
    
    }
    
    return(
        <div className="signup_container">
            <div className="signup-form ">
                <div className="form-header">
                <h3>Sign Up for support portal</h3>
                <h4>Already a user?<Link to="/signIn" style={{color: 'red'}}>Login</Link></h4>
                </div>
                <br/>
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">Email</label>
                        <br/>
                        <input type="email" placeholder="Enter Email" name='email'
                         onChange={handleInput} />
                         {errors.email && <p style={{color:"red"}}>{errors.email}</p>}
                   <br/>
                   <label htmlFor="password">Password</label>
                   <br/>
                   <input type="password" placeholder="Enter password"
                   name='password'
                   onChange={handleInput} />
                    {errors.password && <p style={{color: 'red'}}>{errors.password}</p>}

                    <br/>
                    <label for='confirm_password' className="mt-2">Confirm Password</label>
                   <br/>
                   <input type="password" placeholder="Enter confirm passord" 
                   name='confirm_password'
                   onChange={handleInput} className="form-control"/>
                   {errors.confirm_password &&<p style={{color: 'red'}}>{errors.confirm_password}</p>}

                    <button className="btn" style={{backgroundColor: 'red'}} >Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp;