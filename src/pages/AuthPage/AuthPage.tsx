import AuthComponent from '../../components/auth/authComponent/AuthComponent'
import React from 'react'
import './authPage.scss'

const AuthPage = () => {
	return (
		<div className='auth-page'>
			<div className="container">
				<AuthComponent className='auth-page' />
			</div>
		</div>
	)
}

export default AuthPage