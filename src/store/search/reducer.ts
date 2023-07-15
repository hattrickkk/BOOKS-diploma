import { SearchResponseType } from "models"
import { searchActionsNames } from "./actions"
import { SearchActionType, SearchStateType } from "./types"


const initValue: SearchStateType = {
	total: '',
	page: '',
	books: []
}

export const searchReducer = (state: SearchStateType = initValue, action: SearchActionType): SearchStateType => {
	switch (action.type) {
		case searchActionsNames.SET_SEARCH_RESULTS:
			return {
				total: (action.payload as SearchResponseType).total,
				page: (action.payload as SearchResponseType).page,
				books: (action.payload as SearchResponseType).books.map(item => {
					return {
						...item,
						rate: Math.round((Math.random() * (5 - 1) + 1)).toString()
					}
				}),
			}
		case searchActionsNames.FAILED_SEARCH:
			return {
				total: '0',
				page: '0',
				books: [],
			}
		default:
			return state
	}
}
