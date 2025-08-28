import React, { useState } from 'react';
import FacebookIcon from '../assets/facebook-icon.svg';
import GoogleIcon from '../assets/google-icon.svg';
import { Link } from 'react-router-dom';
import FormInput from '../components/FormInput.jsx';

const Login = () => {
    const [formValues, setFormValues] = useState({
        email: "",
        password: ""
    })

    const onChange = (event) => {
        setFormValues({...formValues, [event.target.name]: event.target.value})
    }

    return (
        <div className="auth-page">
            <div className="auth-container">
                <h1>Login</h1>

                <form method="POST" className="auth-form" noValidate>
                    <FormInput
                        id="login-email"
                        label="Email:"
                        type="email"
                        name="email"
                        value={formValues.email}
                        onChange={onChange}
                        pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$"
                        errorMessage="Invalid email format!"
                    />

                    <FormInput
                        id="login-password"
                        label="Password:"
                        type="password"
                        name="password"
                        value={formValues.password}
                        onChange={onChange}
                        required
                        errorMessage="Not empty"
                    />
                    <p className="auth-forgot-password"><Link to={null}>Forgot password?</Link></p>

                    <button>Login</button>
                </form>

                <fieldset>
                    <legend>Or login with:</legend>
                </fieldset>

                <div className="auth-oauth2">
                    <img src={FacebookIcon} alt="Facebook icon"/>
                    <img src={GoogleIcon} alt="Google icon"/>
                </div>

                <p>Don't have an account? <Link to="/sign-up">Sign up</Link></p>
            </div>
        </div>
    );
};

export default Login;