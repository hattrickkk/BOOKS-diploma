import { SearchResponseType } from "models"

export const searchBooks = async (searchText: string, page: number): Promise<SearchResponseType> => {
	const response = await fetch(`https://api.itbook.store/1.0/search/${searchText}/${page}`)
	const result = await response.json()
	return result
}