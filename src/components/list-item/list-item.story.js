import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import ListItem from './list-item';

const name = 'Эконом';
const id = 324234;

const styles = {
  padding: '20px',
  'backgroundColor': '#deecee',
  'height': '80vh'
};

storiesOf('ListItem', module)
  .addDecorator(getStory => (
    <div style={styles}>{getStory()}</div>
  ))
  .add('default', () => (
    <ListItem name={name} />
  ))
  .add('active', () => (
    <ListItem name={name} active />
  ))
  .add('onClickHandler', () => (
    <ListItem name={name} id={id} onClickHandler={action('onClickHandler')} />
  ));
