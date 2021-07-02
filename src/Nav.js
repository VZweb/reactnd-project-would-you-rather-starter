import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { logoutAction } from './actions/loginActions'

class Nav extends React.Component{

  logoutHandler() {
    this.props.logoutAction();
   }

  render() {
    const {loginUser}= this.props;
    return (
      <nav className='nav'>
        <ul>
          <li>
            <NavLink to='/' exact activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/add' activeClassName='active'>
              Add
            </NavLink>
          </li>
          <li>
            <NavLink to='/leaderboard' activeClassName='active'>
              Leaderboard
            </NavLink>
          </li>
          <li>
            <NavLink to='/' activeClassName='inactive' onClick={()=>this.logoutHandler()}>
              Logout {loginUser}
            </NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}
const mapStateToProps =({loginUser})=>({loginUser});
const mapDispatchToProps = dispatch => ({
  logoutAction: () => dispatch(logoutAction())
});
export default connect(mapStateToProps, mapDispatchToProps)(Nav);
