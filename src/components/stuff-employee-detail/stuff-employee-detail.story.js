import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import StuffEmployeeDetail from './stuff-employee-detail';

const item = {
    "employeeId": 1000007948505,
    "lastName": "Бухал",
    "firstName": " Д.",
    "middleName": " Д.",
    "locked": false,
    "phones": ['+7923225865']
};

const title = 'Сведения';

const styles = {
  padding: '20px',
  'backgroundColor': '#deecee',
  'height': '80vh'
};

const {employeeId, lastName, firstName, middleName, locked, phones}  = item;

storiesOf('StuffEmployeeDetail', module)
  .addDecorator(getStory => (
    <div style={styles}>{getStory()}</div>
  ))
  .add('default', () => (
    <StuffEmployeeDetail title={title} />
  ))
  .add('with data', () => (
    <StuffEmployeeDetail
      title={title}
      employeeId={employeeId}
      lastName={lastName}
      firstName={firstName}
      middleName={middleName}
      phones={phones}
      locked
      />
  ));

