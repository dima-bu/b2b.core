import React, {Component} from 'react';
import fl from 'styles/fluidable.less';
import StuffGroupsList from 'components/stuff-groups-list/stuff-groups-list.js';
import StuffEmployeesList from 'components/stuff-employees-list/stuff-employees-list.js';
import StuffEmployeeDetail from 'components/stuff-employee-detail/stuff-employee-detail.js';
import style from './Stuff.less';
import {tr} from 'lib/locale.js';

export default class Stuff extends Component {

  componentWillMount(){
    this.props.loadGroups()
  }

  render() {

    const {
      selectGroup,
      selectEmployee,
      lockEmployee,
      unlockEmployee,
      turnOnEditing,
      turnOffEditing,
      editEmployee,
      //
      groups,
      activeGroupId,
      employees,
      activeEmployeeId,
      locked,
      isEditing
    } = this.props;
    const {lastName, firstName, middleName, employeeId, phones} = this.props.employee;
    const onSelectGroup = (id) => {
      selectGroup(id)
    };
    const onSelectEmployee = (id) => {
      selectEmployee(id)
    };

    return (
      <div>
        <div className={fl.container}>
          <div>
            <h1 className={style.title}>{tr('STUFF_STUFF')}</h1>
          </div>
          <div className={fl['col-group']}>
            <div className={fl['col-3']}>
              <StuffGroupsList
                onClickHandler={onSelectGroup}
                items={groups}
                title={tr('STUFF_TARIFFS')}
                activeGroupId={activeGroupId}
              />
            </div>
            <div className={fl['col-6']}>
              <StuffEmployeesList
                onClickHandler={onSelectEmployee}
                title={tr('STUFF_GROUP_MEMBERS')}
                items={employees}
                activeEmployeeId={activeEmployeeId}
              />
            </div>
            <div className={fl['col-3']}>
              <StuffEmployeeDetail
                title={tr('STUFF_GROUP_INFO')}
                firstName={firstName}
                lastName={lastName}
                middleName={middleName}
                employeeId={employeeId}
                isEditing={isEditing}
                phones={phones}
                locked={locked}
                onLockEmployee={lockEmployee}
                onUnLockEmployee={unlockEmployee}
                onTurnOnEditing={turnOnEditing}
                onTurnOffEditing={turnOffEditing}
                onEditEmployee={editEmployee}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
};
