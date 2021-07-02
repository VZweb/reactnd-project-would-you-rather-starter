import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function Leaderboard(props) {
  const classes = useStyles();

  const usersArrSorted = Object.values(props.users).sort(function (a, b) {
    let scoreA = Object.keys(a.answers).length;
    let scoreB = Object.keys(b.answers).length;
    if (scoreA > scoreB) {
      return -1;
    } else if (scoreA < scoreB) {
      return 1;
    }
    return 0;
  });

  return (
    <div>
      {usersArrSorted.map((user) => {
        const noOfAnsweredQuestions = Object.keys(user.answers).length;
        const noOfCreatedQuestions = Object.keys(user.questions).length;
        const totalQuestions = noOfAnsweredQuestions + noOfCreatedQuestions;
        return (
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
                <Typography gutterBottom variant="h6" component="h2">
                  {user.id}
                </Typography>

                <Typography gutterBottom variant="h7" component="h2">
                  Answered Questions: {noOfAnsweredQuestions}
                </Typography>

                <Typography gutterBottom variant="h7" component="h2">
                  Created Questions: {noOfCreatedQuestions}
                </Typography>
                <Divider />

                <Typography gutterBottom variant="h8" component="h3">
                  Score:
                  <Avatar>{totalQuestions}</Avatar>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions></CardActions>
          </Card>
        );
      })}
    </div>
  );
}

function mapStateToProps({ loginUser, users }) {
  console.log("users are: ", users);
  return {
    loginUser,
    users,
  };
}

export default connect(mapStateToProps)(Leaderboard);
