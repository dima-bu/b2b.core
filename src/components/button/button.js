import React, {Component, PropTypes} from 'react';
import cx from 'classnames';
import style from './button.less';

export default class Button extends Component {
  static propTypes = {
    type: PropTypes.oneOf(['button', 'submit']),
    onClick: PropTypes.func,
    caption: PropTypes.string,
    disabled: PropTypes.bool,
    full: PropTypes.bool,
    theme: PropTypes.oneOf([
      'primary',
      'danger',
      'primary-outline',
      'danger-outline',
      'success-outline',
      'primary-transparent'
    ]),
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    'data-name': PropTypes.string
  }

  static defaultProps = {
    full: true,
    type: 'button',
    onClick: () => {},
    caption: '',
    disabled: false,
    theme: 'primary',
    size: 'md',
    'data-name': null
  }

  render () {
    const {type, onClick, caption, disabled, theme, size, full} = this.props;
    const dataName = this.props['data-name'];
    return (
      <button
        data-name={dataName}
        className={cx(style.button, style[theme], style[size], (full ? style.full : ''))}
        {...{type, onClick, disabled}}
        >
        {caption}
      </button>
    );
  }
}
