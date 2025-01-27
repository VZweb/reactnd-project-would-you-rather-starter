import { RECEIVE_USERS } from "../actions/users";
import { ADD_QUESTION, ADD_ANSWER } from "../actions/questions";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };

    case ADD_ANSWER:
      const { authedUser, qid, answer } = action;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer,
          },
        },
      };

    case ADD_QUESTION:
      const { id, loginUser } = action;

      return {
        ...state,
        [loginUser]: {
          ...state[loginUser],
          questions: state[loginUser].questions.concat(id),
        },
      };

    default:
      return state;
  }
}
