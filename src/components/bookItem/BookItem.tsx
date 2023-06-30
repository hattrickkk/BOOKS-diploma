import Rating from '../Rating'
import Star from '../../UI/Star'
import React from 'react'
import { getRandomBackColor } from '../../helpers/getRandomBackcolor'

import './bookItem.scss'

type PropsType = {
	imageSource: string
	title: string
	author: string
	price: string
	rate: string
	isbn13: string
}


const BookItem = ({ imageSource, title, author, price, rate }: PropsType) => {
	const backColor = getRandomBackColor()
	return (
		<div className='book__inner'>
			<div className={`book__image book__image--${backColor}`}>
				<img src={imageSource} alt={title} />
			</div>

			<div className="book__info">
				<h3
					className="book__title">{title}
				</h3>
				<div className="book__author">{author}</div>
				<div className="book__info-row">
					<p className="book__price">{price}</p>
					<Rating className={rate} />
				</div>
			</div>
		</div>
	)
}

export default BookItem