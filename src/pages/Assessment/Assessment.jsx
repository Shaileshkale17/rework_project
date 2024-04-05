import React from "react";
import "./Assessment.css";
import Button from "../../components/Button/Button";

const Assessment = () => {
  const Assessment_img = "/src/assets/Rectangle 39394.png";
  return (
    <section className="Assessment">
      <div className="Assessment-text">
        <p className="Assessment-paras">
          <span className="span"> Discover the Future of </span> Talent
          Assessment
        </p>
        <div className="facing">
          <p className="text-color">Facing challenges in traditional hiring?</p>
          <p className="text-color">
            Uncover the costs, pitfalls, and the game-changing role of
            Generative Al in recruitment
          </p>
        </div>
        <div className="inside">
          <p className="bold">
            <span> 🔍</span> Inside this Whitepaper:
          </p>
          <ul>
            <li>Manual vs. Machine-based hiring: Costs & Challenges</li>
            <li>The truth about Interview as a Service.</li>
            <li>
              Generative Al: The simple explanation. Optimize Your Hiring
              Process Today!
            </li>
          </ul>
        </div>
        <Button
          LinkType="Download"
          styleClass="Assessment-btn"
          btnTitle="Download Now for Smarter Recruitment"
          type="button"
        />
      </div>
      <div className="Assessment-img">
        <img src={Assessment_img} alt="" />
      </div>
    </section>
  );
};

export default Assessment;
