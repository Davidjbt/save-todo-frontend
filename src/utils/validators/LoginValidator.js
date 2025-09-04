import { isEmailValid } from './common.js';

export const LoginValidator = {
    email: isEmailValid,
    password: (password) => password? "": "Password is required!"
}