import React, {Component, PropTypes} from 'react';
import cx from 'classnames';
import style from './stuff-employee-detail.less';
import SwitchButton from 'components/switch-button/switch-button.js';
import RoundButton from 'components/round-button/round-button.js';
import FormEditEmployee from 'components/form-edit-employee/form-edit-employee.js';
import Button from 'components/button/button.js';
import Pen from 'components/SVG/pen/pen';
import Delete from 'components/SVG/delete/delete';
import Input from 'components/input/input.js';
import pure from './../../decorators/pure';
import {Field, reduxForm} from 'redux-form';

import {tr} from 'lib/locale.js';

const InputSM = (props) => {
  return <Input {...props} size="sm"/>
};

@pure
@reduxForm({form: 'editEmployeeForm'})
export default class StuffEmployeeDetail extends Component {
  static propTypes = {
    title: PropTypes.string,
    lastName: PropTypes.string,
    firstName: PropTypes.string,
    middleName: PropTypes.string,
    locked: PropTypes.bool,
    employeeId: PropTypes.number,
    phones: PropTypes.array,
    onLockEmployee: PropTypes.func,
    onUnLockEmployee: PropTypes.func,
    onTurnOnEditing: PropTypes.func,
    onTurnOffEditing: PropTypes.func,
    onEditEmployee: PropTypes.func,
    isEditing: PropTypes.bool,
  };

  static defaultProps = {
    title: '',
    locked: false,
    lastName: '',
    firstName: '',
    middleName: '',
    phones: [],
    onTurnOnEditing: ()=>{},
    onTurnOffEditing: ()=>{},
    onLockEmployee: ()=>{},
    onUnLockEmployee: ()=>{},
    onEditEmployee: ()=>{},
    isEditing: false
  };

  render () {
    const {
      title,
      lastName,
      firstName,
      middleName,
      phones,
      locked,
      isEditing,
      onLockEmployee,
      onUnLockEmployee,
      employeeId,
      onTurnOffEditing,
      onTurnOnEditing,
      onEditEmployee,
      initialize
    } = this.props;

    const toggleLock = () => {
      if(locked) {
        onUnLockEmployee(employeeId)
      } else {
        onLockEmployee(employeeId)
      }
    };

    const handleInitialize = () => {
      onTurnOnEditing();
    }

    const initData = {
      'firstName': firstName,
      'lastName': lastName,
      'middleName': middleName
    };

    return (
      <div className={style.wraper}>
        <header className={style.header}>
          <h2 className={style.title}>{title}</h2>
        </header>
        <div className={style.content}>
          {isEditing &&
            <FormEditEmployee
              onSubmit={onEditEmployee}
              onTurnOffEditing={onTurnOffEditing}
              initData={initData}
            />
          }

          {!isEditing &&
          <div className={style.fullName}>
            {lastName}
            {(firstName || middleName) &&
              <br/>
            }
            {firstName} {middleName}
          </div>
          }
          <div className={style.buttons}>
            <RoundButton theme="danger">
              <Delete/>
            </RoundButton>
            <RoundButton onClick={handleInitialize}>
              <Pen/>
            </RoundButton>
          </div>
          <SwitchButton  name={'switch-'+employeeId} labelRight={tr('STUFF_ACTIVE')} onChange={toggleLock} checked={!locked} defaultChecked={locked}/>
        </div>
        <div className={style.phones}>
          <h3 className={style.phoneTtile}>{tr('STUFF_PHONES')}</h3>
          {phones.map((phone, key) => {
            return  <div key={key} className={style.phone}>{phone}</div>
            })
          }
        </div>
      </div>
    );
  }
}
