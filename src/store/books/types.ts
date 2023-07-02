import { BookType } from "models"

export type BooksStateType = {
	books: BookType[]
}

export type BooksActionType = {
	type: string
	payload: BookType[]
}