import Rating from '../rating/Rating'
import FavIcon from '../../UI/icons/FavIcon'
import { SingleBookType } from 'models'
import React from 'react'
import BookDescription from './BookDescription'
import Button from '../../UI/button/Button'
import './bookInfo.scss'
import MoreInfo from '../moreInfo/MoreInfo'
import { useLocation } from 'react-router-dom'

const BookInfo = ({ book }: { book: SingleBookType }) => {
	const location = useLocation()
	return (
		<div className="book-info">
			<div className="book-info__inner">
				<div className="book-info__column">
					<div className={`book-info__image back-colors--${location.state}`}>
						<FavIcon className='book-info' isLiked={true} />
						<img src={book.image} alt={book.title} />
					</div>
				</div>
				<div className="book-info__column">
					<div className="book-info__wrapper">
						<div className="book-info__num-row">
							<p className="book-info__price">{book.price}</p>
							<Rating className='book-info' starsCount={book.rating} />
						</div>
						<BookDescription book={book} />
						<MoreInfo />
						<Button
							className='book-info'
							text='Add to cart'
							clickHandler={() => { }}
						/>
						<p>Preview Book</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BookInfo