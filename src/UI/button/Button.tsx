import React from 'react'
import './button.scss'

type PropsType = {
	text: string
	type?: 'submit' | 'button' | 'reset'
	clickHandler: () => void
	className?: string
	category?: 'secondary' | 'primary' | 'secondary2'
}
const Button = ({ text, type, clickHandler, className, category }: PropsType) => {

	const classNames = [className ? `button ${className}__button` : 'button']
	if (category) {
		classNames.push(category)
	}
	return (
		<button
			type={type ? type : 'button'}
			onClick={clickHandler}
			className={classNames.join(' ')}
		>{text}</button>
	)
}

export default Button