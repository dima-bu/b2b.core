import React, {Component, PropTypes} from 'react';
import WorkerItem from 'components/worker-item/worker-item';
import style from './stuff-employees-list.less';

export default class StuffEmployeesList extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        lastName: PropTypes.string,
        firstName: PropTypes.string,
        middleName: PropTypes.string,
        locked: PropTypes.bool,
        employeeId: PropTypes.number.isRequired
      })
    ),
    activeEmployeeId: PropTypes.number,
    onClickHandler: PropTypes.func,
    title: PropTypes.string
  };

  static defaultProps = {
    items: [],
    onClickHandler: ()=>{},
    title: '',
    activeEmployeeId: null
  };

  render () {

    const {items, onClickHandler, title, activeEmployeeId} = this.props;

    const onItemClick = (id) => {
      onClickHandler(id)
    };

    const getName = employee => {
      const {lastName, firstName, middleName} = employee;
      return `${lastName} ${firstName} ${middleName}`;
    };

    return (
      <div className={style.wraper}>
        <header className={style.header}>
          <h2 className={style.title}>{title}</h2>
        </header>
        <div>
          {items.map(item => {
            return <WorkerItem active={item.employeeId === activeEmployeeId} name={getName(item)} value={item.value} key={item.employeeId} isLock={item.locked} id={item.employeeId} onClickHandler={onItemClick.bind(this, item.employeeId)} ></WorkerItem>
          })}
        </div>
      </div>
    )
  }

}
