import React, { ChangeEvent, useDebugValue, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from 'store'
import { loadSearch } from '../../store/search/actions'
import './search.scss'
import Autocomplete from './autocomplete/Autocomplete'
import SearchInput from './SearchInput'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

type Props = {
	className: string
}


const SearchBlock = ({ className }: Props) => {
	const { searchPageNumber } = useParams()

	const [text, setText] = useState('')
	const [isOpen, setIsOpen] = useState(false)
	const [curPage, setCurPage] = useState(searchPageNumber ? +searchPageNumber : 1)

	const dispatch = useDispatch<AppDispatch>()
	const location = useLocation()
	const navigate = useNavigate()

	useEffect(() => {
		setCurPage(searchPageNumber ? +searchPageNumber : 1)
	}, [searchPageNumber])

	useEffect(() => {
		dispatch(loadSearch(text, curPage))
	}, [text, curPage])

	useEffect(() => {
		if (location.pathname.includes('/books/search')) {
			navigate('/books/search')
		}
	}, [])


	const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setText(e.target.value)
	}

	const autoCompleteItemClick = (e: any) => {
		setText(e.target.textContent)
		setIsOpen(false)
	}

	const openAutoCompelte = () => {
		setIsOpen(true)
	}

	const closeAutocomplete = () => {
		setIsOpen(false)
	}

	return (
		<div className={`${className}__search search`}>
			<div className='search__inner'>
				<SearchInput
					changeHandler={inputChange}
					text={text}
					openAutoCompelte={openAutoCompelte}
				/>
				<div className="search__icon">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
						<path fillRule="evenodd" clipRule="evenodd" d="M4 10.5C4 6.92 6.92 4 10.5 4C14.08 4 17 6.92 17 10.5C17 12.29 16.27 13.92 15.09 15.09C13.92 16.27 12.29 17 10.5 17C6.92 17 4 14.08 4 10.5ZM21.71 20.29L17.18 15.76C18.32 14.31 19 12.48 19 10.5C19 5.81 15.19 2 10.5 2C5.81 2 2 5.81 2 10.5C2 15.19 5.81 19 10.5 19C12.48 19 14.31 18.32 15.76 17.18L20.29 21.71C20.49 21.9 20.74 22 21 22C21.26 22 21.51 21.9 21.71 21.71C22.1 21.32 22.1 20.68 21.71 20.29Z" fill="#313037" />
					</svg>
				</div>
			</div>

			<Autocomplete
				isOpen={isOpen}
				linkClick={autoCompleteItemClick}
				closeAutocomplete={closeAutocomplete}
			/>
		</div>
	)
}

export default SearchBlock