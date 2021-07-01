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

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function Question(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.user.avatarURL}
          title="user avatar"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.author} asks:
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Would you rather...
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/questions/${props.question.id}`}>
          <Button size="small" color="primary">
            View Question
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

function mapStateToProps({ users }, ownProps) {
  return {
    user: users[ownProps.author],
  };
}

export default connect(mapStateToProps)(Question);