import { Link } from 'react-router-dom'
import { getRandomBackColor } from '../../helpers/getRandomBackcolor'
import React from 'react'
import Minus from '../../UI/counter/Minus'
import Plus from '../../UI/counter/Plus'
import DeleteIcon from '../../UI/icons/deleteIcon/DeleteIcon'
import { useDispatch } from 'react-redux'
import { addOnePositionToCart, removeFromCartAction, removeOnePositionFromcCart } from '../../store/cart/actions'

type PropsType = {
	imageSource: string
	title: string
	author: string
	price: string
	isbn13: string
	count?: number
}
const CartItem = ({ imageSource, title, author, price, count, isbn13 }: PropsType) => {
	const backColor = getRandomBackColor()
	const dispatch = useDispatch()

	const minusClickHandler = () => {
		count !== 1
			? dispatch(removeOnePositionFromcCart(isbn13))
			: dispatch(removeFromCartAction(isbn13))
	}

	return (
		<div className="cart-item">
			<div className="book">
				<div className='book__inner'>
					<div className="book__block">
						<div className={`book__image back-colors--${backColor}`}>
							<DeleteIcon
								className='book'
								withBackground={true}
								clickHandler={() => { dispatch(removeFromCartAction(isbn13)) }}
							/>
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
							<div className="book__info-counter">
								<Minus clickHandler={minusClickHandler} />
								<p className="book__count">{count}</p>
								<Plus clickHandler={() => dispatch(addOnePositionToCart(isbn13))} />
							</div>
						</div>
					</div>

					<div className="book__price-block">
						<p className="book__price">{price}</p>
					</div>
					<DeleteIcon
						className='book'
						clickHandler={() => { dispatch(removeFromCartAction(isbn13)) }}
					/>
				</div>
			</div>
		</div>
	)
}

export default CartItem