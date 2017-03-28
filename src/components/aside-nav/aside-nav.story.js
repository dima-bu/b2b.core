import React, {Component, PropTypes} from 'react';
import {storiesOf, action} from '@kadira/storybook';
import AsideNav from './aside-nav';
import {Provider} from 'react-redux';
import createStore from './../../store/createStore';
import {HashRouter} from 'react-router';

const initialState = {};
const store = createStore(initialState);

const items = [
  {
    pathname: '/',
    title: 'Home'
  },
  {
    pathname: '/login',
    title: 'Login'
  }
];

storiesOf('AsideNav', module)
  .add('default', () => (
    <Provider store={store}>
      <AsideNav items={items} />
    </Provider>
  ));
