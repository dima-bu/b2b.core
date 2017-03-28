import {combineReducers} from 'redux';
import locationReducer from './location';
import {reducer as form} from 'redux-form';

export const makeRootReducer = (asyncReducers) => {
  console.log('sdfsdfsdf');
  return combineReducers({
    form: form,
    location: locationReducer,
    ...asyncReducers
  });
};

export const injectReducer = (store, {key, reducer}) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return;

  store.asyncReducers[key] = reducer;
  store.replaceReducer(makeRootReducer(store.asyncReducers));
};

export default makeRootReducer;
