import React from "react";
import "./Customer.css";
import Customer_card from "../../components/Customer_card/Customer_card";

const Customer = () => {
  const imageUser = "/src/assets/Ellipse 1.png";

  const UserData = [
    {
      id: "1",
      text: `“Rework has been a great way to make the hiring process easier and
  faster. We've been able to save money and time, and the recruiters have
  been able to find the best employers leads. Highly recommend! “`,
      userimage: "/src/assets/Ellipse 1.png",
      username: "Theresa Webb",
      userJob: "sub_titleHR Manager, Amazon",
    },
    {
      id: "2",
      text: `“Rework has been a great way to make the hiring process easier and faster. We've been able to save money and time, and the recruiters have been able to find the best employers leads. Highly recommend! ““ Rework has been a great way to make the hiring process easier and faster.  Highly recommend! “`,
      userimage: "/src/assets/Ellipse 2.png",
      username: "Savannah Nguyen",
      userJob: "HR Manager, Microsoft",
    },
    {
      id: "3",
      text: `“Rework has been a great way to make the hiring process easier and
  faster. We've been able to save money and time, and the recruiters have
  been able to find the best employers leads. Highly recommend! “`,
      userimage: "/src/assets/Ellipse 1.png",
      username: "Theresa Webb",
      userJob: "sub_titleHR Manager, Amazon",
    },
    {
      id: "4",
      text: `“ Rework has been a great way to make the hiring process easier and faster. We've been able to save money and time, ““ Rework has been a great way to make the hiring process easier and faster.  Highly recommend! “`,
      userimage: "/src/assets/Ellipse 1 (1).png",
      username: "Ronald Richards",
      userJob: "HR Manager, Google",
    },
    {
      id: "5",
      text: `“ Rework has been a great way to make the hiring process easier and faster. We've been able to save money and time, ““ Rework has been a great way to make the hiring process easier and faster.  Highly recommend! “`,
      userimage: "/src/assets/Ellipse 1 (1).png",
      username: "Ronald Richards",
      userJob: "HR Manager, Google",
    },
    {
      id: "6",
      text: `“ Rework has been a great way to make the hiring process easier and faster. We've been able to save money and time, ““ Rework has been a great way to make the hiring process easier and faster.  Highly recommend! “`,
      userimage: "/src/assets/Ellipse 1 (1).png",
      username: "Ronald Richards",
      userJob: "HR Manager, Google",
    },
  ];

  return (
    <section className="Customer">
      <div>
        <p className="Customer-paras">
          <span className="span"> Customer</span> Testimonials
        </p>
        <p className="Customer-About">What others has say About Us</p>
      </div>
      <div className="Customer_card_main">
        {UserData.map((user, index) => (
          <Customer_card
            User_img={user.userimage}
            index={index}
            text={user.text}
            User_Name={user.username}
            sub_title={user.userJob}
          />
        ))}
      </div>
    </section>
  );
};

export default Customer;
