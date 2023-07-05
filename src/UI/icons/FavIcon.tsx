import React from 'react'
type Props = {
	clickHandler?: () => {}
	className?: string
	isLiked: boolean
}

const FavIcon = ({ className, isLiked, clickHandler }: Props) => {
	const classNames = [className ? `${className}__favIcon` : `favIcon`]
	if (isLiked) {
		classNames.push('liked')
	}
	return (
		<div
			className={classNames.join(' ')}
			onClick={clickHandler}
		>
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g id="heart 1">
					<path id="Vector" d="M19.612 5.41452C19.1722 4.96607 18.65 4.61034 18.0752 4.36763C17.5005 4.12492 16.8844 4 16.2623 4C15.6401 4 15.0241 4.12492 14.4493 4.36763C13.8746 4.61034 13.3524 4.96607 12.9126 5.41452L11.9998 6.34476L11.087 5.41452C10.1986 4.50912 8.99364 4.00047 7.73725 4.00047C6.48085 4.00047 5.27591 4.50912 4.38751 5.41452C3.4991 6.31992 3 7.5479 3 8.82833C3 10.1088 3.4991 11.3367 4.38751 12.2421L5.30029 13.1724L11.9998 20L18.6992 13.1724L19.612 12.2421C20.0521 11.7939 20.4011 11.2617 20.6393 10.676C20.8774 10.0902 21 9.46237 21 8.82833C21 8.19428 20.8774 7.56645 20.6393 6.9807C20.4011 6.39494 20.0521 5.86275 19.612 5.41452V5.41452Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
				</g>
			</svg>
		</div>
	)
}

export default FavIcon