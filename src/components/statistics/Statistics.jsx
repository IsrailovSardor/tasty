import React from "react";
import "./statistics.scss";

// import World from "./world/World";
// import Quote from "./quote/Quote";
// import Mistakes from "./mistakes/Mistakes";

// import worldBackground from '../../images/statistics/worldBackground.svg'
import { ReactComponent as World } from '../../images/world.svg'
import { ReactComponent as Usa } from '../../images/world/usa.svg'
import { ReactComponent as Can } from '../../images/world/can.svg'
import { ReactComponent as Sh } from '../../images/world/sh.svg'
import { ReactComponent as Rus } from '../../images/world/rus.svg'
import { ReactComponent as Jpn } from '../../images/world/jap.svg'
import { ReactComponent as Vec } from '../../images/world/vel.svg'


function Statistics() {
  return (
    <div className="statistics">
      <div className="statistics__container">
        <div className="world__container">
          <div className="world__text">
            <h1>
              Our employers work
              <br />
              <span>All Over The World</span>
            </h1>
            <p className="world__text-descr">
              Our employees strive for the best quality development and in
              working on interesting products
            </p>
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
          <div className="world__country">
          <World className="world__img"/>
          <Usa className="usa__svg"/>
          <div className="title__country">
          <svg width="102" height="39" viewBox="0 0 102 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3 0C1.34315 0 0 1.34315 0 3V29V37.3065C0 38.2337 1.15262 38.6617 1.75772 37.9591L4.73684 34.5L7.12919 32H99C100.657 32 102 30.6569 102 29V3C102 1.34315 100.657 0 99 0H3Z" fill="#1D2352"/>
            </svg>
                <p>United staes</p>
          </div>
          <Can className="can__svg"/> 
          <div className="title__country">
          <svg width="102" height="39" viewBox="0 0 102 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3 0C1.34315 0 0 1.34315 0 3V29V37.3065C0 38.2337 1.15262 38.6617 1.75772 37.9591L4.73684 34.5L7.12919 32H99C100.657 32 102 30.6569 102 29V3C102 1.34315 100.657 0 99 0H3Z" fill="#1D2352"/>
            </svg>
                <p>Canada</p>
          </div>
          <Sh className="sh__svg"/> 
          <div className="title__country">
          <svg width="102" height="39" viewBox="0 0 102 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3 0C1.34315 0 0 1.34315 0 3V29V37.3065C0 38.2337 1.15262 38.6617 1.75772 37.9591L4.73684 34.5L7.12919 32H99C100.657 32 102 30.6569 102 29V3C102 1.34315 100.657 0 99 0H3Z" fill="#1D2352"/>
            </svg>
                <p>Poland</p>
          </div>
          <Rus className="rus__svg"/> 
          <div className="title__country">
          <svg width="102" height="39" viewBox="0 0 102 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3 0C1.34315 0 0 1.34315 0 3V29V37.3065C0 38.2337 1.15262 38.6617 1.75772 37.9591L4.73684 34.5L7.12919 32H99C100.657 32 102 30.6569 102 29V3C102 1.34315 100.657 0 99 0H3Z" fill="#1D2352"/>
            </svg>
                <p>Russia</p>
          </div>
          <Jpn className="jap__svg"/>
          <div className="title__country">
          <svg width="102" height="39" viewBox="0 0 102 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3 0C1.34315 0 0 1.34315 0 3V29V37.3065C0 38.2337 1.15262 38.6617 1.75772 37.9591L4.73684 34.5L7.12919 32H99C100.657 32 102 30.6569 102 29V3C102 1.34315 100.657 0 99 0H3Z" fill="#1D2352"/>
            </svg>
                <p>Japan</p>
          </div>
          <Vec className="vec__img"/>
          <div className="title__country">
          <svg width="102" height="39" viewBox="0 0 102 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3 0C1.34315 0 0 1.34315 0 3V29V37.3065C0 38.2337 1.15262 38.6617 1.75772 37.9591L4.73684 34.5L7.12919 32H99C100.657 32 102 30.6569 102 29V3C102 1.34315 100.657 0 99 0H3Z" fill="#1D2352"/>
            </svg>
                <p>Australia</p>
          </div>
          </div>
        </div>
      </div>

      {/* <img className={"world__background"} alt={"back"} src={worldBackground}/> */}
      {/*<div className="container">
                <div className="blue__work__content">
                    <World/>
                    <Quote/>
                    <Mistakes/>
                </div>
            </div> */}
    </div>
  );
}
export default Statistics;
