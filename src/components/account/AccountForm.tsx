import { useDispatch, useSelector } from 'react-redux'
import Button from '../../UI/button/Button'
import TextField from '../textField/TextField'
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { authSelector } from '../../store/auth/selectors'
import { editAccountInfoAction, getAccountInfoAction } from '../../store/accountInfo/actions'
import { AppDispatch } from 'store'
import { accountSelector } from '../../store/accountInfo/selectors'
import { useNavigate } from 'react-router-dom'
import { FormErrorsType, FormType, TokensType } from 'models'
import { getAccountInfoValidationObj } from '../../helpers/getAccountInfoValidationObj'
import ErrorLabel from '../../UI/errorLabel/ErrorLabel'

import { ValidationError } from 'fastest-validator'
import FastestValidator from "fastest-validator"



const AccountForm = () => {
	const v = new FastestValidator();
	const check = v.compile({
		email: 'string',
		password: 'string',
		username: 'string'
	})

	const authState = useSelector(authSelector)
	const accountState = useSelector(accountSelector)
	const dispatch = useDispatch<AppDispatch>()
	const navigate = useNavigate()

	const [form, setForm] = useState<FormType>({
		username: '',
		email: '',
		password: ''
	} as FormType)

	const [formErrors, setFormErrors] = useState<FormErrorsType>({} as FormErrorsType)
	const [isEditing, setIsEditing] = useState<boolean>(false)

	const getInfo = () => {
		if (authState.tokens?.access) {
			dispatch(getAccountInfoAction(authState.tokens))

			setForm({
				username: accountState.user.username,
				email: accountState.user.email,
				password: authState.password as string
			})
		}
	}

	const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setForm({
			...form,
			[e.target.name]: e.target.value
		})
	}
	useEffect(() => {
		getInfo()
	}, [])

	useEffect(() => {
		if (accountState.errors) {
			setFormErrors({
				username: accountState.errors.username,
				email: accountState.errors.email,
				password: accountState.errors.password,
			})
		}
	}, [accountState.errors])

	const cancelClick = () => {
		setFormErrors({})
		setIsEditing(false)
		getInfo()
	}

	const onFormSubmit = (e: FormEvent) => {
		e.preventDefault()
		setFormErrors({})
		const { email, password, username } = form

		const validationObject = getAccountInfoValidationObj(username as string, email, password)
		const checkResult = check(validationObject)

		if (checkResult === true) {
			dispatch(editAccountInfoAction(authState.tokens as TokensType, username as string, () => { setIsEditing(false) }))
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
		<form action="" onSubmit={onFormSubmit}>
			<div
				className={!isEditing ? 'account__fields disabled' : 'account__fields'}
			>
				<TextField
					name='username'
					placeholder='Your Username'
					label='Username'
					value={form.username}
					onChangeHandler={inputChange}
				/>
				{formErrors.username && <ErrorLabel text={formErrors.username} />}

				<TextField
					name='email'
					type='email'
					placeholder='Your Email'
					label='Email'
					value={form.email}
					onChangeHandler={inputChange}
				/>
				{formErrors.email && <ErrorLabel text={formErrors.email} />}

				<TextField
					name='password'
					type='password'
					placeholder='Your password'
					label='Password'
					value={form.password}
					onChangeHandler={inputChange}
				/>
				{formErrors.password && <ErrorLabel text={formErrors.password} />}
			</div>

			<div className="account__buttons">
				{!isEditing && <Button text='Edit profile' clickHandler={() => setIsEditing(true)} />}
				{isEditing &&
					<>
						<Button
							text='save changes'
							type='submit'
						/>
						<Button
							text='Cancel'
							category='secondary'
							clickHandler={cancelClick}
						/>
					</>
				}
			</div>
		</form>
	)
}

export default AccountForm