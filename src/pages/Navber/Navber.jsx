import React from "react";
import Button from "../../components/Button/Button";
import "./Navber.css";
import { Link } from "react-router-dom";
const Navber = () => {
  const logo = "/src/assets/logo (1).png";
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="ReworkAi" />
        </Link>
      </div>
      <ul>
        <li>
          <Link to="Toent">Toent</Link>
        </li>
        <li>
          <Link to="ForEmployers">For Employers</Link>
        </li>
        <li>
          <Link to="AboutUs">About us</Link>
        </li>
        <li>
          <Link to="Company">Company</Link>
        </li>
      </ul>
      <div className="button-style">
        <Button
          type="submit"
          styleClass="NavLgin"
          btnTitle="Log In"
          LinkType="/Login"
        />
        <Button
          type="submit"
          styleClass="NavLgin"
          btnTitle="Get Started"
          LinkType="/GetStarted"
        />
      </div>
    </nav>
  );
};

export default Navber;
