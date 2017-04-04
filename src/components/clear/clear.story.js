import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import Clear from './clear';

const styles = {
  padding: '20px',
  'backgroundColor': '#deecee',
  'height': '80vh'
};

storiesOf('Clear', module)
  .addDecorator(getStory => (
    <div style={styles}>{getStory()}</div>
  ))
  .add('default', () => (
    <Clear/>
  ));

