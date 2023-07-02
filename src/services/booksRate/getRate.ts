import { BookType } from "models"

export const getRate = async (isbn: string): Promise<string> => {
	const response = await fetch(`https://api.itbook.store/1.0/books/${isbn}`)
	const result = await response.json()
	return result.rating as string
}