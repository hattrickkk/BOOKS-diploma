import React from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../../store'
import CartItem from '../../components/cartItem/CartItem'


const Cart = () => {
	const cart = useSelector((state: AppState) => state.cart.list)
	return (
		<div className='сart__items'>
			{cart.map(item => (
				<CartItem
					key={item.isbn13}
					isbn13={item.isbn13}
					totalPrice={item.totalPrice as string}
					title={item.title}
					author={item.authors}
					count={item.count}
					imageSource={item.image}
				/>
			))}
		</div>
	)
}

export default Cart