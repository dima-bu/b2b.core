import API from '../../../lib/api';

// ------------------------------------
// Constants
// ------------------------------------
export const WAITING_GROUPS = 'WAITING_GROUPS';
export const LOAD_GROUPS = 'LOAD_GROUPS';
export const SET_GROUPS = 'SET_GROUPS';
export const FAIL_LOAD_GROUPS = 'FAIL_LOAD_GROUPS';


// ------------------------------------
// Actions
// ------------------------------------

export const loadGroups = () => {
  return (dispatch, getState) => {

    const loginName = getState().login.loginName;
    const passwordHASH = getState().login.passwordHASH;

    debugger;

    dispatch({type: WAITING_GROUPS});
    return API.getGroups(loginName, passwordHASH).then(resp => {
        dispatch({type: LOAD_GROUPS});
        dispatch(setGroups(resp));
      },
      error => {
        dispatch(setFailLoadGroups('Ошибка загрузки'));
      }
    );
  };
};

export const setGroups = (groups) => {
  return ({type: SET_GROUPS, groups: groups});
};

export const setFailLoadGroups = (loadError) => {
  return ({type: SET_GROUPS, loadError: loadError});
};

export const actions = {
  loadGroups,
  setGroups,
  setFailLoadGroups
};


// ------------------------------------
// Action Handlers
// ------------------------------------

const ACTION_HANDLERS = {
  [WAITING_GROUPS]: (state) => Object.assign({}, state, {isLoadingGroups: true}),
  [SET_GROUPS]: (state, action) => Object.assign({}, state, {groups: action.groups}),
  [LOAD_GROUPS]: (state) => Object.assign({}, state, {isLoadingGroups: false}),
  [FAIL_LOAD_GROUPS]: (state, action) => Object.assign({}, state, {loadError: action.loadError})
};

// ------------------------------------
// Reducer
// ------------------------------------

const initialState = {
  isLoadingGroups: false,
  groups: [],
  loadError: ''
};

export default function stuffReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
