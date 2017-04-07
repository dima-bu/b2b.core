import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import Button from './button';


const sizes = ['sm', 'md', 'lg'];
const themes = ['primary', 'danger'];
const full = [];

sizes.forEach(size => {
  themes.forEach(theme => {
    full.push({
      size: size,
      theme: theme
    })
  })
});

const stories = storiesOf('Button', module);

storiesOf('Button', module)

full.forEach(fullItem => {
  stories.add(`${fullItem.size} ${fullItem.theme}`, () => (
    <Button
      caption='Войти'
      theme={fullItem.theme}
      size={fullItem.size}
    />
  ))
});

stories.add('click handler', () => (
    <Button caption='Button' onClick={action('clicked')} />
));
