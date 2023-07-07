import React from 'react'
import { useNavigate } from 'react-router-dom'
import './backHome.scss'

const BackHome = () => {
	const navigate = useNavigate()
	return (
		<div
			className="back-home"
			onClick={() => { navigate('/') }}>
			<svg xmlns="http://www.w3.org/2000/svg" width="45" height="24" viewBox="0 0 45 24" fill="none">
				<rect width="24" height="24" fill="white" />
				<path fill-rule="evenodd" clip-rule="evenodd" d="M11.0009 5.99897C11.0009 6.25897 10.9009 6.50897 10.7109 6.70897L6.41092 10.999L44.0009 10.999C44.5509 10.999 45.0009 11.449 45.0009 11.999C45.0009 12.549 44.5509 12.999 44.0009 12.999L6.41092 12.999L10.7109 17.289C11.1009 17.679 11.1009 18.319 10.7109 18.709C10.3209 19.099 9.68092 19.099 9.29092 18.709L3.29092 12.709C3.20092 12.619 3.13092 12.509 3.08092 12.389C3.06092 12.339 3.04092 12.299 3.04092 12.249C2.99092 12.089 2.99092 11.909 3.04092 11.749C3.04092 11.699 3.06092 11.659 3.08092 11.609C3.13092 11.489 3.20092 11.379 3.29092 11.289L9.29092 5.28897C9.68092 4.89896 10.3209 4.89896 10.7109 5.28897C10.9009 5.48897 11.0009 5.73897 11.0009 5.99897Z" fill="#313037" />
			</svg>
		</div>
	)
}

export default BackHome