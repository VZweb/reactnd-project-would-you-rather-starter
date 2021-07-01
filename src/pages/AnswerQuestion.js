import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { isQuestionAnswered } from "../utils/utils";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormLabel from "@material-ui/core/FormLabel";
import Button from '@material-ui/core/Button';
import { handleAddAnswer } from '../actions/questions'
import { saveAnswer } from "../utils/api";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function AnswerQuestion(props) {
  const classes = useStyles();
  const { question, user, dispatch, loginUser } = props;
  const { optionOne, optionTwo, id } = question;

  const [answer, setAnswer] = React.useState('');
  const [qid, setId] = React.useState('');

  const handleRadioChange = (event) => {
    setAnswer(event.target.value);
    setId(id)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleAddAnswer(qid, answer, loginUser)
    console.log("qid is: ", qid)
    console.log("answer is: ", answer)
  };

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={
              "https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Avatar-Teaser-Poster.jpg/220px-Avatar-Teaser-Poster.jpg"
            }
            title="user avatar"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {user.id} asks:
            </Typography>
            {/* <Typography variant="body2" color="textSecondary" component="p">
              
            </Typography> */}
            <form onSubmit={handleSubmit}>
              <FormControl component="fieldset" className={classes.formControl}
              >
                <FormLabel component="legend">
                Would you rather:
                </FormLabel>
                <RadioGroup aria-label="quiz" name="quiz" value={answer} onChange={handleRadioChange}
                >
                  <FormControlLabel value="optionOne"  control={<Radio />} label={optionOne.text} />
                  <FormControlLabel value="optionTwo"  control={<Radio />} label={optionTwo.text} />
                </RadioGroup>
                <Button type="submit" variant="outlined" color="primary" className={classes.button} >
                  Submit
                </Button>
              </FormControl>
            </form>
          </CardContent>
        </CardActionArea>
        <CardActions></CardActions>
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

const mapDispatchToProps = dispatch => ({
    handleAddAnswer: (id, answer, loginUser) => dispatch(handleAddAnswer(id, answer, loginUser))
})

export default connect(mapStateToProps, mapDispatchToProps)(AnswerQuestion);
