import React from 'react';

const ListContainer = ({ children }) => (
  <div className='columns is-variable is-0-mobile is-centered'>
    <div className='column is-three-quarters'>{children}</div>
  </div>
);

export default ListContainer;
