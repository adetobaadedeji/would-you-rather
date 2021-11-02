import ProgressBar from './ProgressBar'
import React from 'react'

const QuestionResult = ({ question, authedUser }) => {
	const { optionOne, optionTwo } = question
	const vote1 = optionOne.votes.length
	const vote2 = optionTwo.votes.length
	const totalVotes = vote1 + vote2
	const vote1Progress = ((vote1 / totalVotes) * 100).toFixed(0)
	const vote2Progress = ((vote2 / totalVotes) * 100).toFixed(0)

	const votedOptionOne = optionOne.votes.includes(authedUser)
	const VotedOptionTwo = optionTwo.votes.includes(authedUser)

	return (
		<div>
			<div>
				<ProgressBar
					title={optionOne.text}
					votePercent={vote1Progress}
					width={`${vote1Progress}%`}
					vote={vote1}
					totalVotes={totalVotes}
					votedOptionOne={votedOptionOne}
				/>
			</div>
			<div>
				<ProgressBar
					title={optionTwo.text}
					votePercent={vote2Progress}
					width={`${vote2Progress}%`}
					vote={vote2}
					totalVotes={totalVotes}
					VotedOptionTwo={VotedOptionTwo}
				/>
			</div>
		</div>
	)
}

export default QuestionResult
