import React, { useEffect } from 'react'
import Books from './components/books/Books'
import BooksRoutes from './components/BooksRoutes'
import { useSelector } from 'react-redux'
import { AppState } from 'store'

export const App = () => {
	const isOpen = useSelector((state: AppState) => state.headerMenu.isOpen)
	useEffect(() => {
		if (isOpen) {
			document.body.classList.add('lock')
		}

		return () => {
			if (isOpen) {
				document.body.classList.remove('lock')
			}
		}
	})

	return (
		<div className="wrapper">
			<BooksRoutes />
		</div>
	)
}