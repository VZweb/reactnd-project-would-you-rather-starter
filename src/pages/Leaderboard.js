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
            <Typography gutterBottom variant="h6" component="h2">
              Vasilis Z
            </Typography>

            <Typography gutterBottom variant="h7" component="h2">
              Answered Questions: 4
            </Typography>

            <Typography gutterBottom variant="h7" component="h2">
              Created Questions: 1
            </Typography>
            <Divider />

            <Typography gutterBottom variant="h8" component="h3">
              Score:
              <Avatar>5</Avatar>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions></CardActions>
      </Card>
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
