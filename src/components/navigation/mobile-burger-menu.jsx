import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MobileBurgerMenu extends Component {
  getMenuClasses = () => {
    let classes = 'navbar-menu';
    if (this.props.isMenuActive) classes += ' is-active';
    return classes;
  };

  render() {
    return (
      <div id='burger-menu' className={this.getMenuClasses()}>
        <div className='navbar-start'>
          <Link
            to='/portfolio'
            className='navbar-item'
            onClick={() => {
              this.props.onNavigation();
            }}>
            Portfolio
          </Link>
        </div>
      </div>
    );
  }
}

export default MobileBurgerMenu;
