import React from 'react';
import './ResetButton.css'

const ResetButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="button-reset">Reset All</button>
  );
};

export default ResetButton;
