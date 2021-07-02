const LOGOUT_USER = "LOGOUT_USER";
const AUTHORIZE_USER = "AUTHORIZE_USER";

export default function loginUser(state = {}, action){
    switch(action.type){
        case AUTHORIZE_USER: 
            return action.user;
        case LOGOUT_USER:
            return '';
        default:
            return state;
    }
}