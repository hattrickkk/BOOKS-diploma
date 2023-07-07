import { SingleBookType } from "models"


export type FavBooksStateType = {
	list: SingleBookType[]
}

export type FavBooksActionType = {
	type: string
	payload: SingleBookType | string
}