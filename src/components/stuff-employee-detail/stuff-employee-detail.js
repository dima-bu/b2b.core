import React, {Component, PropTypes} from 'react';
import cx from 'classnames';
import style from './stuff-employee-detail.less';
import SwitchButton from 'components/switch-button/switch-button.js';

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
    onUnLockEmployee: PropTypes.func
  };

  static defaultProps = {
    title: '',
    locked: false,
    lastName: '',
    firstName: '',
    middleName: '',
    phones: [],
    onLockEmployee: ()=>{},
    onUnLockEmployee: ()=>{}
  };

  render () {
    const {title, lastName, firstName, middleName, phones, locked, onLockEmployee, onUnLockEmployee, employeeId} = this.props;

    const toggleLock = () => {
      if(locked) {
        onUnLockEmployee()
      } else {
        onLockEmployee()
      }
    };

    return (
      <div className={style.wraper}>
        <header className={style.header}>
          <h2 className={style.title}>{title}</h2>
        </header>
        <div className={style.content}>
          <div className={style.fullName}>
            {lastName} <br/> {firstName} {middleName}
          </div>
          <SwitchButton  name={'switch-'+employeeId} onChange={toggleLock} checked={locked} defaultChecked={locked}/>
        </div>
        <div className={style.phones}>
          <h3 className={style.phoneTtile}>Телефоны</h3>
          {phones.map((phone, key) => {
            return  <div key={key} className={style.phone}>{phone}</div>
            })
          }
        </div>
      </div>
    );
  }
}
