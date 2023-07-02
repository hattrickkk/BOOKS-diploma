import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppState } from '../../store/index'
import { loadBooks } from '../../store/books/actions'
import BookItem from './BookItem'
import { MoonLoader } from 'react-spinners'

import './books.scss'

const Books = () => {
	const dispatch = useDispatch<AppDispatch>()
	const books = useSelector((state: AppState) => state.books.books)
	const books2 = books.concat(books, books)

	useEffect(() => {
		dispatch(loadBooks())
	}, [])


	if (!books2.length) {
		return (
			<div className="loading-spinner">
				<MoonLoader color="#6f4da1" size={100} />
			</div>

		)
	}

	return (
		<div className="books__wrapper">
			{books2 && books2.map((item, index) => (
				< BookItem
					key={index}
					// key={item.isbn13}
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