import React, { useState } from 'react';
import GoogleIcon from '../assets/google-icon.svg'
import FacebookIcon from '../assets/facebook-icon.svg'
import { Link } from 'react-router-dom';
import FormInput from '../components/FormInput.jsx';

const SignUp = () => {
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    })

    const handleSubmit = (event) => {
        event.preventDefault() // temp
        // todo: Handle submit
    }

    const onChange = (event) => {
        setFormValues({ ...formValues, [event.target.name]: event.target.value })
    }

    console.log("reloaded")
    console.log(formValues)

    return (
        <div className="auth-page">
            <div className="auth-container">
                <h1>Sign Up</h1>

                <form onSubmit={handleSubmit} className="auth-form" noValidate>

                    <FormInput
                        id="sign-up-email"
                        label="Email:"
                        type="email"
                        name="email"
                        value={formValues.email}
                        onChange={onChange}
                        pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$"
                        errorMessage="Invalid email format!"
                    />

                    <FormInput
                        id="sign-up-password"
                        label="Password:"
                        type="password"
                        name="password"
                        value={formValues.password}
                        onChange={onChange}
                        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,64}$"
                        errorMessage="Password must be 8-64 characters and include uppercase, lowercase, number and special character!"
                    />

                    <FormInput
                        id="sign-up-confirm-password"
                        label="Confirm password:"
                        type="password"
                        name="confirmPassword"
                        value={formValues.confirmPassword}
                        onChange={onChange}
                        pattern={formValues.password}
                        errorMessage="Passwords must match!"
                    />

                    <button>Sign Up</button>
                </form>

                <fieldset>
                    <legend>Or sign up with:</legend>
                </fieldset>

                <div className="auth-oauth2">
                    <img src={FacebookIcon} alt="Facebook icon"/>
                    <img src={GoogleIcon} alt="Google icon"/>
                </div>

                <p>Already have an account? <Link to="/login">Log in</Link></p>
            </div>
        </div>
    );
};

export default SignUp;