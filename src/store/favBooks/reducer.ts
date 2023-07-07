import { SingleBookType } from "models";
import { FavBooksActionType, FavBooksStateType } from "./types";

const initValue: FavBooksStateType = {
	list: []
}
export const favBooksReducer = (state: FavBooksStateType = initValue, action: FavBooksActionType): FavBooksStateType => {
	switch (action.type) {
		case 'SET_AS_FAV':
			return {
				list: [
					...state.list,
					action.payload as SingleBookType
				]
			}
		case 'REMOVE_FROM_FAV':
			const newArr: SingleBookType[] = []
			state.list.forEach(item => {
				if (item.isbn13 !== action.payload) {
					newArr.push(item)
				}
			})
			return {
				list: newArr
			}
		default:
			return state
	}
}