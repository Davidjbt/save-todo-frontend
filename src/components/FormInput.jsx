import React, { useState } from 'react';

const FormInput = (props) => {

    const { id, label, value, onChange, errorMessage, ...inputProps } = props;
    const [touched, setTouched] = useState(false)

    const onFocus = () => setTouched(true)

    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input {...inputProps} id={id} value={value} onChange={onChange} onBlur={onFocus} touched={touched.toString()}/>
            <span>{errorMessage}</span>
        </div>
    );
};

export default FormInput;