import React from "react";
import "./Success_Stories.css";
import Success_Stories_card from "../../components/Success_Stories_card/Success_Stories_card";
const Success_Stories = () => {
  const img_amz_comapny = "/src/assets/unsplash_MpdLxiIg0P0 (1).png";
  const img_google_comapny = "/src/assets/unsplash_MpdLxiIg0P0 (2).png";
  const img_mic_comapny = "/src/assets/unsplash_MpdLxiIg0P0 (3).png";
  return (
    <section className="Success_Stories">
      <div className="Success_Stories_div_para">
        <p className="Success_Stories-css-paras">
          <span className="span"> Success</span> Stories
        </p>
      </div>
      <div className="card_main">
        <Success_Stories_card
          img={img_amz_comapny}
          title="Rework has been a great way to make the hiring process easier and faster."
          para="“We've been able to save money and time, and the recruiters have been able to find the best employers leads. Highly recommend! “"
          path="/amzanareviews"
        />
        <Success_Stories_card
          img={img_google_comapny}
          title="Rework has been a great way to make the hiring process easier and faster."
          para="“We've been able to save money and time, and the recruiters have been able to find the best employers leads. Highly recommend! “"
          path="/Googlereviews"
        />
        <Success_Stories_card
          img={img_mic_comapny}
          title="Rework has been a great way to make the hiring process easier and faster."
          para="“We've been able to save money and time, and the recruiters have been able to find the best employers leads. Highly recommend! “"
          path="/microsoftreviews"
        />
      </div>
    </section>
  );
};

export default Success_Stories;
