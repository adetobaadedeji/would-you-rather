import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {
	state = {
		selectedUser: '',
	}

	changeUser = (e) => {
		this.setState(() => ({
			selectedUser: e.target.value,
		}))
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.dispatch(setAuthedUser(this.state.selectedUser))
	}

	render() {
		const { authedUser, users, location } = this.props
		const { from } = location.state || { from: { pathname: '/' } }
		if (authedUser !== null) {
			return <Redirect to={from} />
		}

		return (
			<div className='w-full md:w-1/4 bg-white mx-auto mt-10 border-2 border-green-50 rounded'>
				<div className='w-full bg-green-50 text-center text-green-800 py-3'>
					<h1 className='text-base md:text-lg font-semibold'>
						Welcome to the Would You Rather App!{' '}
					</h1>
					<p>Please sign in to continue </p>
				</div>
				<div className='w-full px-2 pb-2 pt-5'>
					<form
						onSubmit={this.handleSubmit}
						className='w-full outline-none rounded'
					>
						<select
							name='user'
							value={this.state.selectedUser}
							onChange={this.changeUser}
							className='w-full rounded outline-none py-1 border-2 text-green-800 border-green-50'
						>
							<option
								value=''
								defaultValue
								disabled
								className='text-gray-400 outline-none'
							>
								Select User
							</option>
							{users.map((user) => (
								<option key={user.id} value={user.id}>
									{user.name}
								</option>
							))}
						</select>
						<div className='w-full p-2 flex bg-green-50 mt-4 rounded'>
							<button
								disabled={this.state.selectedUser === ''}
								className={`w-full ${
									!this.state.selectedUser
										? 'bg-green-50'
										: 'bg-green-600 hover:bg-green-500 '
								} text-white font-semibold px-3 py-1 rounded ml-auto`}
							>
								Login
							</button>
						</div>
					</form>
				</div>
			</div>
		)
	}
}

function mapStateToProps({ users, authedUser }) {
	return {
		users: Object.values(users),
		authedUser,
	}
}

export default connect(mapStateToProps)(Login)
