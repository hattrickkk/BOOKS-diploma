import Title from '../../UI/title/Title'
import Books from '../../components/Books'
import React from 'react'

export const HomePage = () => {
	return (
		<div className='home'>
			<div className="container">
				<Title text='New Releases Books' className='home' />
				<Books />
			</div>
		</div>
	)
}
