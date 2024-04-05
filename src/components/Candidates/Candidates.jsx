import React from "react";

const Candidates = ({
  NumberTitle,
  morePara,
  SvgImg,
  Title = "svg",
  styleClass,
  styleClassPara,
  imgCss,
}) => {
  return (
    <div className={styleClass}>
      <img src={SvgImg} alt={Title} className={imgCss} />
      <div>
        <h4>{NumberTitle}</h4>
        <p>{Title}</p>
        <p className={styleClassPara}>{morePara}</p>
      </div>
    </div>
  );
};

export default Candidates;
