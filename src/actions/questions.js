import { showLoading, hideLoading } from "react-redux-loading";
import { saveAnswer, saveQuestion } from "../utils/api";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_ANSWER = "ADD_ANSWER";
export const ADD_QUESTION = "ADD_QUESTION";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

function addAnswer(qid, answer, authedUser) {
  return {
    type: ADD_ANSWER,
    answer,
    authedUser,
    qid,
  };
}

function addQuestion(id, optionOne, optionTwo, timestamp, loginUser) {
  return {
    type: ADD_QUESTION,
    optionOne,
    optionTwo,
    timestamp,
    id,
    loginUser,
  };
}

export function handleAddAnswer(qid, answer, authedUser) {
  return (dispatch) => {
    dispatch(showLoading());

    return saveAnswer({
      authedUser,
      qid,
      answer,
    })
      .then(() => dispatch(addAnswer(qid, answer, authedUser)))
      .then(() => dispatch(hideLoading()));
  };
}

export function handleAddQuestion(optionOneText, optionTwoText, loginUser) {
  return (dispatch) => {
    dispatch(showLoading());

    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: loginUser,
    })
      .then((question) =>
        dispatch(
          addQuestion(
            question.id,
            question.optionOne,
            question.optionTwo,
            question.timestamp,
            question.author
          )
        )
      )
      .then(() => dispatch(hideLoading()));
  };
}
