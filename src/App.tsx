import { useDispatch, useSelector } from 'react-redux'
import BookItem from './components/bookItem/BookItem'
import React, { useEffect } from 'react'
import { loadBooks } from './store/books/actions'
import { AppDispatch, AppState } from './store'

const obj = {
	"error": "0",
	"title": "An Introduction to C & GUI Programmi erb  efqvqdw ",
	"subtitle": "",
	"authors": "Simon Long",
	"publisher": "Raspberry Pi Press",
	"language": "English",
	"isbn10": "1912047454",
	"isbn13": "9781912047451",
	"pages": "156",
	"year": "2022",
	"rating": "4",
	"desc": "Freshly updated for GTK3, the 2nd edition of An Introduction to C &amp; GUI Programming will teach you all you need to know to write simple programs in C and start creating GUIs, even if you&#039;re an absolute beginner.The first half of the book is an introduction to C, and covers the basics of wri...",
	"price": "$14.92",
	"image": "https://itbook.store/img/books/9781912047451.png",
	"url": "https://itbook.store/books/9781912047451",
	"pdf": {
		"Free eBook": "https://www.dbooks.org/d/1912047446-1685693185-fd93e561225d4f17/"
	}
}

export const App = () => {

	const dispatch = useDispatch<AppDispatch>()
	const books = useSelector((state: AppState) => state.books.books)
	
	useEffect(() => {
		dispatch(loadBooks())
	}, [])

	return (
		<div className="container">
			<div className="books__wrapper">
				{books.map(item => (
					< BookItem
						key={item.isbn13}
						imageSource={item.image}
						title={item.title}
						rate={item.rate}
						author={item.subtitle}
						price={item.price}
						isbn13={item.isbn13}
					/>
				))}
			</div>
		</div>
	)
}