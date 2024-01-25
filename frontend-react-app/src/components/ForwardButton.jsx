import React from 'react';
import PropTypes from 'prop-types';

const ForwardButton = ({ onClick }) => (
  <div
    className="forward-button-container"
    onClick={onClick}
    onKeyDown={onClick} // Add this line
    role="button" // Add this line
    tabIndex={0} // Add this line
    aria-label="Forward" // Add this line
  >
    <i className="fa fa-caret-right" aria-hidden="true" />
  </div>
);

ForwardButton.propTypes = {
  onClick: PropTypes.func.isRequired, // Add this line
};

export default ForwardButton;
