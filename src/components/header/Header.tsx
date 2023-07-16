import Logo from '../../UI/logo/Logo'
import React, { useState } from 'react'
import './header.scss'
import HeaderInfo from './HeaderInfo'
import SearchBlock from '../searchBlock/SearchBlock'
import { useSelector } from 'react-redux'
import { AppState } from 'store'
import HeaderMenu from './HeaderMenu'

const Header = () => {
	const isOpen = useSelector((state: AppState) => state.headerMenu.isOpen)

	return (
		<div className='header'>
			<div className='header__wrapper'>
				<div className="container">
					<div className="header__inner">
						<Logo className='header' />
						<SearchBlock className={'header'} />
						<HeaderInfo />
					</div>
				</div>
			</div>
			<HeaderMenu />
		</div>
	)
}

export default Header