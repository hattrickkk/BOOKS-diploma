export const getUserInfo = async (accessToken: string) => {
	const url = 'https://studapi.teachmeskills.by/auth/users/me/'
	const options = {
		method: 'GET',
		headers: {
			'Content-type': 'application/json',
			'Authorization': `Bearer ${accessToken}`
		}
	}
	const response = await fetch(new Request(url, options))
	const result = await response.json()

	return {
		ok: response.ok,
		status: response.status,
		data: result
	}
}