import {connect} from 'react-redux';
import {loadGroups, selectGroup, selectEmployee} from '../modules/stuff';
import Stuff from '../components/Stuff';

const mapDispatchToProps = {
  loadGroups: loadGroups,
  selectGroup: selectGroup,
  selectEmployee: selectEmployee
};

const mapStateToProps = (state) => ({
  isLoadingGroups: state.stuff.isLoadingGroups,
  groups: state.stuff.groups,
  employees: state.stuff.employees,
  loadError: state.stuff.loadError,
  activeGroupId: state.stuff.activeGroupId,
  activeEmployeeId: state.stuff.activeEmployeeId,
  employee: state.stuff.employee
});

export default connect(mapStateToProps, mapDispatchToProps)(Stuff);
