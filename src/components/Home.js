import React from 'react'
import { connect } from 'react-redux'
import Tabs from './Tabs'
import QuestionCard from './QuestionCard'

const UNANSWERED = 'UNANSWERED'
const ANSWERED = 'ANSWERED'

class Home extends React.Component {
	render() {
		const { questions, users, answered, unanswered } = this.props

		return (
			<div className='md:w-1/3 mx-auto mt-8 border-green-200'>
				<Tabs>
					<div label={UNANSWERED}>
						{unanswered.map((answer) => (
							<QuestionCard
								answer={answer}
								key={questions[answer].id}
								users={users}
								questions={questions}
							/>
						))}
					</div>
					<div label={ANSWERED}>
						{answered.map((answer) => (
							<QuestionCard
								answer={answer}
								key={questions[answer].id}
								users={users}
								questions={questions}
								result
							/>
						))}
					</div>
				</Tabs>
			</div>
		)
	}
}

const mapStateToProps = ({ questions, users, authedUser }) => {
	let answered, unanswered
	const sort = (a, b) => {
		return (
			new Date(questions[b].timestamp).getTime() -
			new Date(questions[a].timestamp).getTime()
		)
	}
	if (authedUser) {
		answered = Object.keys(users[authedUser].answers).sort(sort)
		unanswered = Object.keys(Object.assign({}, questions)).sort(sort)
		answered.map(
			(answer) =>
				(unanswered = unanswered.filter((unanswered) => answer !== unanswered))
		)
	}
	return {
		authedUser,
		users,
		questions,
		answered,
		unanswered,
	}
}

export default connect(mapStateToProps)(Home)
