import React, { Fragment } from "react";

const Spinner = () => {
  return (
    <div style={{ margin: "auto", textAlign: "center" }}>
      <div class="lds-circle">
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
