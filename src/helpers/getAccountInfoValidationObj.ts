import { FormErrorsType } from "../models";

export const getAccountInfoValidationObj = (username: string, email: string, password: string): FormErrorsType => {
	return {
		username: (username === '') ? undefined : username,
		email: (email === '') ? undefined : email,
		password: (password === '') ? undefined : password,
	}

}
