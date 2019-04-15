import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Icons from './../../modules/icon-mapper';

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
            {Icons.utility.code} &nbsp; Portfolio
          </Link>
        </div>
      </div>
    );
  }
}

export default MobileBurgerMenu;
