import {
	GET_QUESTIONS,
	ADD_QUESTION,
	SAVE_QUESTION_ANSWER,
} from '../actions/questions'

export const questions = (state = {}, action) => {
	switch (action.type) {
		case GET_QUESTIONS:
			return {
				...state,
				...action.questions,
			}
		case ADD_QUESTION:
			return {
				...state,
				[action.question.id]: action.question,
			}
		case SAVE_QUESTION_ANSWER:
			const { id, answer, authedUser } = action
			return {
				...state,
				[id]: {
					...state[id],
					[answer]: {
						...state[id][answer],
						votes: state[id][answer].votes.concat([authedUser]),
					},
				},
			}

		default:
			return state
	}
}
