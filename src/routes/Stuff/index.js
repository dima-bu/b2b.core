import {injectReducer} from '../../store/reducers';

export default (store) => ({
  path : 'stuff',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
     and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
       dependencies for bundling   */
      const Stuff = require('./containers/StuffContainer').default;
      const reducer = require('./modules/stuff').default;

      /*  Add the reducer to the store on key 'stuff'  */
      injectReducer(store, {key: 'stuff', reducer});

      /*  Return getComponent   */
      cb(null, Stuff);

      /* Webpack named bundle   */
    }, 'stuff');
  }
});
