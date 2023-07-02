import React from 'react'
import Books from './components/books/Books'
import BooksRoutes from './components/BooksRoutes'


export const App = () => {
	return (
		<div className="wrapper">
			<BooksRoutes />
		</div>
	)
}