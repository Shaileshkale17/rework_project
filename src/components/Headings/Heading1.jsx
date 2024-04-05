import React from "react";

const Heading1 = ({ Title = "Heading1", styleClass }) => {
  return (
    <div>
      <h1 className={styleClass}>{Title}</h1>
    </div>
  );
};

export default Heading1;
