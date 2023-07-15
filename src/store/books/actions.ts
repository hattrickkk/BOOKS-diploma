import { BookType } from "models"
import { getBooks } from "../../services/getBooks"
import { AppThunk } from "store"
import { getArrObBooksWithRate } from "../../services/booksRate/getArrObBooksWithRate"
export const booksActionsNames = {
	SET_BOOKS: 'SET_BOOKS'
}

const setBooks = (books: BookType[]) => {
	return {
		type: 'SET_BOOKS',
		payload: books
	}
}

export const loadBooks = (): AppThunk => {
	return async (dispatch) => {
		const arrOfBooks = await getBooks()
		const newArr = await getArrObBooksWithRate(arrOfBooks.books)
		dispatch(setBooks(newArr))
	}
}