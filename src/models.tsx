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