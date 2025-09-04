export const isEmailValid = (email) => {
    if (!email) return "Email required!"
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return "Invalid email format!"
    return ""
}

export const isPasswordValid = (password) => {
    if (!password) return "Password is required!"
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,64}$/.test(password))
        return "Password must be 8-64 characters and include uppercase, lowercase, number and special character!"
    return ""
}

export const doPasswordsMatch = (confirmPassword, formValues) => {
    if (!confirmPassword) return "Please confirm password!"
    if (confirmPassword !== formValues.password) return "Passwords must match!"
    return ""
}