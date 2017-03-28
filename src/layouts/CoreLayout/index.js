import CoreLayoutContainer from './containers/CoreLayoutContainer';
import reducer from './modules/core-layout';
import {injectReducer} from '../../store/reducers';

const CoreLayoutWrapper = {
  getComponent(store){
    injectReducer(store, {key: 'core', reducer});
    return CoreLayoutContainer
  }
};

export default CoreLayoutWrapper;
