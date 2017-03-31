import {connect} from 'react-redux';
import {openAsideNav, closeAsideNav} from '../modules/core-layout';
import CoreLayout from '../components/CoreLayout';

const mapDispatchToProps = {
  openAsideNav: openAsideNav,
  closeAsideNav: closeAsideNav
};

const mapStateToProps = (state) => ({
  isOpenedAsideNav: state.core.isOpenedAsideNav
});

export default connect(mapStateToProps, mapDispatchToProps)(CoreLayout);

