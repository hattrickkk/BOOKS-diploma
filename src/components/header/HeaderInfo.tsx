import React from 'react'
import HeaderIcons from './headerIcons/HeaderIcons'
import HeaderButtons from './HeaderButtons'

type Props = {
	cb: () => void
}
const HeaderInfo = ({ cb }: Props) => {
	return (
		<div className="header__info">
			{false && <HeaderIcons />}
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