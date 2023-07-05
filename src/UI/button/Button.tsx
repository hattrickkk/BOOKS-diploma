import React from 'react'
import './button.scss'

type PropsType = {
	text: string
	type?: 'submit' | 'button' | 'reset'
	clickHandler: () => void
	className?: string
}
const Button = ({ text, type, clickHandler, className }: PropsType) => {
	return (
		<button
			type={type ? type : 'button'}
			onClick={clickHandler}
			className={className ? `button ${className}__button` : 'button'}
		>{text}</button>
	)
}

export default Button