import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
import { handleAddAnswer } from "../actions/questions";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
    backgroundSize: "contain",
  },
});

function AnswerQuestion(props) {
  const classes = useStyles();
  const { question, user, loginUser } = props;
  const { optionOne, optionTwo, id } = question;

  const [answer, setAnswer] = React.useState("");
  const [qid, setId] = React.useState("");

  const handleRadioChange = (event) => {
    setAnswer(event.target.value);
    setId(id);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleAddAnswer(qid, answer, loginUser);
  };

  return (
    <div className="Center-panel">
      <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image={props.user.avatarURL}
            title="user avatar"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {user.id} asks:
            </Typography>
            <form onSubmit={handleSubmit}>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Would you rather:</FormLabel>
                <RadioGroup
                  aria-label="quiz"
                  name="quiz"
                  value={answer}
                  onChange={handleRadioChange}
                >
                  <FormControlLabel
                    value="optionOne"
                    control={<Radio />}
                    label={optionOne.text}
                  />
                  <FormControlLabel
                    value="optionTwo"
                    control={<Radio />}
                    label={optionTwo.text}
                  />
                </RadioGroup>
                <Button
                  type="submit"
                  variant="outlined"
                  color="primary"
                  className={classes.button}
                >
                  Submit
                </Button>
              </FormControl>
            </form>
          </CardContent>
      </Card>
    </div>
  );
}

function mapStateToProps({ users, questions, loginUser }, ownProps) {
  const { author } = questions[ownProps.question_id.question_id];
  return {
    user: users[author],
    question: questions[ownProps.question_id.question_id],
    loginUser,
  };
}

const mapDispatchToProps = (dispatch) => ({
  handleAddAnswer: (id, answer, loginUser) =>
    dispatch(handleAddAnswer(id, answer, loginUser)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AnswerQuestion);
