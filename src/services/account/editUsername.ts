export const editUserName = async (accessToken: string, username: string) => {
	const url = 'https://studapi.teachmeskills.by/auth/users/me/'
	const options = {
		method: 'PATCH',
		headers: {
			'Content-type': 'application/json',
			'Authorization': `Bearer ${accessToken}`
		},
		body: JSON.stringify({
			username,
		})
	}
	const response = await fetch(new Request(url, options))
	const result = await response.json()

	return {
		ok: response.ok,
		status: response.status,
		data: result
	}
}