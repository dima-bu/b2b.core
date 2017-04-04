import React from 'react'
import Icon from 'react-icon-base';
import style from './pen.less';
import cx from 'classnames';

const Pen = props => {

  let theme = props.theme || 'default';
  let size = props.size || 'md';

  return (
    <Icon viewBox="0 0 17 17" {...props} className={cx(style[theme], style[size])}>
      <path d="M16.4,4.1l-3.5-3.5c-0.8-0.8-2.1-0.8-2.8,0L1.6,9.1l-1.4,7.1l0.7,0.7l7.1-1.4l8.5-8.5C17.2,6.2,17.2,4.9,16.4,4.1z
	      M6.9,13.6l-4.4,0.9l0.9-4.4L11.5,2L15,5.5L6.9,13.6z"/>
      <rect x="3.1" y="11" transform="matrix(0.7071 0.7071 -0.7071 0.7071 9.9631 -0.966)" width="6" height="1"/>
      <rect x="1.1" y="13.4" transform="matrix(0.7071 0.7071 -0.7071 0.7071 10.9276 2.3624)" width="3" height="2"/>
      <rect x="9.2" y="2.3" transform="matrix(0.7071 0.7071 -0.7071 0.7071 7.9986 -4.7087)" width="1" height="10"/>
  </Icon>
  )
};

export default Pen;
