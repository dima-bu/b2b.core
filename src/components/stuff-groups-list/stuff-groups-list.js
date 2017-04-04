import React, {Component, PropTypes} from 'react';
import style from './stuff-groups-list.less';
import cx from 'classnames';
import ListItem from './../list-item/list-item';

export default class StuffGroupsList extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        groupId: PropTypes.number.isRequired
      })
    ),
    activeGroupId: PropTypes.number,
    onClickHandler: PropTypes.func,
    title: PropTypes.string
  };

  static defaultProps = {
    items: [],
    onClickHandler: ()=>{},
    title: '',
    activeGroupId: null
  };

  render () {

    const {items, onClickHandler, title, activeGroupId} = this.props;

    const onItemClick = (id) => {
      onClickHandler(id)
    };

    return (
      <div className={style.wraper}>
        <header className={style.header}>
          <h2 className={style.title}>{title}</h2>
        </header>
        <div className={style.listWraper}>
          {items.map(item => {
            return <ListItem keyId="groupId" active={item.groupId === activeGroupId} name={item.name} key={item.groupId} id={item.groupId} onClickHandler={onItemClick.bind(this, item.groupId)} ></ListItem>
          })}
        </div>
      </div>
    )
  }
}
