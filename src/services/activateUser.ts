import { ActivationType, ErrorMessageType } from "../models"

type ActivationResponseType = {
	ok: boolean
	status: number
	data?: ErrorMessageType
}

export const activateUser = async (uid: string, token: string): Promise<ActivationResponseType> => {
	const url = 'https://studapi.teachmeskills.by/auth/users/activation/'
	const options = {
		method: 'POST',
		headers: {
			'Content-type': 'application/json'
		},
		body: JSON.stringify({
			uid,
			token
		} as ActivationType)
	}

	try {
		const request = new Request(url, options)
		const response = await fetch(request)
		if (!response.ok) {
			const result = await response.json()
			return {
				ok: response.ok,
				status: response.status,
				data: result
			}
		}
		else {
			return {
				ok: response.ok,
				status: response.status,
			}
		}

	} catch (error: any) {
		return {
			ok: false,
			status: 400,
			data: error.errorMessage as ErrorMessageType
		}
	}
}