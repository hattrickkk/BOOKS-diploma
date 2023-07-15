export type BookType = {
	image: string
	isbn13: string
	price: string
	subtitle: string
	title: string
	url: string
	rate: string
}

export type BooksResponseType = {
	count: number
	books: BookType[]
}

export type SingleBookType = {
	error: string
	title: string
	subtitle: string
	authors: string
	publisher: string
	language: string
	isbn10: string
	isbn13: string
	pages: string
	year: string
	rating: string
	desc: string
	price: string,
	image: string
	url: string
	totalPrice?: string
	count?: number
	isfav?: boolean
	pdf?: {
		[keys: string]: string
	}
}
export type UserType = {
	id: string
	username: string
	email: string
}

export type ActivationType = {
	uid: string
	token: string
}

export type TokensType = {
	access: string
	refresh: string
}
export type ErrorMessageType = {
	[key: string]: string[] | string
}

export type FormType = {
	username?: string
	email: string
	password: string
	confirmPassword?: string
}
export type FormErrorsType = Partial<Record<keyof FormType, string>>  /* & {g: string} */


export type SearchResponseType = {
	error: string
	total: string
	page: string
	books: BookType[]
}