import NewsLetter from '../../components/newsLetter/NewsLetter'
import Title from '../../UI/title/Title'
import Books from '../../components/books/Books'
import React from 'react'
import './homePage.scss'

export const HomePage = () => {
	
	return (
		<div className='home'>
			<div className="container">
				<Title text='New Releases Books' className='home' />
				<Books />
				<NewsLetter />
			</div>
		</div>
	)
}
