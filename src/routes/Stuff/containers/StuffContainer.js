import {connect} from 'react-redux';
import {loadGroups} from '../modules/stuff';
import Stuff from '../components/Stuff';

const mapDispatchToProps = {
  loadGroups: loadGroups
};

const mapStateToProps = (state) => ({
  isLoadingGroups: state.stuff.isLoadingGroups,
  groups: state.stuff.groups,
  loadError: state.stuff.loadError
});

export default connect(mapStateToProps, mapDispatchToProps)(Stuff);
