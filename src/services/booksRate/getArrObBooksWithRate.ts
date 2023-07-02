import { BookType } from "../../models"
import { getRate } from "./getRate"


export const getArrObBooksWithRate = (arr: BookType[]) => {
	return Promise.all(arr.map(async item => {
		item.rate = await getRate(item.isbn13)
		return item
	}))
}