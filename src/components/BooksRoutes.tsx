import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import { HomePage } from '../pages/homePage/HomePage'
import SinglePage from '../pages/singlePage/SinglePage'

const BooksRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />} >
				<Route index element={<HomePage />} />
				<Route path='books/:isbn13' element={<SinglePage />} />
			</Route>
		</Routes>
	)
}

export default BooksRoutes