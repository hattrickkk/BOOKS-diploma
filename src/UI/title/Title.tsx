import React from 'react'
import './title.scss'

type PropsType = {
	text: string
	className: string
}

const Title = ({ className, text }: PropsType) => {
	return (
		<h2 className={`${className}__title title`}>
			{text}
		</h2>
	)
}

export default Title