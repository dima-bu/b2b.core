import React, {Component, PropTypes} from 'react';
import cx from 'classnames';
import style from './switch-button.less';

export default class SwitchButton extends Component {
  static propTypes = {
    id             : PropTypes.string,
    name           : PropTypes.string,
    title          : PropTypes.string,
    label          : PropTypes.string,
    labelRight     : PropTypes.string,
    defaultChecked : PropTypes.bool,
    disabled       : PropTypes.bool,
    theme          : PropTypes.string,
    checked        : PropTypes.string,
    mode           : PropTypes.string,
    onChange       : PropTypes.func
  }

  static defaultProps = {
    id             : '',
    name           : 'switch-button',
    title          : '',
    label          : '',
    labelRight     : '',
    disabled       : false,
    defaultChecked : false,
    theme          : 'rsbc-switch-button-flat-round',
    checked        : null,
    mode           : "switch",
    onChange       : () => {}
  }

  render () {
    let id, label, labelRight,
      mode = this.props.mode || "switch";

    if( this.props.id === '' && this.props.name !== '' ) {
      id = this.props.name;
    }

    if( this.props.label !== '' ) {
      label = (
        <label htmlFor={id}>{this.props.label}</label>
      );
    }

    if( this.props.labelRight !== '' ) {
      labelRight = (
        <label htmlFor={id}>{this.props.labelRight}</label>
      );
    }

    if( [ 'switch', 'select' ].indexOf( mode ) < -1 ) {
      mode = "switch";
    }

    return (
      <div className={cx(style['rsbc-switch-button'], style['rsbc-mode-' + mode], style[this.props.theme], this.props.disabled ? style.disabled : '')}>
        {label}
        <input onChange={this.props.onChange}
               checked={this.props.checked}
               disabled={this.props.disabled}
               id={id} name={this.props.name}
               type="checkbox"
               value="1"/>
        <label htmlFor={id}>
        </label>
        {labelRight}
      </div>
    );
  }
}
