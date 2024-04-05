import React from "react";
import "./Pricing.css";
import Pricings from "../../components/pricings/Pricings";
import Button from "../../components/Button/Button";
const Pricing = () => {
  const datainfo = [
    {
      img: "/src/assets/Icons.png",
      text: "10 interview-ready candidates",
    },
    {
      img: "/src/assets/Icons.png",
      text: "Unlimited job postings",
    },
    {
      img: "/src/assets/Icons.png",
      text: "Receive pre-vetted profiles within 48 hours",
    },
    {
      img: "/src/assets/Vector (4).png",
      text: "Dedicated account manager",
    },
    {
      img: "/src/assets/Vector (4).png",
      text: "Assistance with interview scheduling",
    },
    {
      img: "/src/assets/Vector (4).png",
      text: "Custom reports",
    },
  ];
  return (
    <section className="Pricing">
      <p className="Pricing-paras">
        <span className="span"> Choose Your Simple, </span> Transparent Pricing
      </p>
      <div className="pricing-card">
        <Pricings
          LinkTypeBtn="/get_started"
          monthNumber="1"
          pricing="199.00"
          btnTitles="Get Started"
          styleClass="Pricing_css"
          btnStyle="Pricing_btn"
          information={datainfo}
          title="Suitable for companies with 5-10 openings"
          MonthCss="monthCss"
          Title_css="Title_css"
        />
        <Pricings
          LinkTypeBtn="/get_started"
          monthNumber="1"
          pricing="199.00"
          btnTitles="Get Started"
          styleClass="Pricing_css"
          btnStyle="Pricing_btn"
          information={datainfo}
          title="Suitable for companies with 5-10 openings"
          MonthCss="monthCss"
          Title_css="Title_css"
          mostpopular="Most Popular"
        />
        <Pricings
          LinkTypeBtn="/get_started"
          monthNumber="1"
          pricing="199.00"
          btnTitles="Get Started"
          styleClass="Pricing_css"
          btnStyle="Pricing_btn"
          information={datainfo}
          title="Suitable for companies with 5-10 openings"
          MonthCss="monthCss"
          Title_css="Title_css"
        />
      </div>
      <Button
        LinkType="/BookDeom"
        btnTitle="Book a Deom"
        type="Button"
        styleClass="BookDeom"
      />
    </section>
  );
};

export default Pricing;
