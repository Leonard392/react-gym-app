import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <h1 className="brand">Brand Gym</h1>

      <div className="navbar-list">
        <Link to="/" className="navbar-link">
          <p className="navbar-item">Rates</p>
        </Link>
        <Link to="/" className="navbar-link">
          <p className="navbar-item">Our Facilities</p>
        </Link>
        <Link to="/" className="navbar-link">
          <p className="navbar-item">Suplements</p>
        </Link>
        <Link to="/" className="navbar-link">
          <p className="navbar-item">About Us</p>
        </Link>
      </div>
    </div>
  );
}
