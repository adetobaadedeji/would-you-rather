export const GET_USERS = 'GET_USERS'
export const SAVE_QUESTION_TO_USER = 'SAVE_QUESTION_TO_USER'
export const SAVE_QUESTION_ANSWER_TO_USER = 'SAVE_QUESTION_ANSWER_TO_USER'

// qid === question_id

export const getUsers = (users) => {
	return {
		type: GET_USERS,
		users,
	}
}

export const saveQuestionToUser = (authedUser, qid) => {
	return {
		type: SAVE_QUESTION_TO_USER,
		authedUser,
		qid,
	}
}

export const saveQuestionAnswerToUser = (authedUser, answer, id) => {
	return {
		type: SAVE_QUESTION_ANSWER_TO_USER,
		authedUser,
		answer,
		id,
	}
}
