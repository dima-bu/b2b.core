import React from 'react'
import Icon from 'react-icon-base';
import style from './lock.less';

const Lock = props => {

  let theme = props.theme || 'default';

  return (<Icon viewBox="0 0 17 20" {...props} className={style[theme]}>
    <path d="M8.5,3.8c2.1,0,3.7,0.7,3.7,3.7H16c0-5-3.3-7.4-7.4-7.4S1.1,2.5,1.1,7.5h3.7C4.8,4.5,6.5,3.8,8.5,3.8z"/>
    <rect x="1" y="6.5" width="4" height="5.4"/>
    <rect x="12" y="6.5" width="4" height="5.4"/>
    <path d="M17,18c0,1.1-0.9,2-2,2H2c-1.1,0-2-0.9-2-2v-6c0-1.1,0.9-2,2-2h13c1.1,0,2,0.9,2,2V18z"/>
  </Icon>)
};

export default Lock;
