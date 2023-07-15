import Pagination from '../../components/pagination/Pagination'
import SearchResults from '../../components/searchResults/SearchResults'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../store'
import { useNavigate, useParams } from 'react-router-dom'
import NotFound from '../../UI/notFoundImg/NotFound'
import './searchPage.scss'


const SearchPage = () => {
	const search = useSelector((state: AppState) => state.search)

	const { searchPageNumber } = useParams()
	const [curPage, setCurPage] = useState(searchPageNumber ? +searchPageNumber : 1)

	useEffect(() => {
		setCurPage(searchPageNumber ? +searchPageNumber : 1)
	}, [searchPageNumber])

	if (search.books.length === 0) {
		return (
			<div className="search-page">
				<div className="container">
					<NotFound />
				</div>
			</div>
		)
	}

	return (
		<div className="search-page">
			<div className="container">
				<div className="books">
					<SearchResults />
				</div>
				<Pagination
					currentPage={curPage}
					total={+search.total}
					itemPerPage={10}
					className='search'
					endoint='books/search'
				/>
			</div>
		</div>
	)
}

export default SearchPage