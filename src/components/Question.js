import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSaveQuestionAnswer } from '../actions/shared'

class Question extends Component {
	state = {
		selectedOption: '',
		showAlert: false,
	}

	onOptionChange = (event) => {
		this.setState({
			selectedOption: event.target.value,
			showAlert: false,
		})
	}

	formSubmit = (event) => {
		event.preventDefault()

		const { selectedOption } = this.state
		const { dispatch, question } = this.props

		let id = question.id
		let answer = selectedOption

		this.state.selectedOption === ''
			? this.setState({ showAlert: true })
			: dispatch(handleSaveQuestionAnswer(id, answer))
	}

	render() {
		const { question } = this.props

		return (
			<form
				className='h-full flex flex-col justify-between'
				onSubmit={this.formSubmit}
			>
				{this.state.showAlert && (
					<small className='text-red-600 p-4'>* Please select one option</small>
				)}
				<div className='pl-5'>
					<div>
						<label className='w-full flex items-center'>
							<input
								type='radio'
								value='optionOne'
								checked={this.state.selectedOption === 'optionOne'}
								onChange={this.onOptionChange}
								className='h-4 w-4'
							/>
							<span className='ml-3'>{question.optionOne.text}</span>
						</label>
					</div>
					<div>
						<label className='w-full flex items-center '>
							<input
								type='radio'
								value='optionTwo'
								checked={this.state.selectedOption === 'optionTwo'}
								onChange={this.onOptionChange}
								className='h-4 w-4'
							/>
							<span className='ml-3'>{question.optionTwo.text}</span>
						</label>
					</div>
				</div>
				<button
					className='w-full bg-green-600 hover:bg-green-500 text-white text-center py-1 md:py-2 rounded mt-2'
					type='submit'
				>
					Submit
				</button>
			</form>
		)
	}
}

export default connect()(Question)
