import React, { Component } from 'react';
class CardThumbnail extends Component {
  state = {};
  render() {
    const { thumbnail } = this.props.data;
    return (
      <div className='card-image'>
        <figure className='image'>
          <img
            src={thumbnail}
            alt='card image'
            style={{
              objectFit: 'cover',
              marginTop: '5px',
              minHeight: '180px'
            }}
          />
        </figure>
      </div>
    );
  }
}

export default CardThumbnail;
