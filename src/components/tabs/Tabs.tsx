import React, { useCallback, useState } from 'react'
import './tabs.scss'

type Props = {
	className: string
	descr: string
	authors: string
}
const Tabs = ({ className, descr, authors }: Props) => {
	const [openedIndex, setOpenedIndex] = useState<number>(0)

	const titleClickHnadler = useCallback((index: number) => {
		setOpenedIndex(index)
	}, [])

	return (
		<div
			className={`${className}__tabs tabs`}
		>
			<div className="tabs__titles">
				<div
					className={openedIndex === 0 ? "tabs__title active" : "tabs__title"}
					onClick={() => { titleClickHnadler(0) }}
				>
					Description
				</div>
				<div
					className={openedIndex === 1 ? "tabs__title active" : "tabs__title"}
					onClick={() => { titleClickHnadler(1) }}
				>
					Authors
				</div>
			</div>

			<div className="tabs__contents">
				<div
					className={openedIndex === 0 ? "tabs__content active" : "tabs__content"}
				>
					{descr}
				</div>
				<div
					className={openedIndex === 1 ? "tabs__content active" : "tabs__content"}
				>
					Authors: {authors}
				</div>
			</div>
		</div>
	)
}

export default Tabs