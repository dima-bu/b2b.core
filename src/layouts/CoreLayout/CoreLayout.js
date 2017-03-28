import React from 'react';
import Header from '../../components/Header';
import AsideNav from '../../components/aside-nav/aside-nav';
import styles from './CoreLayout.less';

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

export const CoreLayout = ({children}) => (
  <div className={styles.coreWrapper}>
    <AsideNav items={items}/>
    <div className={styles.container}>
      {children}
    </div>
  </div>
);

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
};

export default CoreLayout;
