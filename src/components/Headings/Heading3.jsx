import React from "react";

const Heading3 = ({ Title = "Heading3", styleClass }) => {
  return (
    <div>
      <h1 className={styleClass}>{Title}</h1>
    </div>
  );
};

export default Heading3;
