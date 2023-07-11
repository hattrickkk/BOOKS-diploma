import React, { useCallback, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import AuthTabs from './authTabs/AuthTabs'
type Props = {
	className: string
}

const AuthComponent = ({ className }: Props) => {

	return (
		<div className='auth'>
			<AuthTabs />
		</div>
	)
}

export default AuthComponent