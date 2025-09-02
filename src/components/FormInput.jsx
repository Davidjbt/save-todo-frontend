import React from 'react';

const FormInput = (props) => {
    const { id, label, value, onChange, touched, errorMessage, ...inputProps } = props;
    const isValid = errorMessage === ""

    return (
        <div className="auth-form-input">
            <label htmlFor={id}>{label}</label>
            <input {...inputProps} id={id} value={value} onChange={onChange} data-touched={touched.toString()} className={isValid? "": "invalid"}/>
            {touched && errorMessage &&
                <span>{errorMessage}</span>
            }
        </div>
    );
};

export default FormInput;