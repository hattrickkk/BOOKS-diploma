import Rating from '../rating/Rating'
import React from 'react'
import { getRandomBackColor } from '../../helpers/getRandomBackcolor'
import { Link } from 'react-router-dom'

import './bookItem.scss'
import FavIcon from '../../UI/icons/favIcon/FavIcon'
import { removeFromFavBooksAction } from '../../store/favBooks/actions'
import { useDispatch } from 'react-redux'

type PropsType = {
	imageSource: string
	title: string
	author: string
	price: string
	rate: string
	isbn13: string,

	isFav?: boolean
}


const BookItem = ({ imageSource, title, author, price, rate, isbn13, isFav }: PropsType) => {
	const backColor = getRandomBackColor()
	const dispatch = useDispatch()
	return (
		<div className='book__inner'>
			<div className={`book__image back-colors--${backColor}`}>
				{isFav &&
					<FavIcon
						clickHandler={() => dispatch(removeFromFavBooksAction(isbn13))}
						className='book'
						isLiked={true}
					/>
				}
				<img src={imageSource} alt={title} />
			</div>
			<div className="book__info">
				<div className="book__info-text">
					<Link
						to={`/books/${isbn13}`}
						state={backColor}
						className="book__title"
					>{title}
					</Link>
					<div className="book__author">{author}</div>
				</div>

				<div className="book__info-num">
					<p className="book__price">{price}</p>
					<Rating starsCount={rate} className={'book'} />
				</div>
			</div>
		</div>
	)
}

export default BookItem