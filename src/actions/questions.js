import { showLoading, hideLoading } from 'react-redux-loading'
import { saveAnswer } from '../utils/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_ANSWER = 'ADD_ANSWER'

export function receiveQuestions (questions) {
    return {
      type: RECEIVE_QUESTIONS,
      questions,
    }
  }

  function addAnswer (qid, answer, authedUser ) {
    return {
      type: ADD_ANSWER,
      answer,
      authedUser,
      qid
    }
  }

  export function handleAddAnswer (qid, answer, authedUser) {
    return (dispatch) => {
  
      dispatch(showLoading())
  
      return saveAnswer({
        authedUser,
        qid,
        answer
      })
        .then(() => dispatch(addAnswer(qid, answer, authedUser)))
        .then(() => dispatch(hideLoading()))
    }
  }