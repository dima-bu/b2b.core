import React from 'react';
import AsideNav from '../../../components/aside-nav/aside-nav';
import styles from './CoreLayout.less';
import {connect} from 'react-redux';

const items = [
  {
    pathname: '/stuff',
    title: 'Сотрудники'
  }
];

export const CoreLayout = ({children, isOpenedAsideNav, openAsideNav, closeAsideNav}) => (

  <div className={styles.coreWrapper}>
    <AsideNav items={items} isOpen={isOpenedAsideNav} onOpenMenu={openAsideNav} onCloseMenu={closeAsideNav}/>
    <div className={styles.container}>
      {children}
    </div>
  </div>
);

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
};

export default CoreLayout;
