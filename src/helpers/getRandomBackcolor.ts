export const getRandomBackColor = (): string => {
	const num: number = Math.trunc(1 + Math.random() * 4)
	let color: string = ''
	switch (num) {
		case 1:
			color = 'orange'
			break;
		case 2:
			color = 'green'
			break;
		case 3:
			color = 'purple'
			break;
		case 4:
			color = 'blue'
			break;
	}

	return color
}