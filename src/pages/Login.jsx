import React from 'react';
import FacebookIcon from '../assets/facebook-icon.svg';
import GoogleIcon from '../assets/google-icon.svg';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="auth-page">
            <div className="auth-container">
                <h1>Login</h1>

                <form method="POST" className="auth-form">
                    <label htmlFor="email">Email:</label><br/>
                    <input type="text" name="email" id="email"/><br/>

                    <label htmlFor="password">Password:</label><br/>
                    <input type="password" name="password" id="password"/><br/>
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