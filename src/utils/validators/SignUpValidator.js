import { doPasswordsMatch, isEmailValid, isPasswordValid } from './common.js';

export const SignUpValidator = {
    email: isEmailValid, // Todo: add validation to check if email already exists
    password: isPasswordValid,
    confirmPassword: doPasswordsMatch
}