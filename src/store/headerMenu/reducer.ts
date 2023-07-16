import { MenuActionType, MenuStateType } from "./types"

const initValue: MenuStateType = {
	isOpen: false
}

export const headerMenuReducer = (state: MenuStateType = initValue, action: MenuActionType): MenuStateType => {
	switch (action.type) {
		case 'OPEN':
			return {
				isOpen: true
			}
		case 'CLOSE':
			return {
				isOpen: false
			}
		default:
			return state
	}
}
