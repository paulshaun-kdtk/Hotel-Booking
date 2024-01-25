import React from "react";

const BackButton = ({ onClick }) => {

   return (
       <>
          <div className="back-button-container" onClick={onClick}>
          <i className="fa fa-caret-left" aria-hidden="true"></i>
          </div>
       </>
   )
}

export default BackButton;