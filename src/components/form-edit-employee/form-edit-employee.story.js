import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import FormEditEmployee from './form-edit-employee';
import {Provider} from 'react-redux';
import createStore from './../../store/createStore';
const onSubmit = callback => () => callback();
const onTurnOffEditing = ()=>{};

const initialState = {};
const store = createStore(initialState);

const styles = {
  padding: '20px',
  'backgroundColor': '#deecee',
  'height': '80vh'
};

storiesOf('FormEditEmployee', module)
  .addDecorator(getStory => (
    <div style={styles}>{getStory()}</div>
  ))
  .add('default', () => (
    <Provider store={store}>
      <FormEditEmployee onSubmit={onSubmit(action('Form was submitted'))} onTurnOffEditing={onTurnOffEditing}/>
    </Provider>
  ));
