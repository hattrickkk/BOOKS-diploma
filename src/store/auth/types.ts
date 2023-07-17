import { ErrorMessageType, TokensType } from "../../models"


export type AuthStateType = {
	isAuth: boolean
	errors?: ErrorMessageType
	tokens?: TokensType
	password?: string
}

export type AuthActionType = {
	type: string
	payload?: ErrorMessageType | string | SuccesAuthType
}

export type SuccesAuthType = {
	tokens: TokensType,
	password: string
}