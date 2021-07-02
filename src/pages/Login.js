import React from "react";
import { loginAction } from "../actions/loginActions";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Container from "@material-ui/core/Container";

function Login(props) {
  const [loggedInuser, setLoginUser] = React.useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const { dispatch } = props;
    dispatch(loginAction(loggedInuser));
  };

  const selectUser = (event) => {
    const loggedInUser = event.target.value;
    const { dispatch } = props;
    dispatch(loginAction(loggedInUser));
    setLoginUser(loggedInUser);
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  const classes = useStyles();

  return (
    <div className="Login-panel">
      {/* <h1>Welcome</h1>
      <form className="panel-body" onSubmit={handleLogin}>
        <div className="react-redux-icon"></div>
        <h2 className="center">Login</h2>

        <select onChange={(e) => selectUser(e.target.value)}>
          <option>Select User</option>
          {Object.values(props.users).map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
        <button type="submit"> Submit </button>
      </form> */}

      <Container>
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
                Welcome to Would you rather App!
              </Typography>
              <Typography gutterBottom variant="h7" component="h2">
                Login
              </Typography>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Username</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={loggedInuser}
                  onChange={selectUser}
                >
                  {Object.values(props.users).map((user) => (
                    <MenuItem value={user.id}>{user.id}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </CardContent>
          </CardActionArea>
          <CardActions></CardActions>
        </Card>
      </Container>
    </div>
  );
}

function mapStateToProps({ users }) {
  return {
    users,
  };
}

export { Login };
export default connect(mapStateToProps)(Login);
