import React from 'react'
import { Link } from 'react-router-dom'

const NoMatch = () => {
	return (
		<div className='w-full mt-20 flex justify-center items-center'>
			<div className='w-4/12 flex flex-col text-center space-y-5'>
				<h1 className='text-2xl font-semibold text-green-800'>
					ERROR 404
				</h1>
				<p className='text-lg'>The page you're looking for does not exist!</p>
				<Link
					to='/'
					className='inine-block bg-green-600 hover:bg-green-500 text-white text-center text-lg px-3 py-1 rounded'
				>
					{' '}
					Go back home
				</Link>
			</div>
		</div>
	)
}

export default NoMatch
