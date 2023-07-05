import React, { useState } from 'react'
import './moreInfo.scss'

const MoreInfo = () => {
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
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi optio, molestias obcaecati blanditiis id distinctio porro eos?
				Dicta sunt fugit nobis temporibus debitis dignissimos accusamus recusandae laborum, voluptate tenetur consequatur a eveniet!
				Distinctio fugit vitae beatae, ab neque animi ut.
			</div>
		</div >
	)
}

export default MoreInfo