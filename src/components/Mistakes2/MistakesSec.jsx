import React from "react";
import "./style.scss";
import about from "../../images/workMap/demo6.svg";
import Appearance from "../../hoc/animation/Appearance";
function Mistakes2() {
  return (
    <>
      <div className="mistakes2">
        <div className="mistakes__container">
          <div className="environment__block-descr">
            <h1 className="block-descr__title">
              We made a lot of mistakes,
              <br />
              <span>And we've learned not to make them.</span>
            </h1>
            <p className="block-descr__descr">
              Our employees strive for the best quality development and in
              working on interesting product Our employees strive for the best
              quality
            </p>
            <button className="btn__start">Contact Us</button>
          </div>
          <div className="environment__block-images">
            <img src={about} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
export default () => Appearance(Mistakes2);
