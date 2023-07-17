export const getNewAccessToken = async (refresh: string) => {
	const url = 'https://studapi.teachmeskills.by/auth/jwt/refresh/'
	const options = {
		method: 'POST',
		headers: {
			'Content-type': 'application/json'
		},
		body: JSON.stringify({
			refresh
		})
	}

	const response = await fetch(new Request(url, options))
	return response.json()
}