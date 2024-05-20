import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="contact-us">
        <p><span>Email: </span>leorp392@yahoo.com</p>
        <p><span>Phone: </span>954 901 6488</p>
      </div>
      <div className="code">
        <a href="https://github.com/Leonard392/react-gym-app"><i class='bx bxl-github'></i></a>
        <a href="https://www.linkedin.com/in/leonardorodriguez392/"><i class='bx bxl-linkedin-square'></i></a>
      </div>
      <div className="comming-soon">
        <i class='bx bxl-facebook-circle' ></i>
        <i class='bx bxl-instagram' ></i>
        <i class='bx bxl-youtube' ></i>
      </div>
    </div>
  )
}
