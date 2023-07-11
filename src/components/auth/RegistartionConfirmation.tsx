import TextField from '../textField/TextField'
import Button from '../../UI/button/Button'
import React, { ChangeEvent, useCallback, useState } from 'react'

import { useLocation, useNavigate } from 'react-router-dom'



const RegistartionConfirmation = () => {

	const location = useLocation()
	const navigate = useNavigate()

	const goToHomeClick = useCallback(() => {
		navigate('/', { replace: true })
	}, [])

	const [inputText, setInputText] = useState('')
	const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setInputText(e.target.value)
		console.log(inputText)
	}
	const activateClick = () => {
		const [uid, token] = inputText.split('/')
		console.log(uid)
		navigate(`/auth/activate/${uid}/${token}`, { replace: true })
	}

	return (
		<div className='reg-confirmation'>
			<p className='reg-confirmation__text'>
				Please activate your account with the activation
				link in the email <span>{location.state}</span>. Please, check your email
			</p>
			<div className='reg-confirmation__activation-block'>
				<TextField label='Link' placeholder='Your Link' name='link' onChangeHandler={inputChange} />
				<Button
					text='Activate'
					className='reg-confirmation__activation-block-button'
					clickHandler={activateClick}
				/>
			</div>
			<Button
				text='Go to home'
				className='reg-confirmation'
				clickHandler={goToHomeClick}
			/>
		</div>
	)
}

export default RegistartionConfirmation