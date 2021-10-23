import {
	GET_USERS,
	SAVE_QUESTION_TO_USER,
	SAVE_QUESTION_ANSWER_TO_USER,
} from '../actions/users'

export const users = (state = {}, action) => {
	switch (action.type) {
		case GET_USERS:
			const { users } = action
			return {
				...state,
				...users,
			}
		case SAVE_QUESTION_TO_USER:
			const { qid } = action
			return {
				...state,
				[action.authedUser]: {
					...state[action.authedUser],
					questions: state[action.authedUser].questions.concat(qid),
				},
			}
		case SAVE_QUESTION_ANSWER_TO_USER:
			const { authedUser, answer } = action
			return {
				...state,
				[authedUser]: {
					...state[authedUser],
					answers: {
						...state[authedUser].answers,
						[action.id]: answer,
					},
				},
			}
		default:
			return state
	}
}
