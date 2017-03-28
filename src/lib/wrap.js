import React from 'react';
import {Provider} from 'react-redux';
import {HashRouter} from 'react-router';
import {applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {logger} from 'redux-logger';
import makeRootReducer from './../store/reducers.js';
import createStore from './../store/createStore';

const middleware = [thunk, logger];
let composeEnhancers = compose;
const enhancers = [];

const initialState = {};

const store = createStore(initialState);

// const store = createStore(
//   makeRootReducer(),
//   initialState,
//   composeEnhancers(
//     applyMiddleware(...middleware),
//     ...enhancers
//   )
// );

export const wrap = child => {
  return (
    <Provider store={store}>
        {child}
    </Provider>
  );
};

export default wrap;
