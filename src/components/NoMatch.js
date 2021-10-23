import React from 'react'
import { Link } from 'react-router-dom'

const NoMatch = () => {
	return (
		<div className="w-2/12 flex flex-col space-y-5" >
			<h1 className="text-2xl font-semibold text-green-800">Page does not match!</h1>
			<Link
				to='/'
				className='inine-block bg-green-600 hover:bg-green-500 text-white px-3 py-1 rounded'
			>
				{' '}
				go back home
			</Link>
		</div>
	)
}

export default NoMatch
