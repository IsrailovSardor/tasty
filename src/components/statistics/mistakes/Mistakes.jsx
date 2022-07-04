import React from 'react';
import therd from "../../../images/statistics/therd.png";
import play from "../../../images/statistics/play.svg";
import './mistakes.scss'
import Appearance from "../../../hoc/animation/Appearance";

const Mistakes = () => {

    return (
        <div className="therd__block">
            <div className="therd__text">
                <p className="therd__title">
                    We made a lot of mistakes, <br/><span className="therd__span">And we've learned not to make them.</span>
                </p>
                <p className="therd__descr">
                    Our employees strive for the best quality development and in working on interesting product Our employees strive for the best quality
                </p>
                <button className="nav__btn therd__btn">
                    About Us
                </button>
            </div>
            <div className="therd__img">
                <img src={therd} alt="" className="therd__img"/>
                <button className="play__btn">
                    <img src={play} alt="" className="play"/>
                </button>
            </div>
        </div>
    );
};

export default () => Appearance(Mistakes);