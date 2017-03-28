import API, {api, getBASE64SHA256} from '../../../lib/api';
import {browserHistory} from 'react-router';
// ------------------------------------
// Constants
// ------------------------------------

export const LOGGED_IN = 'LOGGED_IN';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const SET_LOGIN_NAME = 'SET_LOGIN_NAME';
export const SET_PASSWORD = 'SET_PASSWORD';
export const SET_USER_NAME = 'SET_USER_NAME';

// ------------------------------------
// Actions
// ------------------------------------

export const setLoginName = (loginName) => {
  return ({type: SET_LOGIN_NAME, loginName: loginName});
};

export const setPassword = (password) => {
  return ({type: SET_PASSWORD, password: password});
};

export const setUserName = (userName) => {
  return ({type: SET_USER_NAME, userName: userName});
};

export const LogIn = (credentials) => {
  return (dispatch, getState) => {
    const loginName = credentials.name;
    const passwordHASH = credentials.password;
    return API.autorization(loginName, passwordHASH).then(resp => {
      dispatch({type: LOGGED_IN});
      dispatch(setLoginName(loginName));
      dispatch(setPassword(passwordHASH));
      browserHistory.push('stuff');
    },
    error => {
      dispatch({type: LOGIN_FAILED});
      console.log(error);
    }
     );
  };
};

// export const doubleAsync = () => {
//   return (dispatch, getState) => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         dispatch({
//           type    : COUNTER_DOUBLE_ASYNC,
//           payload : getState().counter
//         })
//         resolve()
//       }, 200)
//     })
//   }
// }

export const actions = {
  setLoginName,
  setPassword,
  LogIn
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [LOGGED_IN]: (state) => Object.assign({}, state, {loggedIn: true}),
  [LOGIN_FAILED]: (state) => Object.assign({}, state, {errorMessage: 'Неверный логин или пароль'}),
  [SET_LOGIN_NAME]: (state, action) => Object.assign({}, state, {loginName: action.loginName}),
  [SET_PASSWORD]: (state, action) => Object.assign({}, state, {passwordHASH: action.password}),
  [SET_USER_NAME]: (state, action) => Object.assign({}, state, {userName: action.userName})
  //[SET_PASSWORD] : (state, action) => Object.assign({}, state, {passwordHASH: getBASE64SHA256(action.password)}),
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  loggedIn: false,
  errorMessage: null,
  loginName: '',
  passwordHASH: '',
  path: '/api/contractors/1000006867451',
  userName: ''
};

export default function loginReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
