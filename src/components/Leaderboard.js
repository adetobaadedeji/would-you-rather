import React from 'react'
import { connect } from 'react-redux'

const Leaderboard = (props) => {
	const { usersOnBoard } = props

	return (
		<div className='w-full md:w-1/3 mx-auto flex flex-col space-y-6 my-5'>
			{usersOnBoard.map((user) => (
				<div
					key={user.id}
					className='w-full p-3 md:p-5 flex  items-center md:flex-row justify-between border border-green-200 rounded-xl'
				>
					<div className='md:pr-5  h-24 w-24'>
						<img src={user.avatarURL} alt='' className='rounded-full' />
					</div>
					<div className='flex-1 flex flex-col space-y-2 mx-5 md:px-5 md:border-r md:border-l border-green-200'>
						<h2 className='md:text-xl font-semibold  text-center'>
							{user.name}
						</h2>
						<div className='flex justify-between border-b pb-4 border-green-100'>
							<p className='text-sm md:text-base'>Answered questions</p>
							<span className='font-semibold'>{user.answerCount}</span>
						</div>
						<div className='flex justify-between'>
							<p className='text-sm md:text-base '>Created questions</p>
							<span className='font-semibold'>{user.questionCount}</span>
						</div>
					</div>
					<div className='flex flex-col border border-green-100 rounded'>
						<h3 className='bg-green-100 py-2 px-3 rounded-t'>Score</h3>
						<span className='font-semibold text-center px-2 py-3'>
							{user.questionCount + user.answerCount}
						</span>
					</div>
				</div>
			))}
		</div>
	)
}

const mapStateToProps = ({ users }) => {
	const usersOnBoard = Object.values(users)
		.map((user) => ({
			id: user.id,
			name: user.name,
			avatarURL: user.avatarURL,
			answerCount: Object.values(user.answers).length,
			questionCount: user.questions.length,
			total: Object.values(user.answers).length + user.questions.length,
		}))
		.sort((a, b) => a.total - b.total)
		.reverse()
	// .slice(0, 3)

	return {
		usersOnBoard,
	}
}

export default connect(mapStateToProps)(Leaderboard)
