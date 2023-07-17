
import { UserType } from "../../models";
import { AccountActionType, AccountStateType } from "./types";

const initValue: AccountStateType = {
	user: {} as UserType
}

export const accountReducer = (state: AccountStateType = initValue, action: AccountActionType): AccountStateType => {
	switch (action.type) {
		case 'GET_INFO_SUCCESS':
			return {
				user: action.payload as UserType
			}
		case 'EDIT_USERNAME':
			return {
				...state,
				user: {
					...state.user,
					username: action.payload as string
				}
			}
		case 'SET_USERNAME_ERRORS':
			return {
				...state,
				errors: {
					...state.errors,
					username: action.payload as string
				}
			}
		default:
			return state
	}
}