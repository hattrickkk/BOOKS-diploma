import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import { HomePage } from '../pages/homePage/HomePage'
import SinglePage from '../pages/singlePage/SinglePage'
import FavBooksPage from '../pages/FavBooksPage/FavBooksPage'
import CartPage from '../pages/CartPage/CartPage'

const BooksRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />} >
				<Route index element={<HomePage />} />
				{/* <Route index element={<CartPage />} /> */}
				<Route path='books/:isbn13' element={<SinglePage />} />
				<Route path='books/favorites' element={<FavBooksPage />} />
				<Route path='books/cart' element={<CartPage />} />
			</Route>
		</Routes>
	)
}

export default BooksRoutes