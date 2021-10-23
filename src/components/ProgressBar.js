import React from 'react'

const ProgressBar = ({
	title,
	votePercent,
	width,
	vote,
	totalVotes,
	VotedOptionOne,
	VotedOptionTwo,
}) => {
	return (
		<div className='relative pt-1 px-1 bg-green-50 rounded mb-4'>
			{VotedOptionOne && (
				<div class='ml-auto mb-3 w-12 h-12 bg-yellow-500 rounded-full text-xs text-white font-semibold flex justify-center items-center text-center p-5 shadow-xl'>
					Your Vote
				</div>
			)}
			{VotedOptionTwo && (
				<div class='ml-auto mb-3 w-12 h-12 bg-yellow-500 rounded-full text-xs text-white font-semibold flex justify-center items-center text-center p-5 shadow-xl'>
					Your Vote
				</div>
			)}
			<div className='flex mb-2 items-center justify-between'>
				<div>
					<span className='font-normal inline-block py-1 px-2 text-green-800'>
						{title}
					</span>
				</div>
				<div className='text-right'>
					<span className=' py-1 px-2  font-normal inline-block text-green-800'>
						{votePercent}%
					</span>
				</div>
			</div>
			<div className='overflow-hidden h-3  text-base flex rounded bg-gray-200'>
				<div
					style={{ width: width }}
					className='shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-600'
				></div>
			</div>
			<div className='text-right'>
				<span className='text-xs py-1 px-2  font-normal inline-block text-green-800'>
					{vote} out of {totalVotes} {`${totalVotes > 1 ? 'votes' : 'vote'}`}
				</span>
			</div>
		</div>
	)
}

export default ProgressBar
