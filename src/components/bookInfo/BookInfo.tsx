import FavIcon from '../../UI/icons/FavIcon'
import { SingleBookType } from 'models'
import React from 'react'

const BookInfo = ({ book }: { book: SingleBookType }) => {
	return (
		<div className='book-info'>
			<div className="book-info__inner">
				<div className="book-info__column">
					<FavIcon className='book-info' isLiked={true} />
					<img src={book.image} alt={book.title} />
				</div>
				<div className="book-info__column"></div>
			</div>
		</div>
	)
}

export default BookInfo