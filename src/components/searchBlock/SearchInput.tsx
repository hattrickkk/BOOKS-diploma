import React, { ChangeEvent } from 'react'

type Props = {
	text: string
	changeHandler: (e: ChangeEvent<HTMLInputElement>) => void
	openAutoCompelte: () => void
}

const SearchInput = ({ text, changeHandler, openAutoCompelte }: Props) => {
	return (
		<input
			className='search__input'
			value={text}
			placeholder='Search...'
			onChange={changeHandler}
			onFocus={openAutoCompelte}
		/>
	)
}

export default SearchInput