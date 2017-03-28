import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import Button from './button';

storiesOf('Button', module)

  .add('primary', () => (
    <Button
      caption='Войти'
      theme='primary'
      size='lg'
    />
  ))

  .add('click handler', () => (
    <Button caption='Button' onClick={action('clicked')} />
  ));
