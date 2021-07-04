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
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
    backgroundSize: "contain",
  },
});

function Leaderboard(props) {
  const classes = useStyles();

  const usersArrSorted = Object.values(props.users).sort(function (a, b) {
    let scoreA = Object.keys(a.answers).length + Object.keys(a.questions).length
    let scoreB = Object.keys(b.answers).length + Object.keys(b.questions).length
    if (scoreA > scoreB) {
      return -1;
    } else if (scoreA < scoreB) {
      return 1;
    }
    return 0;
  });

  if (!props.loginUser.length) {
    props.history.push("/");
  }

  return (
    <div className="Center-panel">
      {usersArrSorted.map((user) => {
        const noOfAnsweredQuestions = Object.keys(user.answers).length;
        const noOfCreatedQuestions = Object.keys(user.questions).length;
        const totalQuestions = noOfAnsweredQuestions + noOfCreatedQuestions;
        return (
          <Card className={classes.root} key={user.id}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={user.avatarURL}
                title="user avatar"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="span">
                  {user.id}
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={9}>
                  <Typography gutterBottom variant="body1" component="div">
                  Answered Questions: {noOfAnsweredQuestions}
                </Typography>
                <Typography gutterBottom variant="body1" component="div">
                  Created Questions: {noOfCreatedQuestions}
                </Typography>
                  </Grid>
                  <Grid item xs={3}>
                  <div>
                  <Typography gutterBottom variant="h5" component="span">
                    <Avatar>{totalQuestions}</Avatar>
                  </Typography>
                </div>
                  </Grid>
                </Grid>                
                
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
  return {
    loginUser,
    users,
  };
}

export default connect(mapStateToProps)(Leaderboard);
