import React from 'react';
import ourEmp from "../../../images/statistics/ourEmp.svg";
import zeon from "../../../images/statistics/zeon.svg";
import './world.scss'
import Appearance from "../../../hoc/animation/Appearance";


const World = () => {
    return (
        <div className="world">
            <img src={ourEmp} alt="" className="out__emp"/>
            
            <div className="world__img">
                <img src="/images/zeon.svg" alt="" className="zeon"/>
                <img src="/images/circleCounty1.svg" alt="" className="world__country1" />
                <img src="/images/circleCounty2.svg" alt="" className="world__country2" />
                <img src="/images/circleCounty3.svg" alt="" className="world__country3" />
                <img src="/images/circleCounty4.svg" alt="" className="world__country4" />
                <img src="/images/circleCounty5.svg" alt="" className="world__country5" />
                <img src="/images/circleCounty6.svg" alt="" className="world__country6" />
            </div>
        </div>
    );
};

export default () => Appearance(World);