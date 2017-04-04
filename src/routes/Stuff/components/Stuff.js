import React, {Component} from 'react';
import fl from 'styles/fluidable.less';
import StuffGroupsList from 'components/stuff-groups-list/stuff-groups-list.js';
import StuffEmployeesList from 'components/stuff-employees-list/stuff-employees-list.js';
import style from './Stuff.less';


import {tr} from 'lib/locale.js';

export default class Stuff extends Component {

  componentWillMount(){
    this.props.loadGroups()
  }

  render() {

    const {selectGroup, groups, activeGroupId, employees} = this.props;

    const onSelectGroup = (id) => {
      selectGroup(id)
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
                title={tr('STUFF_GROUP_MEMBERS')}
                items={employees}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
};
