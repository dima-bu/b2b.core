import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import StuffEmployeesList from './stuff-employees-list';

const items = [
  {
    "groupId": 1000007736672,
    "employeeId": 1000007948505,
    "lastName": "Бухал",
    "firstName": " Д.",
    "middleName": " Д.",
    "locked": false
  },
  {
    "groupId": 1000007736672,
    "employeeId": 1000007739590,
    "lastName": "Гинцяк",
    "firstName": "Юрий",
    "middleName": "Михайлович",
    "locked": false
  }, {
    "groupId": 1000007736672,
    "employeeId": 1000007739618,
    "lastName": "Константинов",
    "firstName": "Владимир",
    "middleName": "Владимирович",
    "locked": false
  }
];

const title = 'Состав группы';

const activeEmployeeId = 1000007739618;

const styles = {
  padding: '20px',
  'backgroundColor': '#deecee',
  'height': '80vh'
};

storiesOf('StuffEmployeesList', module)
  .addDecorator(getStory => (
    <div style={styles}>{getStory()}</div>
  ))
  .add('default', () => (
    <StuffEmployeesList items={items} title={title}  />
  ))
  .add('with active', () => (
    <StuffEmployeesList activeEmployeeId={activeEmployeeId} items={items} title={title}  />
  ))
  .add('with onClickHandler', () => (
    <StuffEmployeesList onClickHandler={action('onClickHandler')} items={items} title={title}  />
  ));
