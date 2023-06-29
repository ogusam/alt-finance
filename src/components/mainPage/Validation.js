
function validation(values) {
    let error ={}
    const email_pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern =/^(?=.*\d)(?=.*[a-z])(?=.*[A-z])[a-zA-z0-9]{8,}$/


    if(values.email===""){
        error.email="email should not be empty"
    }
    if(!email_pattern.test(values.email)) {
        error.email = "Invalid email"
    }

    if (values.password ==="") {
        error.password ="password should not be empty"
    }
    if (!password_pattern.test(values.password)){
        error.password ="wrong password"
    }

    if(String(values.confirm_password)!==String(values.password))
    {
        error.confirm_password = "password didnot match"
    }
    return error;
}

export default validation;