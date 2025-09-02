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

    const [touched, setTouched] = useState({
        email: false,
        password: false,
        confirmPassword: false
    })

    const [errors, setErrors] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    })

    const handleSubmit = (event) => {
        event.preventDefault()

        setTouched({
            email: true,
            password: true,
            confirmPassword: true
        })

        setErrors(() => {
            return {
                email: validators.email(formValues.email),
                password: validators.password(formValues.password),
                confirmPassword: validators.confirmPassword(formValues.confirmPassword, formValues)
            }
        })
    }

    const validators = {
        "email": (value) => {
            if (!value) return "Email required!"
            if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value)) return "Invalid email format!"
            return ""
        },
        "password": (value) => {
            if (!value) return "Password is required!"
            if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,64}$/.test(value))
                return "Password must be 8-64 characters and include uppercase, lowercase, number and special character!"
            return ""
        },
        "confirmPassword": (value, formValues) => {
            if (!value) return "Please confirm password!"
            if (value !== formValues.password) return "Passwords must match!"
            return ""
        }
    }

    const onChange = (event) => {
        const { name, value } = event.target

        setFormValues(prev => {
            const newValues = {...prev, [name]: value}
            const error = validators[name](value, newValues);

            setErrors(prev => ({ ...prev, [name]: error }))

            return newValues
        })
    }

    console.log("reloaded")

    const onBlur = (event) => {
        setTouched(prev => ({ ...prev, [event.target.name]: true}))
    }

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
                        touched={touched.email}
                        onBlur={onBlur}
                        errorMessage={errors.email}
                    />

                    <FormInput
                        id="sign-up-password"
                        label="Password:"
                        type="password"
                        name="password"
                        value={formValues.password}
                        onChange={onChange}
                        touched={touched.password}
                        onBlur={onBlur}
                        errorMessage={errors.password}
                    />

                    <FormInput
                        id="sign-up-confirm-password"
                        label="Confirm password:"
                        type="password"
                        name="confirmPassword"
                        value={formValues.confirmPassword}
                        onChange={onChange}
                        touched={touched.confirmPassword}
                        onBlur={onBlur}
                        errorMessage={errors.confirmPassword}
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