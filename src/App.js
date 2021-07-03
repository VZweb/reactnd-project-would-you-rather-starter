import "./App.css";
import React, { Component, Fragment } from "react";
import Login from "./pages/Login";
import ViewQuestion from "./pages/ViewQuestion";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { handleInitialData } from "./actions/shared";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";
import Home from "./pages/Home";
import Nav from "./Nav";
import AddQuestion from "./pages/AddQuestion";
import Leaderboard from "./pages/Leaderboard";
import _ from "lodash";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="container">
            {_.isEmpty(this.props.loginUser) ? "" : <Nav />}
            {this.props.loading === true ? null : (
              <div>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route
                  path="/questions/:question_id"
                  component={ViewQuestion}
                />
                <Route path="/add" component={AddQuestion} />
                <Route path="/leaderboard" component={Leaderboard} />
              </div>
            )}
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ loginUser }) {
  return {
    loading: loginUser === null,
    loginUser,
  };
}

export default connect(mapStateToProps)(App);
