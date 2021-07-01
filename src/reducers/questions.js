import {
  RECEIVE_QUESTIONS,
  ADD_ANSWER,
  ADD_QUESTION,
} from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };

    case ADD_ANSWER:
      const { authedUser, qid, answer } = action;
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat([authedUser]),
          },
        },
      };

    case ADD_QUESTION:
      const { id, optionOne, optionTwo, loginUser, timestamp } = action;

      return {
        ...state,
        [id]: {
          id,
          author: loginUser,
          timestamp,
          optionOne,
          optionTwo,
        },
      };

    default:
      return state;
  }
}
