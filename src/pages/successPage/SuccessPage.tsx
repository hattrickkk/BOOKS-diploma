import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../../UI/button/Button'
import './successPage.scss'
import BackHome from '../../UI/backHome/BackHome'
import Title from '../../UI/title/Title'

const SuccessPage = () => {
	const navigate = useNavigate()

	const goToHomeClick = useCallback(() => {
		navigate('/', { replace: true })
	}, [])

	return (
		<div className="success-page">
			<div className="container">
				<BackHome />
				<Title className='success-page' text='Success' />
				<div className='success'>
					<p className='success__text text'>
						Email confirmed.
						Your registration is now completed
					</p>

					<Button
						text='Go to home'
						className='success'
						clickHandler={goToHomeClick}
					/>
				</div>
			</div>
		</div>
	)
}

export default SuccessPage