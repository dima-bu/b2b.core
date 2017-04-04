import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import StuffGroupsList from './stuff-groups-list';

const styles = {
  padding: '20px',
  'backgroundColor': '#deecee',
  'height': '80vh'
};

const title = "Тарифы";

const items = [
  {
    name: 'Эконом',
    id: 23
  },
  {
    name: 'Стандарт',
    id: 345
  }
];

const activeEmployeeId = 23;

storiesOf('StuffGroupsList', module)
  .addDecorator(getStory => (
    <div style={styles}>{getStory()}</div>
  ))
  .add('default', () => (
    <StuffGroupsList items={items} title={title}  />
  ))
  .add('with active', () => (
    <StuffGroupsList activeEmployeeId={activeEmployeeId} items={items} title={title}  />
  ))
  .add('with onClickHandler', () => (
    <StuffGroupsList onClickHandler={action('onClickHandler')} items={items} title={title}  />
  ));



