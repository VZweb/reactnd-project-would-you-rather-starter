import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ProgressBar from '../components/progress-bar'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function Results(props) {
  const classes = useStyles();
  const {optionOne, optionTwo} = props.question;
  // USE library
  const optionOnePercentage = ((optionOne.votes.length * 100)/ (optionOne.votes.length + optionTwo.votes.length));
  const optionTwoPercentage = ((optionTwo.votes.length * 100)/ (optionTwo.votes.length + optionOne.votes.length));
  const totalVotes = optionOne.votes.length + optionTwo.votes.length

  return (
      <div>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Avatar-Teaser-Poster.jpg/220px-Avatar-Teaser-Poster.jpg"
          title="user avatar"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.user.id} asks:
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Would you rather {optionOne.text}
          </Typography>
          <ProgressBar key="1" bgcolor="#6a1b9a" completed={optionOnePercentage} />
          <Typography variant="body2" color="textSecondary" component="p">
          {optionOne.votes.length} out of {totalVotes} votes
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Would you rather {optionTwo.text}
          </Typography>
          <ProgressBar key="1" bgcolor="#6a1b9a" completed={optionTwoPercentage} />
          <Typography variant="body2" color="textSecondary" component="p">
          {optionTwo.votes.length} out of {totalVotes} votes
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}

function mapStateToProps({ users, questions, loginUser }, ownProps) {
    const { author } = questions[ownProps.question_id.question_id];
    const question = questions[ownProps.question_id.question_id]
    const optionOneVotes = question.optionOne.votes.some((vote)=>vote === loginUser);
    const optionTwoVotes = question.optionTwo.votes.some((vote)=>vote === loginUser);
    return {
      user: users[author],
      question,
      loginUser,
      optionOneVotes,
      optionTwoVotes
    };
  }

export default connect(mapStateToProps)(Results);
