import React,{ Component } from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import Nav from '../Nav'
import QuestionsTabs from '../components/QuestionTabs'

class Home extends Component {
    
    render() {
    const {loginUser }= this.props;
   
    if(!loginUser.length){
      return <Login />
   }
   return(
       <div>
    <QuestionsTabs loginUser />
    </div>
    )
    }
}

function mapStateToProps({loginUser}){
    return {
        loginUser, 
        };
    }

export default connect(mapStateToProps)(Home);