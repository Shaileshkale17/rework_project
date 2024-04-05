import React from "react";
import "./Success_Stories_card.css";
import { Link } from "react-router-dom";
const Success_Stories_card = ({
  title = "title",
  para = "para",
  img,
  path,
}) => {
  return (
    <Link to={path}>
      <div className="main_card_Success">
        <div className="main_card_Success_img">
          <img src={img} />
        </div>
        <div className="main_card_Success_text">
          <div className="main_card_Success_main_title">
            <p>{title}</p>
          </div>
          <div className="main_card_Success_main_para">
            <p>{para}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Success_Stories_card;
