import { SearchResponseType } from "models"
import { AppThunk } from "store"
import { searchBooks } from "../../services/searchBooks"
import { getArrObBooksWithRate } from "services/booksRate/getArrObBooksWithRate"

export const searchActionsNames = {
	SET_SEARCH_RESULTS: 'SET_SEARCH_RESULTS',
	FAILED_SEARCH: 'FAILED_SEARCH'
}

const setBooks = (searchResponse: SearchResponseType) => {
	return {
		type: searchActionsNames.SET_SEARCH_RESULTS,
		payload: searchResponse
	}
}

export const failedSearch = () => {
	return {
		type: searchActionsNames.FAILED_SEARCH,
	}
}

export const loadSearch = (text: string, page: number): AppThunk => {
	return async (dispatch) => {
		const searchText = text ? text : ' '
		const arrOfBooks = await searchBooks(searchText, page)
		if (arrOfBooks.error === '0') {
			dispatch(setBooks(arrOfBooks))
		} else {
			dispatch(failedSearch())
		}
	}
}