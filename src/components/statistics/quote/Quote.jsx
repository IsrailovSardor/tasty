import React from 'react';
import two from "../../../images/statistics/two.svg";
import './quote.scss'
import Appearance from "../../../hoc/animation/Appearance";

const Quote = () => {
    return (
        <div className="second__block">
            <img src={two} alt="" className="two__item"/>
            <p className="second__block_title">
                Our main goal is to give people their dream job
            </p>
            <p className="second__block_subtitle">
                Alybek  Фамилия
            </p>
            <p className="second__block_descr">
                CEO
            </p>
        </div>
    );
};

export default () => Appearance(Quote);