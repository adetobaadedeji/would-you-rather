import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { handleAddQuestion } from '../actions/shared'

class NewQuestion extends React.Component {
	state = {
		optionOneText: '',
		optionTwoText: '',
	}

	handleSubmit = (e) => {
		e.preventDefault()

		const { optionOneText, optionTwoText } = this.state
		const { dispatch } = this.props

		dispatch(handleAddQuestion(optionOneText, optionTwoText))

		this.props.history.push('/')
	}

	render() {
		const { optionOneText, optionTwoText } = this.state

		const disabled = optionOneText === '' || optionTwoText === ''

		return (
			<div className='w-full md:w-1/3 mx-auto mt-8 rounded border text-sm md:text-base border-green-100 my-5 '>
				<h2 className='w-full bg-green-50 px-3 py-3 md:text-xl rounded-t font-semibold'>
					Create a New Poll
				</h2>
				<div className='w-full p-3 flex flex-col space-y-4'>
					<p>Complete the question:</p>
					<p className='font-semibold'>Would you rather</p>
					<form
						onSubmit={this.handleSubmit}
						className='flex flex-col '
					>
						<input
							className='border border-green-200 text-sm px-3 h-10 outline-none focus:ring-1 focus:ring-green-300 rounded'
							type='text'
							placeholder='Enter option one text'
							onChange={(e) =>
								this.setState({ optionOneText: e.target.value.trim() })
							}
						/>
						<span className="text-gray-800 text-center my-2">OR</span>
						<input
							className='border border-green-200 text-sm px-3 h-10 outline-none focus:ring-1 focus:ring-green-300 rounded'
							type='text'
							placeholder='Enter option two text'
							onChange={(e) =>
								this.setState({ optionTwoText: e.target.value.trim() })
							}
						/>

						<input
							className={` w-full ${
								disabled ? 'bg-green-100' : 'bg-green-600 hover:bg-green-700'
							}  text-white text-center py-2 mt-5 rounded`}
							type='submit'
							disabled={disabled}
						/>
					</form>
				</div>
			</div>
		)
	}
}

export default withRouter(connect()(NewQuestion))
