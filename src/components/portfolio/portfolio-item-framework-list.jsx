import React, { Component } from 'react';

const PortfolioItemFrameworkList = (props) => {
  const { icons } = props;
  return (
    <React.Fragment>
      {icons.map((jsx, idx) => (
        <span className='fa-2x' key={idx}>
          {jsx} &nbsp;{' '}
        </span>
      ))}
    </React.Fragment>
  );
};

export default PortfolioItemFrameworkList;
