import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppState } from '../store/index'
import { loadBooks } from '../store/books/actions'
import BookItem from './bookItem/BookItem'

const Books = () => {
	const dispatch = useDispatch<AppDispatch>()
	const books = useSelector((state: AppState) => state.books.books)

	useEffect(() => {
		dispatch(loadBooks())
	}, [])

	return (
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
	)
}

export default Books