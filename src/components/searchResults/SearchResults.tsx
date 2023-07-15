import BookItem from '../../components/bookItem/BookItem'
import React from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../../store'

const SearchResults = () => {
	const search = useSelector((state: AppState) => state.search)
	return (
		<div className="books__wrapper">
			{search.books && search.books.slice(0, 9).map((item, index) => (
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

export default SearchResults