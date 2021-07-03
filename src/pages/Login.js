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
import Divider from "@material-ui/core/Divider";

function Login(props) {
  const [loggedInuser, setLoginUser] = React.useState("");

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
      backgroundSize: "contain",
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
    <div className="Center-panel">
      <Container>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={"https://image.flaticon.com/icons/png/512/189/189677.png"}
              title="user avatar"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="h6"
                align="center"
              >
                Welcome to Would you rather App!
              </Typography>
              <Divider />
              <div className="Login-text">
                <Typography gutterBottom variant="h6" component="h3">
                  Login
                </Typography>
              </div>
              <div className="LoginForm-position">
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">
                    Username
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={loggedInuser}
                    onChange={selectUser}
                  >
                    {Object.values(props.users).map((user) => (
                      <MenuItem key={user.id} value={user.id}>
                        {user.id}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
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
