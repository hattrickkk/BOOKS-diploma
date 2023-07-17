import { getUserInfo } from "../../services/account/getUserInfo"
import { AppThunk } from ".."
import { ErrorMessageType, TokensType, UserType } from "../../models"
import { authUpdateTokenAction } from "../../store/auth/actions"
import { editUserName } from "../../services/account/editUsername"


const getInfoSuccess = (user: UserType) => {
	return {
		type: 'GET_INFO_SUCCESS',
		payload: user
	}
}

const editUsernameAction = (username: string) => {
	return {
		type: 'EDIT_USERNAME',
		payload: username
	}
}
const setUsernameErrorsAction = (errors: string) => {
	return {
		type: 'SET_USERNAME_ERRORS',
		payload: errors
	}
}

export const getAccountInfoAction = (tokens: TokensType): AppThunk => {
	return async (dispatch) => {
		const response = await getUserInfo(tokens.access)

		if (response.ok) {
			dispatch(getInfoSuccess(response.data as UserType))
			// console.log('ok')
		} else {
			// console.log('nen')
			dispatch(authUpdateTokenAction(tokens.refresh))
		}
	}
}

export const editAccountInfoAction = (tokens: TokensType, username: string, cb?: () => void): AppThunk => {
	return async (dispatch) => {
		const usernameResponse = await editUserName(tokens.access, username)
		if (usernameResponse.ok) {
			dispatch(editUsernameAction((usernameResponse.data as UserType).username))
		} else {
			dispatch(setUsernameErrorsAction(usernameResponse.data.username.join(' ')))
		}

		if (usernameResponse.ok) {
			cb && cb()
		}
	}
}