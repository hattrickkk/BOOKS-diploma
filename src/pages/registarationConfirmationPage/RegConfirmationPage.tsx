import React from 'react'
import RegistartionConfirmation from '../../components/auth/RegistartionConfirmation'
import './regConfirmationPage.scss'
import BackHome from '../../UI/backHome/BackHome'
import Title from '../../UI/title/Title'

const RegConfirmationPage = () => {
	return (
		<div className='reg-confirmation-page'>
			<div className="container">
				<BackHome />
				<Title className='reg-confirmation-page' text='Registration Confirmation' />
				<RegistartionConfirmation />
			</div>
		</div>
	)
}

export default RegConfirmationPage
