import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './footer/Footer'

const Layout = () => {
	return (
		<div className="main">
			<header className="header">header</header>
			<div className='outlet'>
				<Outlet />
			</div>
			<Footer />
		</div>
	)
}

export default Layout