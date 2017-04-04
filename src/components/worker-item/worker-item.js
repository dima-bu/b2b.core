import React, {Component, PropTypes} from 'react';
import style from './worker-item.less';
import cx from 'classnames';

export default class WorkerItem extends Component {
  static propTypes = {
    name: PropTypes.string,
    isLock: PropTypes.bool,
    active: PropTypes.bool,
    value: PropTypes.number,
    id: PropTypes.number,
    onClickHandler: PropTypes.func
  };

  static defaultProps = {
    name: '',
    isLock: false,
    value: null,
    active: false,
    onClickHandler: () => {}
  };

  render () {
    const {name, isLock, active, value, onClickHandler} = this.props;
    return (
      <div onClick={onClickHandler} className={cx(style.wrapper, active ? style.active : '', isLock ? style.isLock : '')}>
        <div className={style.name}>{name}</div>
        <div className={style.value}>{value}</div>
      </div>
    )
  }
}
