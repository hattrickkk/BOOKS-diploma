import Star from '../UI/Star'
import React from 'react'

const Rating = ({ className }: { className: string }) => {
	return (
		<div
			className={`book__rating rate${className}`}
		>
			<Star />
			<Star />
			<Star />
			<Star />
			<Star />
		</div>
	)
}

export default Rating