import React from 'react'
import { Link } from 'react-router-dom'

const QuestionCard = ({ users, questions, answer, result}) => {
	return (
		<div className='w-full rounded border border-green-100 my-5 text-sm md:text-base'>
			<div className='w-full bg-green-50 px-3 py-3 rounded-t font-semibold'>
				{users[questions[answer].author].name} asks:
			</div>
			<div className='w-full p-3 flex space-x-4'>
				<div className=' flex justify-center border-r border-green-100 pr-2'>
					<img
						alt=''
						className='rounded-full h-24 w-24 '
						src={users[questions[answer].author].avatarURL}
					/>
				</div>
				<div className='flex-1 flex flex-col justify-between space-y-2'>
					<h2 className='font-semibold'>Would you rather</h2>
					<p className='text-center '>
						{questions[answer].optionOne.text}...
						<br /> or...
					</p>

					<Link
						to={{
							pathname: `/question/${[questions[answer].id]}`,
						}}
						className=' w-full bg-green-600 hover:bg-green-700 text-white text-center py-1 md:py-2 rounded'
					>
						{!result ? 'Answer' : 'View Result'}
					</Link>
				</div>
			</div>
		</div>
	)
}

export default QuestionCard
