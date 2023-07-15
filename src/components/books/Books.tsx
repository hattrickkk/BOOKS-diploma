import React, { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppState } from '../../store/index'
import { loadBooks} from '../../store/books/actions'
import BookItem from '../bookItem/BookItem'
import { MoonLoader } from 'react-spinners'

import './books.scss'
import '../../styles/loading-spinner.scss'
import '../../styles/backColors.scss'
import { useParams } from 'react-router-dom'
import Pagination from '../../components/pagination/Pagination'

const Books = () => {

	const { pageNumber } = useParams()
	const [curPageNumber, setCurPageNumber] = useState(pageNumber ? +pageNumber : 1)

	const dispatch = useDispatch<AppDispatch>()
	const books = useSelector((state: AppState) => state.books.books)
	const books2 = books.concat(books, books, books, books)

	useEffect(() => {
		dispatch(loadBooks())
	}, [])

	useEffect(() => {
		setCurPageNumber(pageNumber ? +pageNumber : 1)
	}, [pageNumber])

	if (!books2.length) {
		return (
			<div className="loading-spinner">
				<MoonLoader color="#6f4da1" size={100} />
			</div>
		)
	}

	return (
		<>
			<div className="books">
				<div className="books__wrapper">
					{books2 && books2.slice(curPageNumber * 9 - 9, curPageNumber * 9).map((item, index) => (
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
			</div>

			<Pagination
				className='books'
				total={books2.length}
				itemPerPage={9}
				currentPage={curPageNumber}
			/>
		</>
	)
}

export default Books