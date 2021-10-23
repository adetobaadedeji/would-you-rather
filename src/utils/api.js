import {
	_getQuestions,
	_getUsers,
	_saveQuestion,
	_saveQuestionAnswer,
} from './_DATA'

export const getInitialData = () => {
  return Promise.all([
    _getUsers(),
    _getQuestions()
  ]).then(([users, questions]) => ({
    users,
    questions
  }))
}

export const saveQuestionDB = (question) => {
  return _saveQuestion(question)
}

export const saveQuestionAnswerDB = (answerInfo) => {
	return _saveQuestionAnswer(answerInfo)
}
