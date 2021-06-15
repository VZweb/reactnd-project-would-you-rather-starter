import { combineReducers } from 'redux'
import users from './users'
import loginUser from './loginUser'
import questions from './questions'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
    users,
    questions,
    loadingBar: loadingBarReducer,
    loginUser,
})