import React, {Component} from 'react';
import fl from './../../../styles/fluidable.less';
import StuffGroupsList from './../../../components/stuff-groups-list/stuff-groups-list.js';
import {tr} from 'lib/locale.js';

export default class Stuff extends Component {

  componentWillMount(){
    this.props.loadGroups()
  }

  render() {

    const {selectGroup, groups, activeGroupId} = this.props;

    const onClickHandler = (id) => {
      selectGroup(id)
    };

    return (
      <div>
        <div className={fl.container}>

          <div className={fl['col-3']}>
            <StuffGroupsList
              onClickHandler={onClickHandler}
              items={groups}
              title={tr('STUFF_TARIFFS')}
              activeGroupId={activeGroupId}
              />
          </div>
          <div className={fl['col-3']}>

          </div>
        </div>
      </div>
    )
  }
};
