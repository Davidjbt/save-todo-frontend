import { doPasswordsMatch, isEmailValid, isPasswordValid } from './common.js';

export const SignUpValidator = {
    email: isEmailValid,
    password: isPasswordValid,
    confirmPassword: doPasswordsMatch,
    checkEmailAvailability: async (email) => {
        const doesEmailExist = await fetch(`http://localhost:8070/api/users/byEmail?email=${email}`)
            .then(res => res.json())
        return doesEmailExist? "Email already in use!" : ""
    }
}