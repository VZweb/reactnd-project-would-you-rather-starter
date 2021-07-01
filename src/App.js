import './App.css';
import React, { Component, Fragment } from 'react'
import Login from './pages/Login'
import ViewQuestion from './pages/ViewQuestion'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { handleInitialData } from './actions/shared'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import Home from './pages/Home'
import loginUser from './reducers/loginUser';
import Nav from './Nav'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
 render() {
   return (
  //    <BrowserRouter>   
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //     <Route path="/login" component={Login} />
  //   </div>


  //  </BrowserRouter>
  <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
          <Nav />
            {this.props.loading === true
              ? null
              : <div>
                  <Route path='/' exact component={Home} />
                  <Route path='/login' component={Login} />
                  <Route path="/questions/:question_id" component={ViewQuestion} />
                </div>}
          </div>
        </Fragment>
      </Router>
   ) 
 }
}

function mapStateToProps ({ loginUser }) {
  return {
    loading: loginUser === null
  }
}

export default connect(mapStateToProps)(App)