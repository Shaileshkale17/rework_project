import React from "react";
import "./Platform.css";
import Platform_comp from "../../components/Platform/Platform";
const Platform = () => {
  return (
    <section className="Platform-css">
      <div className="platform_div">
        <div className="platform_div_para">
          <p className="Platform-css-paras">
            <span className="span"> How Rework AI has been a good</span> Hiring
            platform for Companies
          </p>
        </div>
        <Platform_comp
          title="80%"
          para="Reduction in your recruitment TAT with the access to a wider talent pool on the platform"
          Platform_compcss="Platform_compcss_css"
        />
        <hr />
        <Platform_comp
          title="50%"
          para="Streamline your budgeting and save money while finding the top candidates"
          Platform_compcss="Platform_compcss_css"
        />
        <hr />
        <Platform_comp
          title="10K"
          para="Certified sourcing partners’ expertise"
          Platform_compcss="Platform_compcss_css"
        />
      </div>
    </section>
  );
};

export default Platform;
