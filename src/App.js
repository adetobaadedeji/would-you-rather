import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import { handleInitialData } from './actions/shared'
import Home from './components/Home'
import Leaderboard from './components/Leaderboard'
import Login from './components/Login'
import Logout from './components/Logout'
import Nav from './components/Nav'
import NewQuestion from './components/NewQuestion'
import NoMatch from './components/NoMatch'
import QuestionDetails from './components/QuestionDetails'

const PrivateRoute = ({ component: Component, authedUser, ...rest }) => (
	<Route
		{...rest}
		render={(props) =>
			authedUser !== null ? (
				<Component {...props} />
			) : (
				<Redirect
					to='/login'
					
				/>
			)
		}
	/>
)

class App extends Component {
	componentDidMount() {
		this.props.dispatch(handleInitialData())
	}

	render() {
		const {authedUser} = this.props
		return (
			<Router>
				<Fragment>
					<Nav />
					<div className='w-full p-2  '>
						<Switch>
							<Route path='/login' component={Login} />
							<Route path='/logout' component={Logout} />

							<PrivateRoute
								exact
								path='/'
								component={Home}
								authedUser={authedUser}
							/>
							<PrivateRoute
								path='/add'
								component={NewQuestion}
								authedUser={authedUser}
							/>
							<PrivateRoute
								path='/leaderboard'
								component={Leaderboard}
								authedUser={authedUser}
							/>
							<PrivateRoute
								path='/question/:question_id'
								component={QuestionDetails}
								authedUser={authedUser}
							/>
							<Route render={() => <NoMatch />} />
						</Switch>
					</div>
				</Fragment>
			</Router>
		)
	}
}

// const PrivateRouteComponent = ({
// 	component: Component,
// 	authedUser,
// 	...rest
// }) => (
// 	<Route
// 		{...rest}
// 		render={(props) =>
// 			authedUser !== null ? (
// 				<Component {...props} />
// 			) : (
// 				<Redirect push to='/login' />
// 			)
// 		}
// 	/>
// )

const mapStateToProps = ({ authedUser }) => {
	return {
		authedUser
	}
}

// const PrivateRoute = connect(mapStateToProps)(PrivateRouteComponent)

export default connect(mapStateToProps)(App)
