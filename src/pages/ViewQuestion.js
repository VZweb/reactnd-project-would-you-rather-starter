import React from "react";
import { connect } from "react-redux";
import { isQuestionAnswered } from "../utils/utils";
import AnswerQuestion from "./AnswerQuestion";
import Results from "./Results";
import Login from "./Login";
import PageNotFound from "./PageNotFound";

function ViewQuestion(props) {
  const { question } = props;

  if (!props.loginUser.length) {
    return <Login />;
  }

  if (props.question === undefined) {
    return <PageNotFound />;
  }

  return (
    <div>
      {isQuestionAnswered(
        question.optionOne,
        question.optionTwo,
        props.loginUser
      ) ? (
        <Results question_id={props.match.params} />
      ) : (
        <AnswerQuestion question_id={props.match.params} />
      )}
    </div>
  );
}

function mapStateToProps({ users, questions, loginUser }, ownProps) {
  const { question_id } = ownProps.match.params;
  if (!questions[question_id]) {
    return { loginUser };
  }
  const { author } = questions[question_id];
  return {
    user: users[author],
    question: questions[question_id],
    loginUser,
  };
}

export default connect(mapStateToProps)(ViewQuestion);
