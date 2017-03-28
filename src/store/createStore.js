import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import {logger} from 'redux-logger';
import {browserHistory} from 'react-router';
import makeRootReducer from './reducers';
import {updateLocation} from './location';

const translationsObject = {
  en: {
    application: {
      "LOGIN_ENTER": "Вход в кабинет контрагента",
      "STATUS_CAR_ASSIGNED": "Машина назначена",
      "STATUS_CAR_ARRIVED": "Машина ожидает",
      "STATUS_IN_PROGRESS": "Заказ выполняется",
      "STATUS_RESERVED": "ЗАКАЗ ЗАРЕЗЕРВИРОВАН"
    },
    date: {
      long: 'MMMM Do, YYYY'
    },
    export: 'Export %{count} items',
    export_0: 'Nothing to export',
    export_1: 'Export %{count} item',
    two_lines: 'Line 1<br />Line 2'
  },
  nl: {
    application: {
      title: 'Toffe app met i18n!',
      hello: 'Hallo, %{name}!'
    },
    date: {
      long: 'D MMMM YYYY'
    },
    export: 'Exporteer %{count} dingen',
    export_0: 'Niks te exporteren',
    export_1: 'Exporteer %{count} ding',
    two_lines: 'Regel 1<br />Regel 2'
  }
};

export default (initialState = {}) => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware = [thunk, logger];

  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = [];

  let composeEnhancers = compose;

  //if (__DEV__) {
  if (true) {
    const composeWithDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    if (typeof composeWithDevToolsExtension === 'function') {
      composeEnhancers = composeWithDevToolsExtension;
    }
  }

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createStore(
    makeRootReducer(),
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware),
      ...enhancers
    )
  );

  store.asyncReducers = {};

  // To unsubscribe, invoke `store.unsubscribeHistory()` anytime
  store.unsubscribeHistory = browserHistory.listen(updateLocation(store));


  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const reducers = require('./reducers').default;
      store.replaceReducer(reducers(store.asyncReducers));
    });
  }

  return store;
};
