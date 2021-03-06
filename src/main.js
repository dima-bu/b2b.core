import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store/createStore';
import AppContainer from 'containers/AppContainer';
import Config from 'lib/config';

// ========================================================
// Store Instantiation
// ========================================================
const initialState = window.___INITIAL_STATE__;
const store = createStore(initialState);

// ========================================================
// Render Setup
// ========================================================
const MOUNT_NODE = document.getElementById('root');

let render = () => {
  const routes = require('./routes/index').default(store);

   const LocalConfig = require('./../config/local.json');

  if (LocalConfig) {
      Config.assign(LocalConfig);

      // if (LocalConfig.lang) {
      //   lang = require(`./../src/i18/${LocalConfig.lang}.json`);
      // }

      // const reducer = require('./lib/lang/modules/lang').default;
      // injectReducer(store, { key: 'lang', reducer});

      const routes = require('./routes/index').default(store);

      // if (lang) {
      //    store.dispatch(setLang(lang));
      // }

    ReactDOM.render(
        <AppContainer store={store} routes={routes} />,
        MOUNT_NODE
      );
  }

  // TODO display error message to the user
  //console.error(error);

};

// This code is excluded from production bundle
if (__DEV__) {
  if (module.hot) {
    // Development render functions
    const renderApp = render;
    const renderError = (error) => {
      const RedBox = require('redbox-react').default;

      ReactDOM.render(<RedBox error={error} />, MOUNT_NODE);
    };

    // Wrap render in try/catch
    render = () => {
      try {
        renderApp();
      } catch (error) {
        console.error(error);
        renderError(error);
      }
    };

    // Setup hot module replacement
    module.hot.accept('./routes/index', () =>
      setImmediate(() => {
        ReactDOM.unmountComponentAtNode(MOUNT_NODE);
        render();
      })
    );
  }
}

// ========================================================
// Go!
// ========================================================
render();
