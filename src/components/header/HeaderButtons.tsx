import Button from '../../UI/button/Button'
import React from 'react'

const HeaderButtons = () => {
	return (
		<div className="header__buttons">

			{true &&
				<Button
					category={'secondary'}
					text='Log Out'
					clickHandler={() => { }}
					className='header'
				/>
			}

			{false &&
				<div className="header__buttons-not-auth">
					<Button
						category={'secondary2'}
						text='Log In'
						clickHandler={() => { }}
						className='header'
					/>
					<Button
						category={'secondary'}
						text='Sign Up'
						clickHandler={() => { }}
						className='header'
					/>
				</div>
			}

		</div>
	)
}

export default HeaderButtons