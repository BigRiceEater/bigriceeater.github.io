import React, { Component } from 'react';
import './tool-item.scss';
class ToolItem extends Component {
  render() {
    const { icon, label } = this.props;
    return (
      <div className='column is-narrow'>
        {/* Need to set lineheight so there isn't extra padding top-bottom for icon */}
        <p className='tool-item-icon fa-6x' style={{ lineHeight: '100%' }}>
          {icon}
        </p>
        {label && (
          <p className=' is-hidden-mobile has-text-centered'>{label}</p>
        )}
      </div>
    );
  }
}

export default ToolItem;
