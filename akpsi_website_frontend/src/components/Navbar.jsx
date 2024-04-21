import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Your CSS file for styling
import logo from "../assets/akpsi_logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-items">
        <li className="nav-item">
          <img src={logo} alt="Logo" /> {/* Logo image */}
        </li>
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link to="/about">About</Link>
          <ul className="dropdown">
            <li>
              <Link to="/about#our-story">Our Story</Link>
            </li>
            <li>
              <Link to="/about#pillars">Pillars</Link>
            </li>
            <li>
              <Link to="/about#awards">Awards</Link>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          Rush
          <ul className="dropdown">
            <li>
              <Link to="/rush/welcome">Welcome</Link>
            </li>
            <li>
              <Link to="/rush/schedule">Schedule</Link>
            </li>
            <li>
              <Link to="/rush/faq">FAQ</Link>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <Link to="/sponsors">Sponsors</Link>
        </li>
        <li className="nav-item">
          <Link to="/gallery">Gallery</Link>
        </li>
        <li className="nav-item">
          <Link to="/leadership">Leadership</Link>
        </li>
        <li className="nav-item">
          Brothers
          <ul className="dropdown">
            <li>
              <Link to="/brothers/alumni">Alumni</Link>
            </li>
            <li>
              <Link to="/brothers/families">Families</Link>
            </li>
          </ul>
        </li>
        {/* Repeat for other main nav items */}
      </ul>
    </nav>
  );
};

export default Navbar;
