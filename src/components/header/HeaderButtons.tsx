import { useNavigate } from 'react-router-dom'
import Button from '../../UI/button/Button'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authSelector } from '../../store/auth/selectors'
import { clearAuthStoreAction } from '../../store/auth/actions'

const HeaderButtons = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const isAuth = useSelector(authSelector).isAuth

	return (
		<div className="header__buttons">
			{isAuth &&
				<Button
					category={'secondary'}
					text='Log Out'
					clickHandler={() => { dispatch(clearAuthStoreAction()) }}
					className='header'
				/>
			}

			{!isAuth &&
				<div className="header__buttons-not-auth">
					<Button
						category={'secondary2'}
						text='Sign In'
						clickHandler={() => { navigate('/auth', { state: 0 }) }}
						className='header'
					/>
					<Button
						category={'secondary'}
						text='Sign Up'
						clickHandler={() => { navigate('/auth', { state: 1 }) }}
						className='header'
					/>
				</div>
			}

		</div>
	)
}

export default HeaderButtons