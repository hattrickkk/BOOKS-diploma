
import { ErrorMessageType, TokensType } from "../../models";
import { authActionName } from "./actions";
import { AuthActionType, AuthStateType, SuccesAuthType } from "./types";

const initValue: AuthStateType = {
	isAuth: false
}

export const authReducer = (state: AuthStateType = initValue, action: AuthActionType): AuthStateType => {
	switch (action.type) {
		case authActionName.AUTH_SUCCESS:
			return {
				isAuth: true,
				tokens: (action.payload as SuccesAuthType).tokens,
				password: (action.payload as SuccesAuthType).password,
			}
		case authActionName.AUTH_FAILED:
			return {
				isAuth: false,
				errors: action.payload as ErrorMessageType
			}
		case authActionName.AUTH_CLEAR:
			return {
				isAuth: false,
			}
		case authActionName.AUTH_UPDATE:
			return {
				...state,
				tokens: {
					...state.tokens as TokensType,
					access: (action.payload as { access: string }).access
				}
			}
		default:
			return state
	}
}