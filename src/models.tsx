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
	count?: number
	isfav?: boolean
	pdf?: {
		[keys: string]: string
	}
}