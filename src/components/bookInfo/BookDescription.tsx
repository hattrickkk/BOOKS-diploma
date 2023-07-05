import { SingleBookType } from '../../models'
import React from 'react'

const BookDescription = ({ book }: { book: SingleBookType }) => {
	return (
		<div className="book-info__description description">
			<div className="description__row">
				<p className="description__label">Authors</p>
				<p className="description__answer">{book.authors}</p>
			</div>
			<div className="description__row">
				<p className="description__label">Publisher</p>
				<p className="description__answer">{book.publisher}</p>
			</div>
			<div className="description__row">
				<p className="description__label">Language</p>
				<p className="description__answer">{book.language}</p>
			</div>
			<div className="description__row">
				<p className="description__label">Format</p>
				<p className="description__answer">Paper book / ebook (PDF)</p>
			</div>
		</div>
	)
}

export default BookDescription