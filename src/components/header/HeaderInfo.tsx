import React from 'react'
import HeaderIcons from './headerIcons/HeaderIcons'
import HeaderButtons from './HeaderButtons'
import { useSelector } from 'react-redux'
import { authSelector } from '../../store/auth/selectors'

type Props = {
	cb: () => void
}
const HeaderInfo = ({ cb }: Props) => {
	const isAuth = useSelector(authSelector).isAuth
	return (
		<div className="header__info">
			{isAuth && <HeaderIcons />}
			<HeaderButtons />

			<div
				className="header__burger-button"
				onClick={cb}
			>
				X
			</div>
		</div>
	)
}

export default HeaderInfo