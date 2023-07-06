import Logo from '../../UI/logo/Logo'
import React, { useState } from 'react'
import './header.scss'
import HeaderIcons from './headerIcons/HeaderIcons'
import HeaderButtons from './HeaderButtons'
import HeaderInfo from './HeaderInfo'

const Header = () => {
	const [isOpen, setIsOpen] = useState(false)

	const burgerBtnClick = () => {
		setIsOpen(prev => !prev)
		console.log(isOpen)
	}

	return (
		<div className='header'>
			<div className="container">
				<div className="header__inner">
					<Logo className='header' />
					<p>search</p>
					<HeaderInfo cb={burgerBtnClick} />



					<div
						className={isOpen ? "header__menu menu active" : "header__menu menu"}
					>
						<li>d</li>
						<li>wd</li>
					</div>
				</div>

			</div>
		</div>
	)
}

export default Header