import React, { useState } from 'react'
import './moreInfo.scss'

const MoreInfo = ({ pages, isbn10, isbn13 }: { [keys: string]: string }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	return (
		<div className='accordeon'>
			<p
				className={isOpen ? "accordeon__title active" : "accordeon__title"}
				onClick={() => { setIsOpen(prev => !prev) }}
			>
				<span>More Detailes</span>
			</p>
			<div
				className={isOpen ? "accordeon__content visible" : "accordeon__content"}
			>
				<p className='accordeon__text'>
					<span>ISBN10:  </span>
					{isbn10}
				</p>
				<p className='accordeon__text'>
					<span>ISBN13:  </span>
					{isbn13}
				</p>
				<p className='accordeon__text'>
					<span>Pages:  </span>
					{pages}
				</p>
			</div>
		</div >
	)
}

export default MoreInfo