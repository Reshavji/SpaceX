import React from 'react'
import Cor from '../Cor/Cor';

function CorPopup ({isOpen, onClose, capsuleSerial}) {
    return (
        <div className={`capsule-popup${isOpen ? ' open' : ''}`}>
          <div className="capsule-popup-content">
            <span className="close-button" onClick={onClose}>&times;</span>
            {isOpen && <Cor capsule_serial={capsuleSerial} />} {/* Render the Capsule component if isOpen is true */}
          </div>
        </div>
      );
    }

export default CorPopup;