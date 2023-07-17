import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import TextField from '../../../textField/TextField'
import { Link, useNavigate } from 'react-router-dom'

import { ValidationError } from 'fastest-validator'
import FastestValidator from "fastest-validator"

import { FormErrorsType } from '../../../../models'
import { useDispatch } from 'react-redux'
import { AppDispatch, AppState } from '../../../../store'
import { useSelector } from 'react-redux'
import Button from '../../../../UI/button/Button'
import { getSignInValidationObj } from '../../../../helpers/getSignInValidationObj'
import ErrorLabel from '../../../../UI/errorLabel/ErrorLabel'
import { authAction, clearAuthStoreAction } from '../../../../store/auth/actions'

type FormType = {
	email: string
	password: string
}
const SignIn = () => {
	const v = new FastestValidator();
	const check = v.compile({
		email: "string",
		password: "string",
	})

	const dispatch = useDispatch<AppDispatch>()
	const navigate = useNavigate()
	const errorsFromAuth = useSelector((state: AppState) => state.auth.errors)

	useEffect(() => {
		dispatch(clearAuthStoreAction())
	}, [])


	useEffect(() => {
		if (errorsFromAuth) {
			setFormErrors({
				...formErrors,
				password: Object.values(errorsFromAuth).join(' ')
			})
		}
	}, [errorsFromAuth])


	const [form, setForm] = useState<FormType>({
		email: '',
		password: ''
	} as FormType)
	const [formErrors, setFormErrors] = useState<FormErrorsType>({})


	const inputChangeHnadler = (e: ChangeEvent<HTMLInputElement>) => {
		setForm({
			...form,
			[e.target.name]: e.target.value
		})
	}

	const onFormSubmit = (e: FormEvent) => {
		e.preventDefault()
		setFormErrors({})
		const { email, password } = form

		const validationObject = getSignInValidationObj(email, password)
		const checkResult = check(validationObject)

		if (checkResult === true) {
			dispatch(authAction(email, password, () => navigate('/', { replace: true })))
		}
		else {
			const errors = checkResult as ValidationError[]
			setFormErrors(errors.reduce((total, item) => {
				total[item.field] = item.message
				return total
			}, {} as any) as FormErrorsType)
		}
	}


	return (
		<div className='sign-in'>
			<form action="" onSubmit={onFormSubmit}>
				<div className='sign-in__fields fields'>
					<TextField
						error={formErrors.email ? true : false}
						label='Email'
						placeholder='Your email'
						name='email'
						type='email'
						onChangeHandler={inputChangeHnadler}
					/>
					{
						formErrors.email &&
						<ErrorLabel text={formErrors.email} />
					}

					<TextField
						error={formErrors.password ? true : false}
						label='Password'
						placeholder='Your password'
						name='password'
						type='password'
						onChangeHandler={inputChangeHnadler}
					/>
					{
						formErrors.password &&
						<ErrorLabel text={formErrors.password} />
					}
				</div>
				<Button text='Sign In' className='sign-in' type='submit' />
			</form>
		</div>
	)
}

export default SignIn