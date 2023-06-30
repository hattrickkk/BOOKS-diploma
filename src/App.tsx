import BookItem from './components/bookItem/BookItem'
import React from 'react'

const obj = {
	"error": "0",
	"title": "An Introduction to C & GUI Programmingn",
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
	return (
		<div className="container">
			<div className="books__wrapper">
				<BookItem
					imageSource={obj.image}
					title={obj.title}
					rate={obj.rating}
					author={obj.authors}
					price={obj.price}
					isbn13={obj.isbn13}
				/>

				<BookItem
					imageSource={obj.image}
					title={obj.title}
					rate={obj.rating}
					author={obj.authors}
					price={obj.price}
					isbn13={obj.isbn13}
				/>
				<BookItem
					imageSource={obj.image}
					title={obj.title}
					rate={obj.rating}
					author={obj.authors}
					price={obj.price}
					isbn13={obj.isbn13}
				/>
				<BookItem
					imageSource={obj.image}
					title={obj.title}
					rate={obj.rating}
					author={obj.authors}
					price={obj.price}
					isbn13={obj.isbn13}
				/>
				<BookItem
					imageSource={obj.image}
					title={obj.title}
					rate={obj.rating}
					author={obj.authors}
					price={obj.price}
					isbn13={obj.isbn13}
				/>
				<BookItem
					imageSource={obj.image}
					title={obj.title}
					rate={obj.rating}
					author={obj.authors}
					price={obj.price}
					isbn13={obj.isbn13}
				/>
			</div>
		</div>
	)
}