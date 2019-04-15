import React, { Component } from 'react';
import Carousel from 'nuka-carousel';

const ProjectThumbnail = (props) => {
  const { thumbnails = [] } = props;
  return (
    <Carousel
      autoplay
      autoplayInterval='5000'
      dragging
      wrapAround
      framePadding='0px 10px'>
      {thumbnails.map((uri) => (
        <img src={uri} style={{ objectFit: 'cover', marginTop: '5px' }} />
      ))}
    </Carousel>
  );
};

export default ProjectThumbnail;
