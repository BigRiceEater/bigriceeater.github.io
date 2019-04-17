import React from 'react';

const CardFrameworks = (props) => {
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

export default CardFrameworks;
