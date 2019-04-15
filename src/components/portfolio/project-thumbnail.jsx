import React, { Component } from 'react';
import Carousel from 'nuka-carousel';

const ProjectThumbnail = (props) => {
  const { thumbnails = [] } = props;
  return (
    <Carousel
      autoplay
      dragging
      autoplayReverse
      renderCenterLeftControls={null}
      renderCenterRightControls={null}>
      {thumbnails.map((uri) => (
        <img src={uri} style={{ objectFit: 'cover', marginTop: '5px' }} />
      ))}
    </Carousel>
  );
};

export default ProjectThumbnail;
