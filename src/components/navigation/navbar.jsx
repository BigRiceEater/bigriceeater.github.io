import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MobileBurgerMenu from './mobile-burger-menu';

class NavBar extends Component {
  state = {
    isMenuActive: false
  };

  getMenuButtonClasses = () => {
    let classes = 'navbar-burger burger';
    if (this.state.isMenuActive) classes += ' is-active';
    return classes;
  };

  closeMenu = () => {
    this.setState({ isMenuActive: false });
  };

  render() {
    return (
      <nav className='navbar is-primary' role='navigation'>
        <div className='navbar-brand'>
          <Link to={'/'} className='navbar-item' onClick={this.closeMenu}>
            Big Rice
          </Link>
          <a
            role='button'
            className={this.getMenuButtonClasses()}
            data-target='burger-menu'
            onClick={() =>
              this.setState({ isMenuActive: !this.state.isMenuActive })
            }>
            <span aria-hidden='true' />
            <span aria-hidden='true' />
            <span aria-hidden='true' />
          </a>
        </div>

        <MobileBurgerMenu
          isMenuActive={this.state.isMenuActive}
          onNavigation={this.closeMenu}
        />
      </nav>
    );
  }
}

export default NavBar;
