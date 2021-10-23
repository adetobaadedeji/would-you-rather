import React, { Component } from 'react'

class Tab extends Component {
	handleClick = () => {
		const { label, onClickTab } = this.props
		onClickTab(label)
	}

	render() {
		const {
			handleClick,
			props: { activeTab, label },
		} = this

    // tab-list-item
		let className =
			'flex-1 list-none px-1 py-2 text-sm font-semibold rounded text-center text-green-800 border border-green-100 hover:bg-green-50'

		if (activeTab === label) {
			// tab-list-active
			className += ' bg-green-50'
			//  className = ' flex-1 list-none px-1 py-2 rounded border text-center border-b-0'
		}

		return (
			<li className={className} onClick={handleClick}>
				{label}
			</li>
		)
	}
}

export default Tab
