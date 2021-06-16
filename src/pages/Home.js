import React,{ Component } from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import Nav from '../Nav'

class Home extends Component {
    
    render() {
    const {loginUser }= this.props;
   
    if(!loginUser.length){
      return <Login />
   }
   return(
       <div>
    <Nav />
    <div>The user {loginUser} is logged in</div>
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