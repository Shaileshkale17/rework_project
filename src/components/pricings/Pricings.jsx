import React, { useState } from "react";
import Button from "../Button/Button";
import Heading2 from "../Headings/Heading2";

const Pricings = ({
  styleClass,
  pricing = 150,
  title = "Enter your text",
  monthNumber = "1",
  information = [],
  LinkTypeBtn,
  btnTitles,
  MonthCss,
  Title_css,
  btnStyle,
  mostpopular,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={styleClass}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      {mostpopular ? <p className="mostpopular">{mostpopular}</p> : ""}
      <div className={MonthCss}>
        <h2 className="month_css" style={{ color: isHovered ? "#ffff" : "" }}>
          {monthNumber} Month
        </h2>
        <h1 className="Rupees_css" style={{ color: isHovered ? "#ffff" : "" }}>
          ₹{pricing}
          <span>/month</span>
        </h1>
      </div>
      <div className={Title_css} style={{ color: isHovered ? "#ffff" : "" }}>
        <p className="Title_cssh3" style={{ color: isHovered ? "#ffff" : "" }}>
          {title}
        </p>
        <div>
          {information.map((item, i) => (
            <>
              <p
                className="subtext_css"
                key={i}
                style={{ color: isHovered ? "#ffff" : "" }}>
                <img src={item.img} />
                {item.text}
              </p>
            </>
          ))}
        </div>
      </div>
      <Button
        LinkType={LinkTypeBtn}
        styleClass={btnStyle}
        btnTitle={btnTitles}
        type="Button"
        colors={{
          backgroundColor: isHovered ? "#ffff" : "",
          color: isHovered ? "#5C27C0" : "",
        }}
      />
    </div>
  );
};

export default Pricings;
