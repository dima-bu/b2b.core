import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import WorkerItem from './worker-item';

const name = 'Алексеев Петр Михайлович';
const value = 121;
const id = 1523335412305673;

const styles = {
  padding: '20px',
  'backgroundColor': '#deecee',
  'height': '80vh'
};

storiesOf('WorkerItem', module)
  .addDecorator(getStory => (
    <div style={styles}>{getStory()}</div>
  ))
  .add('default', () => (
     <WorkerItem name={name} value={value} />
  ))
  .add('active', () => (
    <WorkerItem name={name} active />
  ))
  .add('isLock', () => (
    <WorkerItem name={name} isLock />
  ))
  .add('onClickHandler', () => (
    <WorkerItem name={name} id={id} onClickHandler={action('onClickHandler')} />
  ));
