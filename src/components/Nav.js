import React from 'react'
import { connect } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'

const Nav = ({ authedUser, users }) => {
	return (
		<div className='w-full flex flex-col sm:flex-row md:justify-between items-center px-2 md:px-40 py-3 bg-green-50 text-gray-400 '>
			<div className='w-full flex justify-between md:justify-start px-4 space-x-5 mb-5 sm:mb-0'>
				<NavLink
					to='/'
					exact
					activeClassName='text-gray-600 border-b-2 border-gray-600'
				>
					Home
				</NavLink>
				<NavLink
					to='/add'
					activeClassName='text-gray-600 border-b-2 border-gray-600'
				>
					New Questions
				</NavLink>
				<NavLink
					to='/leaderboard'
					activeClassName='text-gray-600 border-b-2 border-gray-600'
				>
					LeaderBoard
				</NavLink>
			</div>
			{authedUser !== null && (
				<div className='w-full  flex justify-between px-4 space-x-5 '>
					<img
						src={users[authedUser].avatarURL}
						className='w-8 h-8 rounded-full md:ml-auto'
						alt='avatar pic'
					/>
					<span className='text-green-800'>
						<h3>Hello, {users[authedUser].name}</h3>
					</span>
					<Link
						to='/logout'
						className='bg-green-600 hover:bg-green-700  text-white px-3 py-1 rounded'
					>
						Log Out
					</Link>
				</div>
			)}
		</div>
	)
}

const mapStateToProps = ({ authedUser, users }) => {
	return {
		authedUser,
		users,
	}
}

export default connect(mapStateToProps)(Nav)
