import React from 'react';
import {storiesOf} from '@kadira/storybook';

import Input from './input';

const decoratorStyles = {
  maxWidth: '300px',
  padding: '40px'
};

storiesOf('Input', module)
  .addDecorator(getStory => (
    <div style={decoratorStyles}>{getStory()}</div>
  ))

  .add('default', () => (
    <Input />
  ))

  .add('placeholder', () => (
    <Input placeholder='Input your text' />
  ))

  .add('disabled state', () => (
    <Input disabled />
  ))

  .add('disabled with placeholder', () => (
    <Input placeholder='Input your text' disabled />
  ))

  .add('with value', () => (
    <Input input={{value: '123'}} />
  ))

  .add('error state', () => (
    <Input
      meta={{
        touched: true,
        error: 'Эл. почта должна быть вида'
      }}
      />
  ))

  .add('password type', () => (
    <Input type='password' />
  ))

  .add('simple theme', () => (
    <Input theme='simple' input={{value: '123'}} />
  ))

  .add('simple theme placeholder', () => (
    <Input theme='simple' placeholder='Input your text' />
  ));
