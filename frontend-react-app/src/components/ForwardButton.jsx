import React from "react";

const ForwardButton = ({ onClick }) => {

   return (
       
          <div className="forward-button-container" onClick= {onClick} >
          <i className="fa fa-caret-right" aria-hidden="true"></i>
          </div>
    
   )
}

export default ForwardButton;