import React from 'react'
import './input.scss'
type PropsType = {
	type: string
	placeholder: string
}

const Input = ({ placeholder, type }: PropsType) => {
	return (
		<input
			placeholder={placeholder}
			type={type ? type : 'text'}
			className='input'
		/>
	)
}

export default Input