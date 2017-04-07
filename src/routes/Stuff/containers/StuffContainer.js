import {connect} from 'react-redux';
import {loadGroups, selectGroup, selectEmployee, lockEmployee, unlockEmployee, editEmployee, turnOnEditing, turnOffEditing} from '../modules/stuff';
import Stuff from '../components/Stuff';

const mapDispatchToProps = {
  loadGroups: loadGroups,
  selectGroup: selectGroup,
  selectEmployee: selectEmployee,
  lockEmployee: lockEmployee,
  unlockEmployee: unlockEmployee,
  turnOnEditing: turnOnEditing,
  turnOffEditing: turnOffEditing,
  editEmployee: editEmployee
};

const mapStateToProps = (state) => ({
  isLoadingGroups: state.stuff.isLoadingGroups,
  groups: state.stuff.groups,
  employees: state.stuff.employees,
  loadError: state.stuff.loadError,
  activeGroupId: state.stuff.activeGroupId,
  activeEmployeeId: state.stuff.activeEmployeeId,
  locked: state.stuff.employee.locked,
  employee: state.stuff.employee,
  isEditing: state.stuff.isEditing
});

export default connect(mapStateToProps, mapDispatchToProps)(Stuff);
