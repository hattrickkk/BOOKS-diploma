import { SingleBookType } from "models"
import { FavBooksActionType } from "./types"

export const setAsFavBookAction = (book: SingleBookType): FavBooksActionType => {
	return {
		type: 'SET_AS_FAV',
		payload: book
	}
}

export const removeFromFavBooksAction = (isbn: string): FavBooksActionType => {
	return {
		type: 'REMOVE_FROM_FAV',
		payload: isbn
	}
}