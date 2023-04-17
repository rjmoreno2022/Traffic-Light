import React, { useState, useEffect } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

function Semaphor(props) {

  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  return (
    <div className="semaphor-container">
        <Button variant="danger" className={`semaphor-btn ${activeButton === 0 ? "active" : ""} m-1`} onClick={() => handleButtonClick(0)}></Button>
        <Button variant="warning" className={`semaphor-btn ${activeButton === 1 ? "active" : ""} m-1`} onClick={() => handleButtonClick(1)}></Button>
        <Button variant="success" className={`semaphor-btn ${activeButton === 2 ? "active" : ""} m-1`} onClick={() => handleButtonClick(2)}></Button>
    </div>
  );
}

export default Semaphor;