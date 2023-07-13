

// 1 -> 1 2 3 .. 42
// 2 -> 1 2 3 4 .. 42
// 3 -> 1 2 3 4 5 .. 42
// 4 -> 1 2 3 4 5 6 .. 42

// 5 -> 1 .. 3 4 5 6 7 .. 42
// 6 -> 1 .. 4 5 6 7 8 .. 42
// 7 -> 1 .. 5 6 7 8 9 .. 42
// 37 -> 1 .. 35 36 37 38 39 .. 42
// 38 -> 1 .. 36 37 38 39 40 .. 42

// 39 -> 1 .. 37 38 39 40 41 42
// 40 -> 1 .. 38 39 40 41 42
// 41 -> 1 .. 39 40 41 42
// 42 -> 1 .. 40 41 42


const getNumbers = (start: number, end: number): (number | '..')[] => {
	const res: number[] = []
	for (let i = start; i <= end; i++) {
		res.push(i)
	}
	return res
}

export const getPages = (total: number, postPerPage: number, currentPage: number): (number | '..')[] => {

	const pageCount = Math.ceil(total / postPerPage)
	let pages: (number | '..')[] = []

	if (currentPage <= 4) {
		pages = getNumbers(1, currentPage >= pageCount - 1 ? pageCount : currentPage + 2)
		if (currentPage + 3 < pageCount) {
			pages.push('..')
		}
		if (currentPage + 2 < pageCount) {
			pages.push(pageCount)
		}

	} else if (currentPage >= 5 && currentPage <= pageCount - 4) {
		pages.push(1, '..', ...getNumbers(currentPage - 2, currentPage + 2), '..', pageCount)

	} else if (currentPage > pageCount - 4) {
		pages.push(1, '..', ...getNumbers(currentPage - 2, pageCount))
	}


	return pages
}