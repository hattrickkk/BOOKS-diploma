import React from 'react'
import './calc.scss'

type Props = {
	className: string
	sum: string
}
const CartCalculator = ({ className, sum }: Props) => {
	const vat = (+sum * 12 / 100).toFixed(2)
	const total = (+vat + +sum).toFixed(2)
	return (
		<div className={`${className}__calc calc`}>
			<div className="calc__inner">
				<div className="calc__row">
					<p className='calc__text'>Sum Total</p>
					<p className="calc__num">{`$${sum}`}</p>
				</div>
				<div className="calc__row">
					<p className='calc__text'>VAT</p>
					<p className="calc__num">{`$${vat}`}</p>
				</div>
				<div className="calc__row">
					<p className='calc__text calc__text--bold'>TOTAL:</p>
					<p className="calc__num calc__num--bold">{`$${total}`}</p>
				</div>
			</div>
		</div>
	)
}

export default CartCalculator