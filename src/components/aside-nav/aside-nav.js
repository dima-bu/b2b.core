import React, {Component, PropTypes} from 'react';
import {IndexLink, Link} from 'react-router';
import pure from './../../decorators/pure';
import style from './aside-nav.less';

export default class AsideNav extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        pathname: React.PropTypes.string.isRequired,
        title: React.PropTypes.string.isRequired
      })
    ),
    handleClick: PropTypes.func
  }

  render () {
    const {handleClick, items} = this.props;
    return (
      <div className={style.wrapper}>
        <div className={style.logo}></div>
        <nav className={style.nav}>
          <IndexLink className={style.link} to='/' activeClassName={style.activeLink}>
            Home
          </IndexLink>
          {items.map(({pathname, title}, key) =>
            <Link
              className={style.link}
              activeClassName={style.activeLink}
              key={key}
              to={{pathname}}
            >
              <span>{title}</span>
            </Link>
          )}
        </nav>
      </div>
    );
  }
}
