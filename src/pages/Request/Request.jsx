import React from "react";
import Heading1 from "../../components/Headings/Heading1";
import Button from "../../components/Button/Button";
import "./RequestPage.css";
const RequestPage = () => {
  return (
    <section className="RequestPage">
      <div className="RequestPageText">
        <Heading1
          Title="Optimize Your Hiring Strategy with Rework's Exclusive Hiring Audit"
          styleClass="request_css_h1"
        />

        <p>
          Discover the strengths and opportunities in your current hiring
          process. Our comprehensive Hiring Audit evaluates your strategy,
          identifies areas for improvement, and tailors a roadmap for success.
          Elevate your recruitment game with data-driven insights – because the
          right talent deserves the right approach.
        </p>
        <Button
          LinkType="Request_Your_Free_Hiring_Audit"
          styleClass="Request_css_Button"
          btnTitle="Request Your Free Hiring Audit"
          type="button"
        />
      </div>
    </section>
  );
};

export default RequestPage;
