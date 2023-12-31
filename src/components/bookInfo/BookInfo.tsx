import Rating from '../rating/Rating'
import FavIcon from '../../UI/icons/favIcon/FavIcon'
import { SingleBookType } from 'models'
import React, { useCallback } from 'react'
import BookDescription from './BookDescription'
import Button from '../../UI/button/Button'
import './bookInfo.scss'
import MoreInfo from '../moreInfo/MoreInfo'
import { useLocation, useNavigate } from 'react-router-dom'
import { getRandomBackColor } from '../../helpers/getRandomBackcolor'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from 'store'
import { removeFromFavBooksAction, setAsFavBookAction } from '../../store/favBooks/actions'
import { addOnePositionToCart, addToCartAction } from '../../store/cart/actions'
import { authSelector } from '../../store/auth/selectors'

const BookInfo = ({ book }: { book: SingleBookType }) => {
	const dispatch = useDispatch()
	const location = useLocation()
	const navigate = useNavigate()
	const backColor = getRandomBackColor()
	const isAuth = useSelector(authSelector).isAuth

	const favBooks = useSelector((state: AppState) => state.favBooks.list)
	const likedBook = favBooks.find(item => item.isbn13 === book.isbn13)
	const favBookClickHandler = () => {
		!likedBook
			? dispatch(setAsFavBookAction(book))
			: dispatch(removeFromFavBooksAction(book.isbn13))
	}

	const cart = useSelector((state: AppState) => state.cart.list)
	const bookInCart = cart.find(item => item.isbn13 === book.isbn13)
	const addToCartClickHandler = () => {
		if (isAuth) {
			bookInCart
				? dispatch(addOnePositionToCart(book.isbn13))
				: dispatch(addToCartAction(book))
		}
		else {
			navigate('/auth/')
		}
	}

	return (
		<div className="book-info">
			<div className="book-info__inner">
				<div className="book-info__column">
					<div className={`book-info__image back-colors--${location.state ? location.state : backColor}`}>
						{isAuth &&
							<FavIcon
								clickHandler={favBookClickHandler}
								className='book-info'
								isLiked={likedBook ? true : false}
							/>
						}
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
						<MoreInfo
							pages={book.pages}
							isbn10={book.isbn10}
							isbn13={book.isbn13}
						/>
						<Button
							className='book-info'
							text='Add to cart'
							clickHandler={addToCartClickHandler}
						/>
						<p>Preview Book</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BookInfo