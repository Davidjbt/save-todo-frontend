import React, { useState } from 'react';
import FacebookIcon from '../assets/facebook-icon.svg';
import GoogleIcon from '../assets/google-icon.svg';
import { Link } from 'react-router-dom';
import FormInput from '../components/FormInput.jsx';
import { LoginValidator } from '../utils/validators/LoginValidator.js';

const Login = () => {
    const [formValues, setFormValues] = useState({
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({
        email: "",
        password: ""
    })

    const [touched, setTouched] = useState({
        email: false,
        password: false
    })

    const onChange = (event) => {
        setFormValues(prev => {
            const { name, value } = event.target
            const newValues = {...prev, [name]: value}

            const error = LoginValidator[name](value)

            setErrors(prev => ({...prev, [name]: error}))

            return newValues
        })
    }

    const onBlur = (event) => {
        setTouched(prev => ({ ...prev, [event.target.name]: true}))
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        setTouched({
            email: true,
            password: true
        })

        setErrors({
            email: LoginValidator.email(formValues.email),
            password: LoginValidator.password(formValues.password)
        })

        // Todo: submit
    }

    return (
        <div className="auth-page">
            <div className="auth-container">
                <h1>Login</h1>

                <form onSubmit={handleSubmit} className="auth-form" noValidate>
                    <FormInput
                        id="login-email"
                        label="Email:"
                        type="email"
                        name="email"
                        value={formValues.email}
                        onChange={onChange}
                        touched={touched.email}
                        onBlur={onBlur}
                        errorMessage={errors.email}
                    />

                    <FormInput
                        id="login-password"
                        label="Password:"
                        type="password"
                        name="password"
                        value={formValues.password}
                        onChange={onChange}
                        touched={touched.password}
                        onBlur={onBlur}
                        errorMessage={errors.password}
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