import React from 'react';
import PropTypes from 'prop-types';

const BackButton = ({ onClick }) => (
  <>
    <div
      className="back-button-container"
      onClick={onClick}
      onKeyDown={onClick} // Add this line
      role="button" // Add this line
      tabIndex={0} // Add this line
      aria-label="Back" // Add this line
    >
      <i className="fa fa-caret-left" aria-hidden="true" />
    </div>
  </>
);

BackButton.propTypes = {
  onClick: PropTypes.func.isRequired, // Add this line
};

export default BackButton;
