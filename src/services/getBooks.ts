import { BooksResponseType } from "models"

export const getBooks = async (): Promise<BooksResponseType> => {
	const response = await fetch('https://api.itbook.store/1.0/new')
	const result = await response.json()
	return result as BooksResponseType
}