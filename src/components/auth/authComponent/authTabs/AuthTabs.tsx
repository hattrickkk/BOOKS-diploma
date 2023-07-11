import React, { useCallback, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import SignIn from './SignIn'
import SignUp from './SignUp'


const AuthTabs = () => {
	const location = useLocation()
	const [openedIndex, setOpenedIndex] = useState<number>(0)

	const titleClickHnadler = useCallback((index: number) => {
		setOpenedIndex(index)
	}, [])

	useEffect(() => {
		setOpenedIndex(+location.state)
	}, [location])

	return (
		<div
			className={'auth__tabs tabs'}
		>
			<div className="tabs__titles">
				<div
					className={openedIndex === 0 ? "tabs__title active" : "tabs__title"}
					onClick={() => { titleClickHnadler(0) }}
				>
					SIGN IN
				</div>
				<div
					className={openedIndex === 1 ? "tabs__title active" : "tabs__title"}
					onClick={() => { titleClickHnadler(1) }}
				>
					SIGN UP
				</div>
			</div>

			<div className="tabs__contents">
				<div
					className={openedIndex === 0 ? "tabs__content active" : "tabs__content"}
				>
					<SignIn />
				</div>
				<div
					className={openedIndex === 1 ? "tabs__content active" : "tabs__content"}
				>
					<SignUp />
				</div>
			</div>
		</div>
	)
}

export default AuthTabs