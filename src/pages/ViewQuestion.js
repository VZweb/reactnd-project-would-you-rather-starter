import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { isQuestionAnswered } from '../utils/utils'
import AnswerQuestion from "./AnswerQuestion";
import Results from "./Results";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function ViewQuestion(props) {
  const classes = useStyles();
  const {question, user} = props; 

  return (
    <div>
    {isQuestionAnswered(question.optionOne, question.optionTwo, props.loginUser) ? <Results question_id={props.match.params} /> : 
    <AnswerQuestion question_id={props.match.params} />}
    </div>
  );
}

function mapStateToProps({ users, questions, loginUser }, ownProps) {
    const { question_id } = ownProps.match.params; 
    const { author} =questions[question_id];
  return {
    user:users[author], 
    question:questions[question_id],
    loginUser
  };
}

export default connect(mapStateToProps)(ViewQuestion);
