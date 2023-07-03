import NewsLetter from '../../components/newsLetter/NewsLetter'
import Title from '../../UI/title/Title'
import Books from '../../components/books/Books'
import React from 'react'

export const HomePage = () => {
	return (
		<div className='home'>
			<div className="container">
				<Title text='New Releases Books' className='home' />
				<div className="books">
					<Books />
				</div>
				<NewsLetter />
			</div>
		</div>
	)
}
