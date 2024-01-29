import React from 'react';
import PropTypes from 'prop-types';

const BackButton = ({ onClick }) => (
  <>
    <div
      className="back-button-container"
      onClick={onClick}
      onKeyDown={onClick}
      role="button"
      tabIndex={0}
      aria-label="Back"
    >
      <i className="fa fa-caret-left" aria-hidden="true" />
    </div>
  </>
);

BackButton.propTypes = {
  onClick: PropTypes.func.isRequired, // Add this line
};

export default BackButton;
