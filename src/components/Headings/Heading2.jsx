import React from "react";

const Heading2 = ({ Title = "Heading2", styleClass }) => {
  return (
    <div>
      <h1 className={styleClass}>{Title}</h1>
    </div>
  );
};

export default Heading2;
