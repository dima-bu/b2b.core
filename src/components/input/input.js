import React, {Component, PropTypes} from 'react';
import cx from 'classnames';
import styles from './input.less';
import pure from './../../decorators/pure';

@pure
export default class Input extends Component {
  static propTypes = {
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    type: PropTypes.oneOf(['text', 'password', 'hidden', 'email']),
    input: PropTypes.shape({
      value: PropTypes.string.isRequired,
      onChange: PropTypes.func.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired,
    meta: PropTypes.shape({
      error: PropTypes.string,
      touched: PropTypes.bool
    }),
    theme: PropTypes.oneOf(['default', 'simple', 'hero']),
    'data-name': PropTypes.string
  }

  static defaultProps = {
    placeholder: '',
    disabled: false,
    type: 'text',
    meta: {
      touched: false,
      error: ''
    },
    theme: 'default',
    'data-name': null
  }

  render () {
    const {placeholder, disabled, type, input, meta, theme} = this.props;
    const dataName = this.props['data-name'];
    const isError = meta.touched && meta.error;

    return (
      <div className={styles.wrapper}>
        {isError &&
        <p
          className={styles.error}
          data-name='error'
        >
          {meta.error}
        </p>
        }
        <input
          {...input}
          {...{placeholder, disabled, type}}
          data-name={dataName}
          className={cx(styles.input, styles[theme])}
          />
      </div>
    );
  }
}
