import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Icons from './../../modules/icon/icon-mapper';
import Portfolio from '../../views/portfolio';

class MobileBurgerMenu extends Component {
  state = {
    links: [
      {
        to: '/',
        icon: Icons.utility.unknown,
        label: 'Home'
      },
      {
        to: '/portfolio',
        icon: Icons.utility.code,
        label: 'Portfolio'
      }
    ]
  };

  getMenuClasses = () => {
    let classes = 'navbar-menu';
    if (this.props.isMenuActive) classes += ' is-active';
    return classes;
  };

  navLink = ({ to, icon, label, onNavigation }) => {
    return (
      <Link key={to} to={to} className='navbar-item' onClick={onNavigation}>
        {icon} &nbsp; {label}
      </Link>
    );
  };

  render() {
    const { links } = this.state;
    return (
      <div id='burger-menu' className={this.getMenuClasses()}>
        <div className='navbar-start'>
          {links.map((link, index) =>
            this.navLink({ ...link, onNavigation: this.props.onNavigation })
          )}
        </div>
      </div>
    );
  }
}

export default MobileBurgerMenu;
