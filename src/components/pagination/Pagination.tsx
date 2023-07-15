import React, { useEffect, useState } from 'react'
import PaginationButton from './paginationButton/PaginationButton'
import './Pagination.scss'
import { getPages } from './getNumbers'
import { NavLink, useParams } from 'react-router-dom'

type Props = {
	total: number
	itemPerPage: number
	currentPage: number
	className: string
	endoint?: string
}

const Pagination = ({ total, itemPerPage, currentPage, className, endoint }: Props) => {
	const [pages, setPages] = useState<ReturnType<typeof getPages>>([])
	const { pageNumber } = useParams()

	useEffect(() => {
		setPages(getPages(total, itemPerPage, currentPage))
	}, [total, itemPerPage, currentPage])

	const pageCount = Math.ceil(total / itemPerPage)

	return (
		<div className={`${className}__pagination pagination`}>
			<PaginationButton type='prev' page={pageNumber ? +pageNumber : 1} totalPages={pageCount} />
			<div className="pagination__pages">
				{
					pages.map((item, index) => (
						item === '..'
							? (<span key={index}>{item}</span>)
							: (
								<NavLink
									className={({ isActive }) => (
										isActive
											? 'active'
											: (!pageNumber && index === 0) ? 'active' : ''
									)}
									key={index}
									to={endoint ? `/${endoint}/${item}` : `/${item}`}
								>
									{item}
								</NavLink>
							)
					))
				}
			</div>
			<PaginationButton type='next' page={pageNumber ? +pageNumber : 1} totalPages={pageCount} />
		</div >
	)
}

export default Pagination