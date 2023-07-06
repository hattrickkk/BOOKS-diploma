import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './footer/Footer'
import Header from './header/Header'

const Layout = () => {
	return (
		<div className="main">
			<Header />
			<div className='outlet'>
				<Outlet />
			</div>
			<Footer />
		</div>
	)
}

export default Layout