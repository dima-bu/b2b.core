import React, {Component, PropTypes} from 'react';
import cx from 'classnames';
import style from './stuff-employee-detail.less';

export default class StuffEmployeeDetail extends Component {
  static propTypes = {
    title: PropTypes.string,
    lastName: PropTypes.string,
    firstName: PropTypes.string,
    middleName: PropTypes.string,
    locked: PropTypes.bool,
    employeeId: PropTypes.number,
    phones: PropTypes.array
  };

  static defaultProps = {
    title: '',
    locked: false,
    lastName: '',
    firstName: '',
    middleName: '',
    phones: []
  };

  render () {
    const {title, lastName, firstName, middleName, phones} = this.props;
    return (
      <div className={style.wraper}>
        <header className={style.header}>
          <h2 className={style.title}>{title}</h2>
        </header>
        <div className={style.content}>
          <div className={style.fullName}>
            {lastName} <br/> {firstName} {middleName}
          </div>
        </div>
        <div className={style.phones}>
          <h3 className={style.phoneTtile}>Телефоны</h3>
          {phones.map((phone, key) => {
            <div key={key} className={style.phones}>{phone}</div>
            })
          }
        </div>
      </div>
    );
  }
}
