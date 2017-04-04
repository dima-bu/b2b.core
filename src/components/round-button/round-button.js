import React, {Component, PropTypes} from 'react';
import cx from 'classnames';
import style from './round-button.less';

export default class RoundButton extends Component {
  static propTypes = {
    size: PropTypes.oneOf(['md', 'lg']),
    theme: PropTypes.oneOf([
      'primary',
      'danger'
    ]),
    onClick: PropTypes.func,
    'data-name': PropTypes.string
  };

  static defaultProps = {
    size: 'md',
    theme: 'primary',
    onClick: () => {},
    'data-name': null
  };

  render () {
    const {onClick, disabled, theme, size, children} = this.props;
    const dataName = this.props['data-name'];
    return (
      <button
        data-name={dataName}
        type="button"
        className={cx(style.button, style[theme], style[size])}
        {...{onClick, disabled}}
      >
        {children}
      </button>
    );
  }
}
