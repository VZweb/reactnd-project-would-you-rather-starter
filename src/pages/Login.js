import React from  'react';
import { loginAction } from '../actions/loginActions';
import { connect } from 'react-redux';

class Login extends React.Component{
    state = {
        user:''
    }
     handleLogin= (e) => {
        e.preventDefault();     
         
        const { dispatch } = this.props;        
        dispatch(loginAction(this.state.user))
     
    }
    selectUser = (loggedInuser) => this.setState(()=>({user: loggedInuser}));
     
    render() {
      
        return(       
            <div className="panel">
            <h1>Welcome to the Would you Rather App !</h1>
            <form className="panel-body" onSubmit={this.handleLogin}>
                <div className="react-redux-icon"></div>
                <h2 className="center">Login</h2>
                 
                        <select onChange={(e)=>this.selectUser(e.target.value)}>     
                            <option>Select User</option>
                            {
                                Object.values(this.props.users).map(user =>(
                                    <option key={user.id} value={user.id}>{user.name}</option>
                                ))
                            }
                        </select>
                        <button type="submit"> Submit </button>
                
                    
            </form>   
          </div>
        )
    }
    
          
    
}
const mapStateToProps =({users})=>({ users});

export{Login};
export default connect(mapStateToProps)(Login);