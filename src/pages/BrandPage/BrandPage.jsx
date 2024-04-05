import React from "react";
import Para from "../../components/Para/Para";
import Barnd from "../../components/Brand/Barnd";
import "./BrandPage.css";
const BrandPage = () => {
  const Google = "/src/assets/google-2015 1.png";
  const amazon =
    "/src/assets/kisspng-amazon-com-logo-brand-amazon-prime-video-product-amazon-offers-boat-bassheads-225-in-ear-super-ex-5b816a4424cdd5 1.png";
  const Nokia =
    "/src/assets/kisspng-nokia-networks-logo-nyse-nok-business-5b3983e37d3eb2 1.png";
  const spotify = "/src/assets/Vector (2).png";
  const microsoft = "/src/assets/microsoft 2.png";
  return (
    <section className="brand">
      <Para Title="Hire for 1000+ Brands including" styleClass="brand-text" />
      <div className="bardstyle">
        <Barnd SvgImg={Google} Title="Google" />
        <Barnd SvgImg={amazon} Title="amazon" />
        <Barnd SvgImg={Nokia} Title="Nokia" />
        <Barnd SvgImg={spotify} Title="spotify" />
        <Barnd SvgImg={microsoft} Title="microsoft" />
        <Barnd SvgImg={Google} Title="Google" />
        <Barnd SvgImg={amazon} Title="amazon" />
      </div>
    </section>
  );
};

export default BrandPage;
