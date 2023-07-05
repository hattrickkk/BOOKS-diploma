import Star from '../../UI/Star'
import React from 'react'

import './rating.scss'

type Props = {
	starsCount: string
	className: string
}

const Rating = ({ className, starsCount }: Props) => {
	return (
		<div
			className={`${className}__rating rating rate${starsCount}`}
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