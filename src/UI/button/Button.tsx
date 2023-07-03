import React from 'react'
import './button.scss'

type PropsType = {
	text: string
	type: 'submit' | 'button'
	clickHandler: () => void
	className?: string
}
const Button = ({ text, type, clickHandler, className }: PropsType) => {
	return (
		<button
			type={type}
			onClick={clickHandler}
			className={className ? `button button-${className}` : 'button'}
		>{text}</button>
	)
}

export default Button