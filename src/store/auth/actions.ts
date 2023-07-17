
import { getNewAccessToken } from "../../services/getNewAccessToken"
import { AppThunk } from ".."
import { ErrorMessageType, TokensType } from "../../models"
import { logIn } from "../../services/logIn"
import { SuccesAuthType } from "./types"

export const authActionName = {
	AUTH_SUCCESS: 'AUTH_SUCCESS',
	AUTH_FAILED: 'AUTH_FAILED',
	AUTH_CLEAR: 'AUTH_CLEAR',
	AUTH_UPDATE: 'AUTH_UPDATE_ACCESSTOKEN'
}

const authSucess = (tokens: TokensType, password: string) => {
	return {
		type: authActionName.AUTH_SUCCESS,
		payload: {
			tokens,
			password
		} as SuccesAuthType
	}
}

const authFailed = (errors: ErrorMessageType) => {
	return {
		type: authActionName.AUTH_FAILED,
		payload: errors
	}
}
export const clearAuthStoreAction = () => {
	return {
		type: authActionName.AUTH_CLEAR,
	}
}

export const updateAccessToken = (accessToken: string) => {
	return {
		type: authActionName.AUTH_UPDATE,
		payload: accessToken
	}
}


export const authAction = (email: string, password: string, cb?: () => void): AppThunk => {
	return async (dispatch) => {
		const response = await logIn(email, password)

		if (!response) {
			return dispatch(authFailed({
				error: 'Неизвестная ошибка'
			}))
		}

		if (!response.ok) {
			return dispatch(authFailed(response.data as ErrorMessageType))
		}

		dispatch(authSucess(response.data as TokensType, password as string))
		cb && cb()
	}
}

export const authUpdateTokenAction = (refreshToken: string): AppThunk => {
	return async (dispatch) => {
		const response = await getNewAccessToken(refreshToken)
		dispatch(updateAccessToken(response))
	}
}