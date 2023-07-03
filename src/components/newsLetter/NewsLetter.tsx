import Input from '../../UI/input/Input'
import Button from '../../UI/button/Button'
import React from 'react'
import './newsLetter.scss'

const NewsLetter = () => {
	return (
		<div className='news-letter'>
			<div className="news-letter__inner">
				<div className="news-letter__text">
					<h3 className="news-letter__title">Subscribe to Newsletter</h3>
					<p className="news-letter__label">
						Be the first to know about new IT books, upcoming releases, exclusive offers and more.
					</p>
				</div>
				<div className="news-letter__subscribe-block">
					<form action="">
						<div className="news-letter__subscribe-block-wrapper">
							<Input
								placeholder='Your email'
								type='email'
							/>
							<Button
								type='submit'
								text='Subcribe'
								className='news-letter'
								clickHandler={() => { }}
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default NewsLetter