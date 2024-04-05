import React from "react";
import "./System.css";
import Candidates from "../../components/Candidates/Candidates";
import Button from "../../components/Button/Button";
function System() {
  const img1 = "/src/assets/Frame 48095633 (1).png";
  const img2 = "/src/assets/mingcute_user-add-line.png";
  const img3 = "/src/assets/Frame 48095633.png";

  return (
    <section className="System">
      <p className="System-paras">
        <span> How Our System </span> Operates
      </p>

      <div className="System-card">
        <Candidates
          NumberTitle="Upload Documents"
          SvgImg={img1}
          Title="Shortlist the most qualified candidate and upload their details for the top companies"
          styleClass="System-card-main color-bg"
          key={new Date().setSeconds()}
          imgCss="imgstyle1"
        />
        <Candidates
          NumberTitle="Sign Up"
          SvgImg={img2}
          Title="Follow the link below to sign up and get access of the current job postings"
          styleClass="System-card-main "
          key={new Date().setSeconds()}
          imgCss="imgstyle2"
        />
        <Candidates
          NumberTitle="Get Rewards"
          SvgImg={img3}
          Title="As soon as the candidate gets selected you get your benefits"
          styleClass="System-card-main color-bg"
          key={new Date().setSeconds()}
          imgCss="imgstyle3"
        />
      </div>

      <Button
        LinkType="/GetStarted"
        btnTitle="Get staeted"
        type="Button"
        styleClass="GetButton"
      />
    </section>
  );
}

export default System;
