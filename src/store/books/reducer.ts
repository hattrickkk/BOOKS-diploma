
import { booksActionsNames } from "./actions";
import { BooksActionType, BooksStateType } from "./types";

const initValue: BooksStateType = {
	books: []
}

export const booksReducer = (state: BooksStateType = initValue, action: BooksActionType): BooksStateType => {
	switch (action.type) {
		case booksActionsNames.SET_BOOKS:
			return {
				books: action.payload
			}
		default:
			return state
	}
}
