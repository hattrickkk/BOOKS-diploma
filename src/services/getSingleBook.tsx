import { SingleBookType } from "models"

export const getSingleBook = async (isbn: string): Promise<SingleBookType> => {
	const response = await fetch(`/api/books/${isbn}`)
	const result = await response.json()
	return result as SingleBookType
}