export const GET_QUESTIONS = 'GET_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const SAVE_QUESTION_ANSWER = 'SAVE_ANSWER'

// qid === question_id

export const getQuestions = (questions) => {
	return {
		type: GET_QUESTIONS,
		questions,
	}
}

export const addQuestion = (question) => {
	return {
		type: ADD_QUESTION,
		question,
	}
}

export const saveQuestionAnswer = (authedUser, answer, id) => {
	return {
		type: SAVE_QUESTION_ANSWER,
		authedUser,
		answer,
		id
	}
}


