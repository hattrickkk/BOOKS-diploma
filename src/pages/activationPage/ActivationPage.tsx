import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppDispatch, AppState } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { activationAction } from '../../store/activation/actions'
import ErrorLabel from '../../UI/errorLabel/ErrorLabel'
import BackHome from '../../UI/backHome/BackHome'
import Title from '../../UI/title/Title'

import './activationPage.scss'
import Button from '../../UI/button/Button'

const ActivationPage = () => {

	const { uid, token } = useParams()
	const dispatch = useDispatch<AppDispatch>()
	const navigate = useNavigate()

	useEffect(() => {
		const navFunc = () => {
			navigate('/auth/success')
		}
		if (uid && token) {
			dispatch(activationAction(uid, token, navFunc))
		}

	}, [uid, token])


	const errors = useSelector((state: AppState) => state.activation.errors)
	const activationErrors = errors ? Object.values(errors) : undefined

	return (
		<div className='activation-page'>
			<div className='container'>
				<BackHome />
				<Title text='Account activation' className='activation-page' />
				<div className="activation">
					<div className='activation__text'>
						There is some errors:
						{activationErrors && (<ErrorLabel text={activationErrors as (string | string[])} />)}
					</div>
					<Button
						text={'Go Home'}
						className='activation'
						clickHandler={() => { navigate('/') }}
					/>
				</div>
			</div>
		</div>
	)
}

export default ActivationPage