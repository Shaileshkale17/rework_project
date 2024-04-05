import React from "react";

const Para = ({ Title = "para", styleClass, svgImg }) => {
  return (
    <p className={styleClass}>
      <img src={svgImg} />
      {Title}
    </p>
  );
};

export default Para;
