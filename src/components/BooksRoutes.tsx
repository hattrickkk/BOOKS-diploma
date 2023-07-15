import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import { HomePage } from '../pages/homePage/HomePage'
import SinglePage from '../pages/singlePage/SinglePage'
import FavBooksPage from '../pages/FavBooksPage/FavBooksPage'
import CartPage from '../pages/CartPage/CartPage'
import AuthPage from '../pages/AuthPage/AuthPage'
import RegConfirmationPage from '../pages/registarationConfirmationPage/RegConfirmationPage'
import ActivationPage from '../pages/activationPage/ActivationPage'
import SuccessPage from '../pages/successPage/SuccessPage'
import SearchPage from '../pages/searchPage/SearchPage'

const BooksRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />} >
				<Route index element={<HomePage />} />
				<Route path=':pageNumber' element={<HomePage />} />

				<Route path='books/:isbn13' element={<SinglePage />} />
				<Route path='books/favorites' element={<FavBooksPage />} />
				<Route path='books/cart' element={<CartPage />} />
				<Route path='books/search' element={<SearchPage />} />
				<Route path='books/search/:searchPageNumber' element={<SearchPage />} />

				<Route path='auth' element={<AuthPage />} />
				<Route path='auth/registration-confirmation' element={<RegConfirmationPage />} />
				<Route path='auth/activate/:uid/:token' element={<ActivationPage />} />
				<Route path='auth/success' element={<SuccessPage />} />
			</Route>
		</Routes>
	)
}

export default BooksRoutes