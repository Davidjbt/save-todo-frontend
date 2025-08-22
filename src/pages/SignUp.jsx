import React from 'react';
import GoogleIcon from '../assets/google-icon.svg'
import FacebookIcon from '../assets/facebook-icon.svg'
import {Link} from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="sign-up-page">

            <div className="sign-up-div">
                <h1>Sign Up</h1>

                <form method="POST" className="form">
                    <label htmlFor="email">Email:</label><br/>
                    <input type="text" name="email" id="email"/><br/>

                    <label htmlFor="password">Password:</label><br/>
                    <input type="password" name="password" id="password"/><br/>

                    <label htmlFor="confirmPassword">Confirm password:</label><br/>
                    <input type="password" name="confirm-password" id="confirm-password"/><br/>

                    <button>Sign Up</button>
                </form>

                <fieldset>
                    <legend>Or sign up with:</legend>
                </fieldset>

                <div className="oauth2">
                    <img src={FacebookIcon} alt="Facebook icon"/>
                    <img src={GoogleIcon} alt="Google icon"/>
                </div>

                <h5>Already have an account? <Link to="/login">Log in</Link></h5>
            </div>
        </div>
    );
};

export default SignUp;