import {
	getInitialData,
	saveQuestionDB,
	saveQuestionAnswerDB,
} from '../utils/api'
import { getQuestions, addQuestion, saveQuestionAnswer } from './questions'
import { saveQuestionToUser, getUsers, saveQuestionAnswerToUser } from './users'

import { setAuthedUser } from './authedUser'

const AUTHED_ID = null

export const handleInitialData = () => {
	return (dispatch) => {
		return getInitialData()
			.then(({ users, questions }) => {
				dispatch(getUsers(users))
				dispatch(getQuestions(questions))
				dispatch(setAuthedUser(AUTHED_ID))
			})
			.catch(function (error) {
				alert('There was an error loading initial data: ', error)
			})
	}
}

export const handleAddQuestion = (optionOneText, optionTwoText) => {
	return (dispatch, getState) => {
		const { authedUser } = getState()

		return saveQuestionDB({
			author: authedUser,
			optionOneText,
			optionTwoText,
		})
			.then((question) => {
				dispatch(addQuestion(question))
				dispatch(saveQuestionToUser(authedUser, question.id))
			})
			.catch(function (error) {
				alert('There was an error adding new question:', error)
			})
	}
}

export const handleSaveQuestionAnswer = (id, answer) => {
	return (dispatch, getState) => {
		const { authedUser } = getState()

		return saveQuestionAnswerDB({
		  authedUser,
			qid: id,
			answer,
		})
			.then(() => {
				dispatch(saveQuestionAnswer(authedUser, id, answer))
				dispatch(saveQuestionAnswerToUser(authedUser, id, answer))
			})
			.catch(function (error) {
				alert('There was an error answering a question: ', error)
			})
	}
}
