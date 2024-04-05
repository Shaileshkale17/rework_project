import React from "react";

const Platform_comp = ({ title, para, Platform_compcss }) => {
  return (
    <div className={Platform_compcss}>
      <h4>{title}</h4>
      <p>{para}</p>
    </div>
  );
};

export default Platform_comp;
