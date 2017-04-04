import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import RoundButton from './round-button';
import Pen from 'components/SVG/pen/pen';
import Delete from 'components/SVG/delete/delete';

const styles = {
  padding: '20px',
  'backgroundColor': '#deecee',
  'height': '80vh'
};

storiesOf('RoundButton', module)
  .addDecorator(getStory => (
    <div style={styles}>{getStory()}</div>
  ))
  .add('default', () => (
      <RoundButton/>
  ))
  .add('danger with svg', () => (
    <RoundButton theme="danger">
      <Delete/>
    </RoundButton>
  ))
  .add('default with svg', () => (
    <RoundButton>
      <Pen/>
    </RoundButton>
  ))

