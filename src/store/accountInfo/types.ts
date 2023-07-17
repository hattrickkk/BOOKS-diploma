import { ErrorMessageType, TokensType, UserType } from "../../models"

export type AccountStateType = {
	user: UserType
	errors?: {
		username?: string
		email?: string
		password?: string
	}
}

export type AccountActionType = {
	type: string
	payload?: UserType | ErrorMessageType | string
}