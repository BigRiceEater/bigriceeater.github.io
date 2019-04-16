import React, { Component } from 'react';
import './tool-item.scss';
class ToolItem extends Component {
  render() {
    const { icon, bullets } = this.props;
    return (
      <div className='column is-narrow'>
        <p className='tool-item-icon fa-6x'>{icon}</p>
      </div>
    );
  }
}

export default ToolItem;
