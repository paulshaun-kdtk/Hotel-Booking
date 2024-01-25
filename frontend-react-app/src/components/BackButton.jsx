import React from 'react';

const BackButton = ({ onClick }) => (
  <>
    <div className="back-button-container" onClick={onClick}>
      <i className="fa fa-caret-left" aria-hidden="true" />
    </div>
  </>
);
export default BackButton;
