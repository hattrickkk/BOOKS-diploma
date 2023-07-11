import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import TextField from '../../../textField/TextField'
import { useNavigate } from 'react-router-dom'
import { ValidationError } from 'fastest-validator'
import FastestValidator from "fastest-validator"
import { FormErrorsType, FormType } from '../../../../models'
import { useDispatch } from 'react-redux'
import { AppDispatch, AppState } from '../../../../store'
import { useSelector } from 'react-redux'
import Button from '../../../../UI/button/Button'
import ErrorLabel from '../../../../UI/errorLabel/ErrorLabel'
import { getSignUpValidationObj } from '../../../../helpers/getSignUpValidationObj'
import { registrationAction } from '../../../../store/registration/actions'

const SignUp = () => {
	const v = new FastestValidator();
	const check = v.compile({
		username: 'string',
		email: 'string',
		password: 'string',
		confirmPassword: 'string'
	})

	const navigate = useNavigate()
	const dispatch = useDispatch<AppDispatch>()
	const errors = useSelector((state: AppState) => state.registration.errors)

	useEffect(() => {
		if (errors) {
			setFormErrors(errors)
		}
	}, [errors])

	const [form, setForm] = useState<FormType>({
		username: '',
		email: '',
		password: '',
		cconfirmPassword: ''
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
		const { username, email, password, confirmPassword } = form
		const validationObject = getSignUpValidationObj(username as string, email, password, confirmPassword as string)
		const checkResult = check(validationObject)

		if (checkResult === true) {

			if (password && confirmPassword && (password !== confirmPassword)) {
				setFormErrors({
					...formErrors,
					confirmPassword: 'The entered passwords do not match.',
					password: 'The entered passwords do not match.'
				})
			}

			if (username && email && password && (password === confirmPassword)) {
				const regSuccessFunc = () => navigate('/auth/registration-confirmation', {
					replace: true,
					state: email
				})
				dispatch(registrationAction(username, email, password, regSuccessFunc))
			}
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
						error={formErrors.username ? true : false}
						label='Name'
						placeholder='Your name'
						name='username'
						onChangeHandler={inputChangeHnadler}
					/>
					{
						formErrors.username &&
						<ErrorLabel text={formErrors.username} />
					}

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

					<TextField
						error={formErrors.confirmPassword ? true : false}
						label='Confirm password'
						placeholder='Confirm password'
						name='confirmPassword'
						type='password'
						onChangeHandler={inputChangeHnadler}
					/>
					{
						formErrors.confirmPassword &&
						<ErrorLabel text={formErrors.confirmPassword} />
					}
				</div>
				<Button text='Sign Up' className='sign-up' type='submit' />
			</form>
		</div>
	)
}

export default SignUp