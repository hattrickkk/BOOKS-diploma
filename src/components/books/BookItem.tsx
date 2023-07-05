import Rating from '../rating/Rating'
import React from 'react'
import { getRandomBackColor } from '../../helpers/getRandomBackcolor'
import { Link } from 'react-router-dom'

type PropsType = {
	imageSource: string
	title: string
	author: string
	price: string
	rate: string
	isbn13: string
}

const BookItem = ({ imageSource, title, author, price, rate, isbn13 }: PropsType) => {
	const backColor = getRandomBackColor()
	return (
		<div className='book__inner'>
			<div className={`book__image back-colors--${backColor}`}>
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