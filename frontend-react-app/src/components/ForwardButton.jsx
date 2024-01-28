import React from 'react';
import PropTypes from 'prop-types';

const ForwardButton = ({ onClick }) => (
  <div
    className="forward-button-container"
    onClick={onClick}
    onKeyDown={onClick}
    role="button"
    tabIndex={0}
    aria-label="Forward"
  >
    <i className="fa fa-caret-right" aria-hidden="true" />
  </div>
);

ForwardButton.propTypes = {
  onClick: PropTypes.func.isRequired, // Add this line
};

export default ForwardButton;
