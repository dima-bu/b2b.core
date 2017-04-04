import React from 'react'
import Icon from 'react-icon-base';
import style from './clear.less';
import cx from 'classnames';

const Clear = props => {

  let theme = props.theme || 'default';
  let size = props.size || 'md';

  return (
    <Icon viewBox="0 0 17 20" {...props} className={cx(style[theme], style[size])}>

    </Icon>
  )
};

export default Clear;
