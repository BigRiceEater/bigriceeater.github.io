import React, { Component } from 'react';

class CardThumbnail extends Component {
  render() {
    const { thumbnail } = this.props.data;
    return (
      <div className='card-image'>
        <figure className='image'>
          <img src={thumbnail} alt='card image' style={this.thumbnailStyle} />
        </figure>
      </div>
    );
  }

  thumbnailStyle = {
    objectFit: 'cover',
    marginTop: '5px',
    minHeight: '180px'
  };
}

export default CardThumbnail;
