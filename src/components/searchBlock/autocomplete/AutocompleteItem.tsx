import { getRandomBackColor } from '../../../helpers/getRandomBackcolor'
import { BookType } from '../../../models'
import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
	book: BookType
	clickHandler: (e: any) => void
}

const AutocompleteItem = ({ book, clickHandler }: Props) => {
	const color = getRandomBackColor()
	return (
		<Link
			className='autocomplete__item'
			to={`/books/${book.isbn13}`}
			key={book.isbn13}
			onClick={clickHandler}
		>
			<div className='autocomplete__inner'>
				<div className={`autocomplete__image autocomplete__image--${color}`}>
					<img src={book.image} alt={book.title} />
				</div>
				<div className="autocomplete__title">
					{book.title}
				</div>
			</div>
		</Link >
	)
}

export default AutocompleteItem