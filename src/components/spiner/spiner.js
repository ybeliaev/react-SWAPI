import React from "react";
const Spiner = () => {
  return (
    <div class="atom-spinner">
      <div class="spinner-inner">
        <div class="spinner-line" />
        <div class="spinner-line" />
        <div class="spinner-line" />
        {/* Chrome renders little circles malformed  */}
        <div class="spinner-circle">&#9679;</div>
      </div>
    </div>
  );
};
export default Spiner;
