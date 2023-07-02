import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
	return (
		<div className="main">
			<header className="header">header</header>
			<div className='outlet'>
				<Outlet />
			</div>
			<footer className='footer'>footer</footer>
		</div>
	)
}

export default Layout