import React from "react";
import sponsorshipImg from "../assets/sponsors/sponsor_JPG.png";
import capImg from "../assets/sponsors/c1.svg";
import bakerImg from "../assets/sponsors/bakertilly.svg";
import '../components/Sponsors.css';

const Sponsors = () => {
  return (
    <div className="sponsors-page">
      
      <div className="sponsors-container">
        <h1 className="sponsors-title">SPONSORS</h1>
        <p className="sponsors-intro">On behalf of the Omega Theta Chapter of Alpha Kappa Psi at the University of Maryland, we want to welcome you as a company sponsor for the 2021-2022 academic year! We would love to build and maintain a long-term, mutually beneficial relationship between AKPsi and your company.</p>
        
        <div className="sponsors-level">
          <p>Bronze</p>
          <hr></hr>

          <div className="sponsors-logos">
            <img src={bakerImg} alt="Baker Tilly Logo" className="sponsor-logo"/>
            <img src={capImg} alt="Capital One Logo" className="sponsor-logo"/>
          </div>
        </div>

        <div className = "container">

          <div className="sponsors-details">
            <p>In the sponsorship packet, we highlight some distinct AKPsi events as well as explain our mission and goals. Outlined in the packet, we have different levels of sponsorship with different benefits. To name a few, your company can obtain access to our member resume database, include job postings on our exclusive professional portal, and have priority scheduling for corporate events with our chapter! This is a great way to increase exposure to our chapter, its members, and the University of Maryland. Please email us at akpsiot.fundraising@gmail.com with any questions!</p>
          </div>

          <div className="sponsors-packet">
            <a href="https://www.akpsi-umd.org/_files/ugd/c8fdbf_c9720e1d3c8d440da25a9cb1b9c9151b.pdf">
              <img className="sponsors-packet-image" src={sponsorshipImg} alt="Alpha Kappa Psi Sponsorship Packet 2021"/>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Sponsors;
