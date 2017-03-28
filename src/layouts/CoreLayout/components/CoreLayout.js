import React from 'react';
import AsideNav from '../../../components/aside-nav/aside-nav';
import styles from './CoreLayout.less';
import {connect} from 'react-redux';

const items = [
  {
    pathname: '/login',
    title: 'Login'
  },
  {
    pathname: '/counter',
    title: 'Counter'
  },
  {
    pathname: '/stuff',
    title: 'Сотрудники'
  }
];

export const CoreLayout = ({children, isOpenedAsideNav, openAsideNav, closeAsideNav, loggedIn}) => (

  <div className={styles.coreWrapper}>
    {loggedIn &&
      <AsideNav items={items} isOpen={isOpenedAsideNav} onOpenMenu={openAsideNav} onCloseMenu={closeAsideNav}/>
    }
    <div className={styles.container}>
      {children}
    </div>
  </div>
);

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
};

export default CoreLayout;
