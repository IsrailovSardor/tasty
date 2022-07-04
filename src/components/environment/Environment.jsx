import React from "react";
import "./Environment.scss";
import about from "../../images/workMap/demo4.svg";
const Environment = () => {
  return (
    <div className="environment">
      <div className="environment__container">
        <div className="environment__block-descr">
          <h1 className="block-descr__title">
            We create an environment in which people want to{" "}
          </h1>
          <p className="block-descr__descr">
            Our employees strive for the best quality development and in working
            on interesting products
          </p>
          <div className="block-descr__btn">
            <button className="btn__contact">Contact Us</button>
            <button className="btn__start">Start career</button>
          </div>
          <div className="block-descr__static">
            <div className="static__averagae">
              <p className="static__mount">
                <span>$</span>1500
              </p>
              <p className="static__descr">Average salary</p>
            </div>
            <div className="static__averagae">
              <p className="static__mount">20</p>
              <p className="static__descr">Countries</p>
            </div>
            <div className="static__averagae">
              <p className="static__mount">
                145<span>+</span>
              </p>
              <p className="static__descr">Employees</p>
            </div>
          </div>
        </div>
        <div className="environment__block-images">
          <img src={about} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Environment;
