import React from "react";
import Heading1 from "../../components/Headings/Heading1";
import Heading2 from "../../components/Headings/Heading2";
import Button from "../../components/Button/Button";
import Para from "../../components/Para/Para";
import "./Hero.css";
import Candidates from "../../components/Candidates/Candidates";
const Hero = () => {
  const svg = "/src/assets/Group.png";
  const Image = "/src/assets/Rectangle 39395.png";
  const CandidatesSvg = "/src/assets/Vector (1).png";
  return (
    <section className="heroSection">
      <div className="hero-text">
        <div className="heading">
          <Heading1 Title="Power up your Hiring" styleClass="Heading1_Hero" />
          <Heading2 Title="With Rework." styleClass="Heading2_Hero" />
          <Para
            Title="Empower your business with cutting-edge Al technology, simplified processes, and top-tier talent connections. Rework is your strategic partner in redefining how you hire"
            styleClass="mainPara"
          />
        </div>
        <Button
          LinkType="Booking"
          btnTitle="Book A Demo"
          styleClass="BookDemo"
        />

        <div className="text">
          <Para svgImg={svg} Title="No Credit Required " styleClass="subtext" />
          <Para
            svgImg={svg}
            Title="Streamilned Recruitment process"
            styleClass="subtext"
          />
        </div>
      </div>
      <div className="hero-img">
        <img src={Image} alt="" className="heroimg-para" />
        <div className="imgTitle">
          <Candidates
            SvgImg={CandidatesSvg}
            styleClass="CandidatesCss position"
            NumberTitle="+10K"
            Title="Condidates Hired"
          />
          <Candidates
            SvgImg={CandidatesSvg}
            NumberTitle="+360"
            styleClass="CandidatesCss position-2"
            Title="Happy companies"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
