import React, {Component, PropTypes} from 'react';
import {IndexLink, Link} from 'react-router';
import pure from './../../decorators/pure';
import style from './aside-nav.less';
import cx from 'classnames';

export default class AsideNav extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        pathname: React.PropTypes.string.isRequired,
        title: React.PropTypes.string.isRequired
      })
    ),
    isOpen: PropTypes.bool,
    handleClick: PropTypes.func,
    onOpenMenu: PropTypes.func,
    onCloseMenu: PropTypes.func
  };

  static defaultProps = {
    items: [],
    isOpen: true,
    onOpenMenu: ()=>{},
    onCloseMenu: ()=>{}
  };

  render () {
    const {handleClick, items, isOpen, onOpenMenu, onCloseMenu} = this.props;

    const toggleMenu = () => {
      if (isOpen){
        onCloseMenu()
      } else {
        onOpenMenu()
      }
    };

    return (
      <div className={cx(style.wrapper, isOpen ? style.open : '')}>
        <div className={style.hamburger} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={style.logo}></div>
        <nav className={style.nav}>
          <IndexLink onClick={toggleMenu} className={style.link} to='/' activeClassName={style.activeLink}>
            Home
          </IndexLink>
          {items.map(({pathname, title}, key) =>
            <Link
              onClick={toggleMenu}
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
