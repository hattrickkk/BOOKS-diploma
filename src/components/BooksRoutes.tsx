import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import { HomePage } from '../pages/homePage/HomePage'

const BooksRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />} >
				<Route index element={<HomePage />} />
			</Route>
		</Routes>
	)
}

export default BooksRoutes