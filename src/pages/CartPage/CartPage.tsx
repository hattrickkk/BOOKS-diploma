import React from 'react'
import Title from '../../UI/title/Title'
import BackHome from '../../UI/backHome/BackHome'
import { useSelector } from 'react-redux'
import { AppState } from 'store'
import NotFound from '../../UI/notFoundImg/NotFound'
import Cart from '../../components/cart/Cart'
import './cartPage.scss'

const CartPage = () => {
	const cart = useSelector((state: AppState) => state.cart.list)
	return (
		<div className="cart-page">
			<div className="container">
				<BackHome />
				<Title className="cart-page" text='Cart' />
				<Cart />
				{
					(cart.length === 0) && <NotFound />
				}

			</div>

		</div>
	)
}

export default CartPage