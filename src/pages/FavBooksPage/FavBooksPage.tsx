import React from 'react'
import FavPosts from '../../components/favPosts/FavPosts'
import './favoriteBooksPage.scss'
import Title from '../../UI/title/Title'
import BackHome from '../../UI/backHome/BackHome'
import { useSelector } from 'react-redux'
import { AppState } from 'store'
import NotFound from '../../UI/notFoundImg/NotFound'

const FavBooksPage = () => {
	const favBooks = useSelector((state: AppState) => state.favBooks.list)
	return (
		<div className="fav-books-page">
			<div className="container">
				<BackHome />
				<Title className="fav-books-page" text='Favorites' />
				<FavPosts />
				{
					(favBooks.length === 0) && <NotFound />
				}

			</div>

		</div>
	)
}

export default FavBooksPage