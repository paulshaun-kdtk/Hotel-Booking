import React from 'react';

const ForwardButton = ({ onClick }) => (
  <div className="forward-button-container" onClick={onClick}>
    <i className="fa fa-caret-right" aria-hidden="true" />
  </div>
);
export default ForwardButton;
