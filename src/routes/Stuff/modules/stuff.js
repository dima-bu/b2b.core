import API from '../../../lib/api';

// ------------------------------------
// Constants
// ------------------------------------
export const WAITING_GROUPS = 'WAITING_GROUPS';
export const LOAD_GROUPS = 'LOAD_GROUPS';
export const SET_GROUPS = 'SET_GROUPS';
export const FAIL_LOAD_GROUPS = 'FAIL_LOAD_GROUPS';
export const SELECT_GROUP = 'SELECT_GROUP';
export const SET_EMPLOYEES = 'SET_EMPLOYEES';
// ------------------------------------
// Actions
// ------------------------------------

export const loadGroups = () => {
  return (dispatch, getState) => {

    // const loginName = getState().login.loginName;
    // const passwordHASH = getState().login.passwordHASH;
    const loginName = 'admin';
    const passwordHASH =  'admin';

    dispatch({type: WAITING_GROUPS});
    return API.getGroups(loginName, passwordHASH).then(data => {
        dispatch({type: LOAD_GROUPS});
        dispatch(setGroups(data));
      },
      () => {
        dispatch(setFailLoadGroups('Ошибка загрузки'));
      }
    );
  };
};

export const setGroups = (groups) => {
  return ({type: SET_GROUPS, groups: groups});
};

export const setEmployees = (employees) => {
  return ({type: SET_EMPLOYEES, employees: employees});
};


export const setFailLoadGroups = (loadError) => {
  return ({type: SET_GROUPS, loadError: loadError});
};

export const selectGroup = (groupId) => {

  return (dispatch, getState) => {

    dispatch({type: SELECT_GROUP, activeGroupId: groupId});
    //началась загрузка
    debugger;
    return API.GetEmployees(groupId).then(data => {
        debugger;
        dispatch(setEmployees(data));
        //закончилась загрузка
        //dispatch(setGroups(data));
      },
      () => {
        debugger;
        //ошибка загрузки
      }
    );
  };

};

export const actions = {
  loadGroups,
  setGroups,
  setFailLoadGroups,
  selectGroup,
  setEmployees
};

// ------------------------------------
// Action Handlers
// ------------------------------------

const ACTION_HANDLERS = {
  [WAITING_GROUPS]: (state) => Object.assign({}, state, {isLoadingGroups: true}),
  [SET_GROUPS]: (state, action) => Object.assign({}, state, {groups: action.groups}),
  [LOAD_GROUPS]: (state) => Object.assign({}, state, {isLoadingGroups: false}),
  [FAIL_LOAD_GROUPS]: (state, action) => Object.assign({}, state, {loadError: action.loadError}),
  [SELECT_GROUP]: (state, action) => Object.assign({}, state, {activeGroupId: action.activeGroupId}),
  [SET_EMPLOYEES]: (state, action) => Object.assign({}, state, {employees: action.employees}),
};

// ------------------------------------
// Reducer
// ------------------------------------

const initialState = {
  isLoadingGroups: false,
  groups: [],
  employees: [],
  activeGroupId: null,
  loadError: ''
};

export default function stuffReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
