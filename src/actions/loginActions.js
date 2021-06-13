const LOGOUT_USER = "LOGOUT_USER";
const AUTHORIZE_USER = "AUTHORIZE_USER";

export const loginAction =(user)=> ({type: AUTHORIZE_USER, user});
export const logoutAction = () => ({ type:LOGOUT_USER});
  