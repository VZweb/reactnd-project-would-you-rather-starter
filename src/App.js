import logo from './logo.svg';
import './App.css';
import React, { Component }  from 'react'
import Login from './pages/Login'
import { BrowserRouter, Route } from 'react-router-dom';
import { handleInitialData } from './actions/shared'
import { connect } from 'react-redux'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
 render() {

   return (
     <BrowserRouter>   
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Route path="/login" component={Login} />
    </div>


   </BrowserRouter>
   ) 
 }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)