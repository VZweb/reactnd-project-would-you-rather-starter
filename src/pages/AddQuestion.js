import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { handleAddQuestion } from "../actions/questions";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function AddQuestion(props) {
  const classes = useStyles();
  const [enteredOptionOne, setEnteredOptionOne] = React.useState("");
  const [enteredOptionTwo, setEnteredOptionTwo] = React.useState("");

  function handleOptionTwoEnter(optionTwo) {
    setEnteredOptionTwo(optionTwo);
  }

  function handleOptionOneEnter(optionOne) {
    setEnteredOptionOne(optionOne);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const { dispatch } = props;
    dispatch(
      handleAddQuestion(enteredOptionOne, enteredOptionTwo, props.loginUser)
    );
    props.history.push("/");
  }

  if (!props.loginUser.length) {
    props.history.push("/");
  }

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
            <form onSubmit={handleSubmit}>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Complete the question</FormLabel>
                <Typography gutterBottom variant="h6" component="h2">
                  Would you rather...
                </Typography>
                <TextField
                  id="enterOptionOne"
                  label="Enter option 1 here"
                  value={enteredOptionOne}
                  onChange={(event) => handleOptionOneEnter(event.target.value)}
                />
                <Typography gutterBottom variant="h6" component="h2">
                  or
                </Typography>
                <TextField
                  id="enterOptionTwo"
                  label="Enter option 2 here"
                  value={enteredOptionTwo}
                  onChange={(event) => handleOptionTwoEnter(event.target.value)}
                />
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
        </CardActionArea>
        <CardActions></CardActions>
      </Card>
    </div>
  );
}

function mapStateToProps({ loginUser }) {
  return {
    loginUser,
  };
}

export default connect(mapStateToProps)(AddQuestion);
