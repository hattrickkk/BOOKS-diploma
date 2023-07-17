import Button from '../../UI/button/Button'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { AppState } from 'store'
import { clearAuthStoreAction } from '../../store/auth/actions'
import { closeMenu } from '../../store/headerMenu/actions'

const HeaderMenu = () => {
	const isOpen = useSelector((state: AppState) => state.headerMenu.isOpen)
	const isAuth = useSelector((state: AppState) => state.auth.isAuth)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const logOutClick = () => {
		dispatch(clearAuthStoreAction())
		dispatch(closeMenu())
		navigate('/')
	}
	const signInClick = () => {
		dispatch(clearAuthStoreAction())
		dispatch(closeMenu())
		if (location.pathname !== '/auth') {
			navigate('/auth', { state: 0 })
		}
	}
	const signUpClick = () => {
		dispatch(clearAuthStoreAction())
		dispatch(closeMenu())
		if (location.pathname !== '/auth') {
			navigate('/auth', { state: 1 })
		}
	}

	return (
		<nav
			className={isOpen ? "header__menu menu active" : "header__menu menu"}
		>
			<div className="menu__inner">
				{isAuth &&
					<div className="menu__links">
						<Link
							to={'/books/cart'}
							className='menu__link'
							onClick={() => dispatch(closeMenu())}
						>
							Cart
						</Link>
						<Link
							className='menu__link'
							to={'/books/favorites'}
							onClick={() => dispatch(closeMenu())}
						>
							Favorites
						</Link>
						<Link
							className='menu__link'
							to={'/auth/account'}
							onClick={() => dispatch(closeMenu())}
						>
							Account
						</Link>
					</div>
				}


				<div className="menu__buttons">
					{isAuth && <Button text='Log out' clickHandler={logOutClick} />}

					{!isAuth &&
						<>
							<Button
								text='Sign In'
								clickHandler={signInClick}
							/>
							<Button
								text='Sign Up'
								clickHandler={signUpClick}
							/>
						</>
					}
				</div>
			</div>
		</nav>
	)
}

export default HeaderMenu