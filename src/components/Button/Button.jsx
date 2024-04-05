import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  type = "text",
  styleClass,
  btnTitle = "button",
  LinkType,
  colors,
}) => {
  return (
    <Link to={LinkType}>
      <button type={type} className={styleClass} style={colors}>
        {btnTitle}
      </button>
    </Link>
  );
};

export default Button;
