import { SingleBookType } from "models"

export const CartActionNames = {
	ADD_TO_CART: 'ADD_TO_CART',
	REMOVE_FROM_CART: 'REMOVE_FROM_CART',
	PLUS: 'PLUS',
	MINUS: 'MINUS'
}

export const addToCartAction = (book: SingleBookType) => {
	return {
		type: CartActionNames.ADD_TO_CART,
		payload: book
	}
}
export const removeFromCartAction = (isbn: string) => {
	return {
		type: CartActionNames.REMOVE_FROM_CART,
		payload: isbn
	}
}
export const addOnePositionToCart = (isbn: string) => {
	return {
		type: CartActionNames.PLUS,
		payload: isbn
	}
}
export const removeOnePositionFromcCart = (isbn: string) => {
	return {
		type: CartActionNames.MINUS,
		payload: isbn
	}
} 