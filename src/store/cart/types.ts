import { SingleBookType } from "../../models"

export type CartStateType = {
	list: SingleBookType[]
}

export type CartActionType = {
	type: string
	payload: SingleBookType | string
}