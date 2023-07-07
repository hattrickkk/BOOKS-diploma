
import React from 'react'
import './headerIcons.scss'
import { useSelector } from 'react-redux'
import { AppState } from 'store'
import { useNavigate } from 'react-router-dom'


const HeaderIcons = () => {
	const favposts = useSelector((state: AppState) => state.favBooks.list)
	const navigate = useNavigate()
	return (
		<div className="header__icons icon">
			<div
				className="icon__item"
				onClick={() => { navigate('/books/favorites') }}
			>
				{favposts.length
					? <><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
						<g clipPath="url(#clip0_9780_2991)">
							<path d="M19.612 5.41452C19.1722 4.96607 18.65 4.61034 18.0752 4.36763C17.5005 4.12492 16.8844 4 16.2623 4C15.6401 4 15.0241 4.12492 14.4493 4.36763C13.8746 4.61034 13.3524 4.96607 12.9126 5.41452L11.9998 6.34476L11.087 5.41452C10.1986 4.50912 8.99364 4.00047 7.73725 4.00047C6.48085 4.00047 5.27591 4.50912 4.38751 5.41452C3.4991 6.31992 3 7.5479 3 8.82833C3 10.1088 3.4991 11.3367 4.38751 12.2421L5.30029 13.1724L11.9998 20L18.6992 13.1724L19.612 12.2421C20.0521 11.7939 20.4011 11.2617 20.6393 10.676C20.8774 10.0902 21 9.46237 21 8.82833C21 8.19428 20.8774 7.56645 20.6393 6.9807C20.4011 6.39494 20.0521 5.86275 19.612 5.41452V5.41452Z" stroke="#313037" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
							<circle cx="20" cy="4" r="5" fill="#FC857F" stroke="white" strokeWidth="2" />
						</g>
						<defs>
							<clipPath id="clip0_9780_2991">
								<rect width="24" height="24" fill="white" />
							</clipPath>
						</defs>
					</svg>
						<p>{favposts.length}</p>
					</>
					: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
						<path d="M19.612 5.41452C19.1722 4.96607 18.65 4.61034 18.0752 4.36763C17.5005 4.12492 16.8844 4 16.2623 4C15.6401 4 15.0241 4.12492 14.4493 4.36763C13.8746 4.61034 13.3524 4.96607 12.9126 5.41452L11.9998 6.34476L11.087 5.41452C10.1986 4.50912 8.99364 4.00047 7.73725 4.00047C6.48085 4.00047 5.27591 4.50912 4.38751 5.41452C3.4991 6.31992 3 7.5479 3 8.82833C3 10.1088 3.4991 11.3367 4.38751 12.2421L5.30029 13.1724L11.9998 20L18.6992 13.1724L19.612 12.2421C20.0521 11.7939 20.4011 11.2617 20.6393 10.676C20.8774 10.0902 21 9.46237 21 8.82833C21 8.19428 20.8774 7.56645 20.6393 6.9807C20.4011 6.39494 20.0521 5.86275 19.612 5.41452V5.41452Z" stroke="#313037" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
				}

			</div>
			<div className="icon__item">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
					<path d="M5.1 3L3 19.3929C3 19.8191 3.15979 20.2279 3.44422 20.5293C3.72865 20.8307 4.11442 21 4.51667 21H19.4833C19.8856 21 20.2713 20.8307 20.5558 20.5293C20.8402 20.2279 21 19.8191 21 19.3929L18.9 3H5.1Z" stroke="#313037" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
					<path d="M15 9C15 9.53043 14.6839 10.0391 14.1213 10.4142C13.5587 10.7893 12.7956 11 12 11C11.2044 11 10.4413 10.7893 9.87868 10.4142C9.31607 10.0391 9 9.53043 9 9" stroke="#313037" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
				</svg>
			</div>
			<div className="icon__item">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
					<path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#313037" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
					<path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#313037" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
				</svg>
			</div>
		</div>
	)
}

export default HeaderIcons