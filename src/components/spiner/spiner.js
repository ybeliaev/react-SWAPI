import React from "react";
import "./spiner.css";
const Spinner = () => {
  return (
    <div className="atom-spinner">
      <div className="spinner-inner">
        <div className="spinner-line" />
        <div className="spinner-line" />
        <div className="spinner-line" />
        {/* Chrome renders little circles malformed  */}
        <div className="spinner-circle">&#9679;</div>
      </div>
    </div>
  );
};
export default Spinner;
