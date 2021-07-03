import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import ProgressBar from "../components/progress-bar";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import _ from "lodash";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
    backgroundSize: "contain",
  },
});

function Results(props) {
  const classes = useStyles();
  const { optionOne, optionTwo } = props.question;
  const optionOnePercentage =
    (optionOne.votes.length * 100) /
    (optionOne.votes.length + optionTwo.votes.length);
  const optionTwoPercentage =
    (optionTwo.votes.length * 100) /
    (optionTwo.votes.length + optionOne.votes.length);
  const totalVotes = optionOne.votes.length + optionTwo.votes.length;

  const answerOneClass = props.optionOneVoted
    ? "AnsweredQuestion"
    : "NonAnsweredQuestion";
  const answerTwoClass = props.optionTwoVoted
    ? "AnsweredQuestion"
    : "NonAnsweredQuestion";

  return (
    <div className="Center-panel">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.user.avatarURL}
            title="user avatar"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="span">
              {props.user.id} asks:
            </Typography>
            <div className="Answers-box">
              <div className={answerOneClass}>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  component="span"
                >
                  Would you rather {optionOne.text}
                </Typography>
                <div className="CheckCircleIcon-position">
                  {props.optionOneVoted ? (
                    <div>
                      <CheckCircleIcon />
                    </div>
                  ) : (
                    ""
                  )}
                </div>

                <ProgressBar
                  key="1"
                  bgcolor="#6a1b9a"
                  completed={_.round(optionOnePercentage, 0)}
                />
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="span"
                >
                  {optionOne.votes.length} out of {totalVotes} votes
                </Typography>
              </div>
            </div>
            <div className="Answers-box">
              <div className={answerTwoClass}>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  component="span"
                >
                  Would you rather {optionTwo.text}
                  <div className="CheckCircleIcon-position">
                    {props.optionTwoVoted ? (
                      <div>
                        <CheckCircleIcon />
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </Typography>
                <ProgressBar
                  key="1"
                  bgcolor="#6a1b9a"
                  completed={_.round(optionTwoPercentage, 0)}
                />
                <Typography variant="body2" color="textSecondary" component="p">
                  {optionTwo.votes.length} out of {totalVotes} votes
                </Typography>
              </div>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

function mapStateToProps({ users, questions, loginUser }, ownProps) {
  const { author } = questions[ownProps.question_id.question_id];
  const question = questions[ownProps.question_id.question_id];
  const optionOneVoted = question.optionOne.votes.some(
    (vote) => vote === loginUser
  );
  const optionTwoVoted = question.optionTwo.votes.some(
    (vote) => vote === loginUser
  );
  return {
    user: users[author],
    question,
    loginUser,
    optionOneVoted,
    optionTwoVoted,
  };
}

export default connect(mapStateToProps)(Results);
