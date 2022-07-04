import React from "react";
import "./clientSection.scss";

import airbnb from "../../images/clients/airbnb.svg";
import hubspot from "../../images/clients/hubspot.svg";
import google from "../../images/clients/google.svg";
import microsoft from "../../images/clients/microsoft.svg";
import walmart from "../../images/clients/walmart.svg";
import fedex from "../../images/clients/fedex.svg";
import Appearance from "../../hoc/animation/Appearance";

function ClientSection() {
  const logos = [
    airbnb,
    hubspot,
    google,
    microsoft,
    walmart,
    fedex,
    fedex,
    fedex,
  ];
  return (
    <div className="clientSection">
      <div className="container">
        <div className="line"/>
        <div className="clients">
          <p className="clients__title">Our client</p>
          <div className="clients__logos">
            {logos.map((logo, index) => (
              <img
                src={logo}
                className="logos"
                alt="logo"
                key={`clients__logos__images__${index}`}
              />
            ))}
          </div>
        </div>
        <div className="line"/>
      </div>
    </div>
  );
}

export default () => Appearance(ClientSection)
