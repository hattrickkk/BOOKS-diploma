import React from 'react'
import './button.scss'

type PropsType = {
	text: string
	type?: 'submit' | 'button' | 'reset'
	clickHandler?: () => void
	className?: string
	category?: 'secondary' | 'primary' | 'secondary2'
	isDisabled?: boolean
}
const Button = ({ text, type, clickHandler, className, category, isDisabled }: PropsType) => {

	const classNames = [className ? `button ${className}__button` : 'button']
	if (category) {
		classNames.push(category)
	}
	if (isDisabled) {
		classNames.push('disabled')
	}

	return (
		<button
			disabled={isDisabled ? true : false}
			type={type ? type : 'button'}
			onClick={clickHandler}
			className={classNames.join(' ')}
		>{text}</button>
	)
}

export default Button