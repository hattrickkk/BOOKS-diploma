import React from 'react'
import './socials.scss'

const Socials = ({ className }: { className: string }) => {
	return (
		<div
			className={`${className}__socials socials`}
		>
			<div className="socials__item">
				<a className='socials__link' href="#">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g id="facebook">
							<path id="Vector" d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="#313037" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						</g>
					</svg>
				</a>
			</div>
			<div className="socials__item">
				<a className='socials__link' href="#">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g id="twitter">
							<path id="Vector" d="M23 2.9998C22.0424 3.67528 20.9821 4.19191 19.86 4.5298C19.2577 3.83731 18.4573 3.34649 17.567 3.12373C16.6767 2.90096 15.7395 2.957 14.8821 3.28426C14.0247 3.61151 13.2884 4.1942 12.773 4.95352C12.2575 5.71283 11.9877 6.61214 12 7.5298V8.5298C10.2426 8.57537 8.50127 8.18561 6.93101 7.39525C5.36074 6.60488 4.01032 5.43844 3 3.9998C3 3.9998 -1 12.9998 8 16.9998C5.94053 18.3978 3.48716 19.0987 1 18.9998C10 23.9998 21 18.9998 21 7.4998C20.9991 7.22126 20.9723 6.9434 20.92 6.6698C21.9406 5.6633 22.6608 4.39251 23 2.9998V2.9998Z" stroke="#313037" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						</g>
					</svg>
				</a>
			</div>
			<div className="socials__item">
				<a className='socials__link' href="#">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g id="more-horizontal">
							<path id="Vector" d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#313037" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
							<path id="Vector_2" d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z" stroke="#313037" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
							<path id="Vector_3" d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z" stroke="#313037" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						</g>
					</svg>
				</a>
			</div>
		</div>
	)
}

export default Socials