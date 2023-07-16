import React from 'react'
import HeaderIcons from './headerIcons/HeaderIcons'
import HeaderButtons from './HeaderButtons'
import { useDispatch, useSelector } from 'react-redux'
import { authSelector } from '../../store/auth/selectors'
import { AppState } from 'store'
import { closeMenu, openMenu } from '../../store/headerMenu/actions'


const HeaderInfo = () => {
	const isAuth = useSelector(authSelector).isAuth
	const isOpen = useSelector((state: AppState) => state.headerMenu.isOpen)
	const dispatch = useDispatch()

	return (
		<div className="header__info">
			{isAuth && <HeaderIcons />}
			<HeaderButtons />

			<div
				className={isOpen ? 'header__burger-button open' : 'header__burger-button'}
				onClick={() => { dispatch(isOpen ? closeMenu() : openMenu()) }}
			>
				<span></span>
			</div>
		</div >
	)
}

export default HeaderInfo