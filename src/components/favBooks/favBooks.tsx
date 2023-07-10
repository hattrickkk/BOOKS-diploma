import { removeFromFavBooksAction } from '../../store/favBooks/actions'
import HeartIcon from '../../UI/icons/HeartIcon'
import BookItem from '../bookItem/BookItem'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../store/index'

const favBooks = () => {
	const favposts = useSelector((state: AppState) => state.favBooks.list)
	const dispatch = useDispatch()
	return (
		<div className='fav-books-page__fav-books fav-books'>
			{favposts.map((item, i) => (
				<div
					className='fav-books__item book'
					key={item.isbn10}
				>
					< BookItem
						key={item.isbn13}
						imageSource={item.image}
						title={item.title}
						rate={item.rating}
						author={item.subtitle}
						price={item.price}
						isbn13={item.isbn13}
						isFav={true}
					/>
					<HeartIcon
						key={i}
						clickHandler={() => { dispatch(removeFromFavBooksAction(item.isbn13)) }}
					/>
				</div>
			))
			}
		</div>
	)
}

export default favBooks