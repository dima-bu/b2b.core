import React, {Component, PropTypes} from 'react';
import style from './list-item.less';
import cx from 'classnames';

export default class ListItem extends Component {
  static propTypes = {
    name: PropTypes.string,
    size: PropTypes.oneOf(['md']),
    active: PropTypes.bool,
    id: PropTypes.number.isRequired,
    onClickHandler: PropTypes.func,
    keyId: PropTypes.string
  };

  static defaultProps = {
    name: '',
    size: 'md',
    active: false,
    onClickHandler: () => {},
    keyId: 'id'
  };

  render () {
    const {name, active, onClickHandler, size} = this.props;
    return (
      <div onClick={onClickHandler} className={cx(style.wrapper, style[size+'-size'], active ? style.active : '')}>
        <div className={style.name}>{name}</div>
      </div>
    )
  }
}
