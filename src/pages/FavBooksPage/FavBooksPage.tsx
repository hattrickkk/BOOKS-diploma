import React from 'react'
import FavPosts from '../../components/favPosts/FavPosts'
import './favoriteBooksPage.scss'
import Title from '../../UI/title/Title'
import BackHome from '../../UI/backHome/BackHome'

const FavBooksPage = () => {
	return (
		<div className="fav-books-page">
			<div className="container">
				<BackHome />
				<Title className="fav-books-page" text='Favorites' />
				<FavPosts />
			</div>

		</div>
	)
}

export default FavBooksPage