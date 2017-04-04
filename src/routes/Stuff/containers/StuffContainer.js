import {connect} from 'react-redux';
import {loadGroups, selectGroup} from '../modules/stuff';
import Stuff from '../components/Stuff';

const mapDispatchToProps = {
  loadGroups: loadGroups,
  selectGroup: selectGroup
};

const mapStateToProps = (state) => ({
  isLoadingGroups: state.stuff.isLoadingGroups,
  groups: state.stuff.groups,
  employees: state.stuff.employees,
  loadError: state.stuff.loadError,
  activeGroupId: state.stuff.activeGroupId
});

export default connect(mapStateToProps, mapDispatchToProps)(Stuff);
