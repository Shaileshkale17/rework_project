import React from "react";

const Barnd = ({ SvgImg, Title = "Brand" }) => {
  return <img src={SvgImg} alt={Title} />;
};

export default Barnd;
