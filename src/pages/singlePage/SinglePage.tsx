import { SingleBookType } from 'models'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleBook } from '../../services/getSingleBook'
import Title from '../../UI/title/Title'
import BookInfo from '../../components/bookInfo/BookInfo'
import NewsLetter from '../../components/newsLetter/NewsLetter'
import Tabs from '../../components/bookInfoTabs/Tabs'
import Socials from '../../components/socials/Socials'
import BackHome from '../../UI/backHome/BackHome'
import './singlePage.scss'

const SinglePage = () => {
	const { isbn13 } = useParams()
	const [book, setBook] = useState({} as SingleBookType)

	// const isbn13 = '9781617294136'
	useEffect(() => {
		if (isbn13) {
			getSingleBook(isbn13 as string)
				.then(res => setBook(res))
		}
	}, [])

	return (
		<div className='single-page'>
			<div className="container">
				<BackHome />
				<Title text={book.title} className='single-page' />
				<BookInfo book={book} />
				<Tabs
					className='single-page'
					descr={book.desc}
					authors={book.authors}
				/>
				<Socials className='single-page' />
				<NewsLetter />
			</div>
		</div>
	)
}

export default SinglePage