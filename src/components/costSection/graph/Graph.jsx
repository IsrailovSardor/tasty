import React from 'react';
import graph from "../../../images/cost/graph.svg";
import FadeLeft from "../../../hoc/animation/FadeLeft";
import './graph.scss'
import Appearance from "../../../hoc/animation/Appearance";

const Graph = () => {
    return (
        <div className="cost__content">
            <img src={graph} alt="graph" className="cost__content__image" />
        </div>
    );
};

export default () => Appearance(Graph);