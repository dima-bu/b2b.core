import React from 'react';
import {IndexLink, Link} from 'react-router';
import Button from '../button/button';
import AsideNav from '../aside-nav/aside-nav';

const items = [
  {
    pathname: '/login',
    title: 'Login'
  },
  {
    pathname: '/counter',
    title: 'Counter'
  }
];

export const Header = () => (
  <div>
    <h1>React Redux Starter Kit</h1>
    <Button
      caption='dfsdfsd'
      theme='primary'
    />
    <AsideNav items={items}/>
  </div>
);

export default Header;
