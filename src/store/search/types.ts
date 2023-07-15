import { BookType, SearchResponseType } from "models"

export type SearchStateType = {
	total: string
	page: string
	books: BookType[]
}

export type SearchActionType = {
	type: string
	payload?: SearchResponseType
}