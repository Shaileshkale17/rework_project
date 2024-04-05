import React from "react";
import "./Customer_card.css";
const Customer_card = ({
  styleClass,
  User_img,
  user_style,
  styleClassPara,
  text,
  User_Name = "Theresa Webb",
  sub_title = "sub_titleHR Manager, Amazon",
  index,
}) => {
  return (
    <div className="Customer_card_css" key={index}>
      <p className={styleClassPara}>{text}</p>
      <div className="user_style">
        <img src={User_img} alt="" />
        <div className="text_user">
          <p>{User_Name}</p>
          <p>{sub_title}</p>
        </div>
      </div>
    </div>
  );
};

export default Customer_card;
