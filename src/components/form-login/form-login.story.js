import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import FormLogin from './form-login';
import {Provider} from 'react-redux';
import createStore from './../../store/createStore';
const onSubmit = callback => () => callback();

const initialState = {};

const store = createStore(initialState);

storiesOf('FormLogin', module)
  .addDecorator(getStory => (
    <div style={{width: '450px', padding: '40px'}}>{getStory()}</div>
  ))
  .add('default', () => (
    <Provider store={store}>
      <FormLogin onSubmit={onSubmit(action('Form was submitted'))} />
    </Provider>
  ));
