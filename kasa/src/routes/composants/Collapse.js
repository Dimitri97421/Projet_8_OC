import React, {useState} from 'react';
import chevron from '../images/chevron-up-solid.svg'

const Collapse = ({ head, description }) => {

  const [isOpen, setIsOpen] = useState(false);

  const renderCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse ${isOpen ? 'open' : ''}`}>
      <div className="summary">
        <span className="text">{head}</span>
        <img className="chevron" src={chevron} alt="Chevron" onClick={renderCollapse}/>
      </div>
      {isOpen && (
          <p>{Array.isArray(description) ? description.join('\n') : description}</p>
      )}
    </div>
  );
};

export default Collapse;
