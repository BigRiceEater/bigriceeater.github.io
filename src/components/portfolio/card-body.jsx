import React, { Component } from 'react';
class CardBody extends Component {
  render() {
    const { description } = this.props.data;
    return (
      <div
        className='card-content'
        style={{ height: '120px', overflowY: 'auto' }}>
        <p>{description}</p>
      </div>
    );
  }
}

export default CardBody;
