import React from 'react'

const Minus = ({ clickHandler }: { clickHandler: () => void }) => {
	return (
		<div
			className="minus"
			onClick={clickHandler}
		>
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
				<rect x="6" y="11" width="12" height="2" rx="1" fill="#313037" />
			</svg>
		</div>
	)
}

export default Minus