import React from 'react';
import chevron from '../images/chevron-up-solid.svg'

const Collapse = ({ head, description }) => {

  return (
    <details>
        <summary>
          <span className='text'>{head}</span>
          <img src={chevron} alt='Chevron'/>
        </summary>
        <p>{description}</p>
    </details>
  );
};

export default Collapse;
