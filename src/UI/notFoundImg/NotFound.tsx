import React from 'react'
import './notFoundImage.scss'
import notfoundImage from '../../assets/notFound.png'

const NotFound = () => {
	return (
		<img className='not-found-image' src={notfoundImage} alt='notFoungImage' />
	)
}

export default NotFound