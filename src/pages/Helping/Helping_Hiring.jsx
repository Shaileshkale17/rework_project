import React from "react";
import "./Helping_Hiring.css";
import Candidates from "../../components/Candidates/Candidates";
const Helping_Hiring = () => {
  const Data = [
    {
      id: 1,
      title: "60%",
      title2: "Cost Reduce",
      img: "/src/assets/eos-icons_ai.png",
      text: "Zero overhead in the hiring process - promisel Source top quality candidates for some of the best companies",
    },

    {
      id: 2,
      title: "50% Faster",
      title2: "Recruitment by TAT",
      img: "/src/assets/eos-icons_ai (1).png",
      text: "Zers overhead in the hiring process promisel Source top quality candidates for some of the best companies",
    },
    {
      id: 3,
      title: "Highly Contextualized Interview",
      title2: "Interview",
      img: "/src/assets/mdi_user-card-details-outline.png",
      text: "Al models generate highly contextualized Interviews for the candidates based on your Company profile, Job descriptiori and Candidate's CV",
    },
    {
      id: 4,
      img: "/src/assets/healthicons_i-schedule-school-date-time-outline.png",
      title: "Automated Scheduling",
      title2: "Scheduling",
      text: "Email & WhatsApp based communication for interview scheduling with automated reminders.Al models generate highly contextualized Interviews for the candidates based on your Company profile, Job descriptiori and Candidate's CV",
    },
    {
      id: 5,
      img: "/src/assets/eos-icons_ai (2).png",
      title: "Al generated Interviews",
      title2: "On what matters",
      text: "0 manual interventions, completely seamless experience for the candidates",
    },
    {
      id: 6,
      img: "/src/assets/fluent_tasks-app-20-regular.png",
      title: "n-built",
      title2: "ATS",
      text: "To manage all of your candidates & Credo verified CVs Integrations with other ATS coming soon0 manual interventions, completely seamless experience for the candidates",
    },
  ];

  return (
    <section className="Helping">
      <p className="Helping-paras">
        <span> Our Amazing Benefits </span> Helpful For Your Hiring
      </p>
      <div className="card-Helping">
        {Data.map((data) => (
          <Candidates
            styleClass="cards-Helping"
            styleClassPara="cards-Helping-paragraph"
            key={data.id}
            SvgImg={data.img}
            NumberTitle={data.title}
            Title={data.title2}
            morePara={data.text}
          />
        ))}
      </div>
    </section>
  );
};

export default Helping_Hiring;
