import React from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import QuestionResult from './QuestionResult'
import { Link } from 'react-router-dom'
import NoMatch from './NoMatch'

class QuestionDetails extends React.Component {
	render() {
		const { authedUser, user, question, questionAnswered, isError } = this.props
		if (isError) {
			return <NoMatch />
		}

		return (
			<div className='w-full md:w-1/3 text-sm md:text-base mx-auto mt-8 border-green-200'>
				<div className='w-full rounded border border-green-100 my-5 '>
					<div className='w-full bg-green-50 px-3 py-3  rounded-t font-semibold'>
						{user.name} asks:
					</div>
					<div className='w-full p-3 flex space-x-4'>
						<div className='flex justify-center pr-2 border-r border-green-100 '>
							<img
								alt=''
								className='rounded-full  h-24 w-24 '
								src={user.avatarURL}
							/>
						</div>
						<div className='flex-1 flex flex-col'>
							<h2 className='font-semibold mb-3'>Would you rather</h2>
							{questionAnswered ? (
								<QuestionResult question={question} authedUser={authedUser} />
							) : (
								<Question question={question} author={user} />
							)}
							{questionAnswered && (
								<Link
									to='/'
									className='bg-green-600 text-center hover:bg-green-700 text-white px-2 py-1 rounded'
								>
									Return Home
								</Link>
							)}
						</div>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = ({ authedUser, users, questions }, props) => {
	let isError = false
	if (questions[props.match.params.question_id] === undefined) {
		isError = true
		return {
			isError,
		}
	}
	const id = props.match.params.question_id
	const question = questions[id]
	const user = users[question.author]
	const questionAnswered = Object.keys(users[authedUser].answers).includes(
		question.id
	)

	return {
		questionAnswered,
		authedUser,
		question,
		user,
		id,
		isError,
	}
}

export default connect(mapStateToProps)(QuestionDetails)
