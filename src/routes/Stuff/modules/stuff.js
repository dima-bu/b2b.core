import API from '../../../lib/api';

// ------------------------------------
// Constants
// ------------------------------------
export const WAITING_GROUPS = 'WAITING_GROUPS';
export const LOAD_GROUPS = 'LOAD_GROUPS';
export const SET_GROUPS = 'SET_GROUPS';
export const FAIL_LOAD_GROUPS = 'FAIL_LOAD_GROUPS';
export const SELECT_GROUP = 'SELECT_GROUP';
export const LOAD_EMPLOYEES = 'LOAD_EMPLOYEES';
export const SELECT_EMPLOYEE = 'SELECT_EMPLOYEE';
export const LOAD_EMPLOYEE = 'LOAD_EMPLOYEE';
export const LOCK_EMPLOYEE = 'LOCK_EMPLOYEE';
export const UNLOCK_EMPLOYEE = 'UNLOCK_EMPLOYEE';
export const TURN_ON_EDITING = 'TURN_ON_EDITING';
export const TURN_OFF_EDITING = 'TURN_OFF_EDITING';
export const EDIT_EMPLOYEE = 'EDIT_EMPLOYEE';


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
        dispatch(selectGroup(data[0].groupId));
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

export const loadEmployees = (employees) => {
  return ({type: LOAD_EMPLOYEES, employees: employees});
};

export const setFailLoadGroups = (loadError) => {
  return ({type: SET_GROUPS, loadError: loadError});
};

export const selectGroup = (groupId) => {

  return (dispatch, getState) => {

    dispatch({type: SELECT_GROUP, activeGroupId: groupId});
    //началась загрузка
    return API.GetEmployees(groupId).then(data => {
        dispatch(loadEmployees(data));
        if (getState().stuff.activeEmployeeId) {
          dispatch(selectEmployee(getState().stuff.activeEmployeeId));
        } else {
          dispatch(selectEmployee(data[0].employeeId));
        }
        //закончилась загрузка
      },
      (error) => {console.log(error)}
    );
  };
};

export const selectEmployee = (activeEmployeeId) => {

  return (dispatch, getState) => {

    const activeGroupId = getState().stuff.activeGroupId;
    dispatch({type: SELECT_EMPLOYEE, activeEmployeeId: activeEmployeeId});
    dispatch(turnOffEditing());
    //началась загрузка
    return API.GetEmployee(activeEmployeeId, activeGroupId).then(employee => {
        dispatch(loadEmployee(employee));
        //закончилась загрузка
      },
      (error) => {console.log(error)}
    );
  };
};

export const loadEmployee = (employee) => {
  return ({type: LOAD_EMPLOYEE, employee: employee});
};

export const turnOnEditing = () => {
  return ({type: TURN_ON_EDITING});
};

export const turnOffEditing = () => {
  return ({type: TURN_OFF_EDITING});
};

export const lockEmployee = (employeeId) => {
  return (dispatch, getState) => {
    const activeGroupId = getState().stuff.activeGroupId;
    return API.LockEmployee(employeeId, activeGroupId).then(() => {
        dispatch({type: LOCK_EMPLOYEE, employeeId: employeeId});
      },
      (error) => {console.log(error)}
    );
  };
};

export const unlockEmployee = (employeeId) => {
  return (dispatch, getState) => {
    const activeGroupId = getState().stuff.activeGroupId;
    return API.UnlockEmployee(employeeId, activeGroupId).then(() => {
        dispatch({type: UNLOCK_EMPLOYEE, employeeId: employeeId});
      },
      (error) => {console.log(error)}
    );
  };
};

export const editEmployee = (employee) => {
  debugger;
  return (dispatch, getState) => {
    const activeGroupId = getState().stuff.activeGroupId;
    const activeEmployeeId = getState().stuff.activeEmployeeId;
    return API.EditEmployee(employee, activeEmployeeId, activeGroupId).then(() => {
        dispatch(selectGroup(activeGroupId));
      },
      (error) => {console.log(error)}
    );
  };
};


export const actions = {
  loadGroups,
  setFailLoadGroups,
  setGroups,
  selectGroup,
  loadEmployees,
  selectEmployee,
  loadEmployee,
  lockEmployee,
  unlockEmployee,
  turnOnEditing,
  turnOffEditing,
  editEmployee
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
  [LOAD_EMPLOYEES]: (state, action) => Object.assign({}, state, {employees: action.employees}),
  [SELECT_EMPLOYEE]: (state, action) => Object.assign({}, state, {activeEmployeeId: action.activeEmployeeId}),
  [LOAD_EMPLOYEE]:  (state, action) => Object.assign({}, state, {employee: action.employee}),
  [LOCK_EMPLOYEE]: (state, action) => {

    const index = state.employees.findIndex(item => {
      return item.employeeId === action.employeeId
    });

    if(index >= 0) {
      state.employees[index].locked = true;
    }

    state.employee.locked = true;
    return  Object.assign({}, state);
  },
  [UNLOCK_EMPLOYEE]: (state, action) => {
    const index = state.employees.findIndex(item => {
      return item.employeeId === action.employeeId
    });

    if(index >= 0) {
      state.employees[index].locked = false;
    }
    state.employee.locked = false;
    return  Object.assign({}, state);
  },
  [TURN_ON_EDITING]: (state) => Object.assign({}, state, {isEditing: true}),
  [TURN_OFF_EDITING]: (state) => Object.assign({}, state, {isEditing: false}),
};

// ------------------------------------
// Reducer
// ------------------------------------

const initialState = {
  isLoadingGroups: false,
  groups: [],
  employees: [],
  activeGroupId: null,
  activeEmployeeId: null,
  employee: {},
  loadError: '',
  isEditing: false
};

export default function stuffReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
