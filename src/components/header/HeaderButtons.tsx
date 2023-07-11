import { useNavigate } from 'react-router-dom'
import Button from '../../UI/button/Button'
import React from 'react'

const HeaderButtons = () => {

	const navigate = useNavigate()

	return (
		<div className="header__buttons">
			{false &&
				<Button
					category={'secondary'}
					text='Log Out'
					clickHandler={() => { }}
					className='header'
				/>
			}

			{true &&
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