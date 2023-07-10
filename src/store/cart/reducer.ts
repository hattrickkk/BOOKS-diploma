import { SingleBookType } from "models";
import { CartActionType, CartStateType } from "./types";
import { CartActionNames } from "./actions";

const initValue: CartStateType = {
	list: []
}
export const cartReducer = (state: CartStateType = initValue, action: CartActionType): CartStateType => {
	switch (action.type) {
		case CartActionNames.ADD_TO_CART:
			return {
				list: [
					...state.list,
					{
						...action.payload as SingleBookType,
						count: 1
					}
				]
			}
		case CartActionNames.REMOVE_FROM_CART:
			const newArr: SingleBookType[] = []
			state.list.forEach(item => {
				if (item.isbn13 !== action.payload) {
					newArr.push(item)
				}
			})
			return {
				list: newArr
			}
		case CartActionNames.PLUS:
			return {
				list: state.list.map(item => {
					if (item.isbn13 === action.payload) {
						return {
							...item,
							count: item.count as number + 1
						}
					}
					else {
						return item
					}
				})
			}
		case CartActionNames.MINUS:
			return {
				list: state.list.map(item => {
					if (item.isbn13 === action.payload) {
						return {
							...item,
							count: item.count as number - 1
						}
					}
					else {
						return item
					}
				})
			}
		default:
			return state
	}
}