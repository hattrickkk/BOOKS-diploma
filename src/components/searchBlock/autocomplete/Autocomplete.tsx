import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { AppState } from 'store'
import AutocompleteItem from './AutocompleteItem'

type Props = {
	linkClick: (e: any) => void
	closeAutocomplete: () => void
	isOpen: boolean
}

const Autocomplete = ({ linkClick, isOpen, closeAutocomplete }: Props) => {
	const search = useSelector((state: AppState) => state.search)
	const navigate = useNavigate()

	const viewMoreClick = () => {
		navigate('/books/search')
		closeAutocomplete()
	}

	const autocompleteRef = useRef<HTMLDivElement>(null)
	useEffect(() => {
		if (!isOpen) return

		const handleClick = (e: any) => {
			if (!autocompleteRef.current) return
			if (!autocompleteRef.current.contains(e.target)) {
				if (e.target.className !== 'search__input') {
					closeAutocomplete()
				}
			}
		}

		// document.addEventListener('click', handleClick)
		setTimeout(() => document.addEventListener('click', handleClick), 0)

		return () => {
			document.removeEventListener('click', handleClick)
		}
	}, [isOpen, closeAutocomplete])


	if (!isOpen) return null

	const autocompleteClassName = (+search.total >= 1)
		? 'search__autocomplete autocomplete'
		: 'search__autocomplete autocomplete without-border '
	return (
		<div ref={autocompleteRef} className={autocompleteClassName}>
			{search.books.length !== 0 &&
				<ul className='autocomplete__items'>
					{
						search.books.map(item => (
							<AutocompleteItem
								key={item.isbn13}
								book={item}
								clickHandler={linkClick}

							/>
						))
					}
					<Link
						className='autocomplete__item autocomplete__item--all'
						to='/books/search'
						onClick={viewMoreClick}
					>
						View All Results
					</Link>
				</ul>
			}
		</div>
	)
}

export default Autocomplete