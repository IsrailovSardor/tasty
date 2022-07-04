import React from "react";
import "./costSection.scss"

import checkbox from '../../images/cost/checkbox.svg'
import Graph from "./graph/Graph";
import Appearance from "../../hoc/animation/Appearance";

function CostSection(){
    return(
        <div className="costSection">
            <div className="container">
                <div className="cost__description">
                    <div className="cost__description__container">
                        <h1 className="cost__description__title">
                            How much will it cost?
                        </h1>
                        <p className="cost__description__text">
                            We are able to provide 25%-45% better rates than most of the US or EU based agencies. There is no secrete souce: only lower taxes. We pay all the taxes and insurance fees locally thus reducing the tax burden.
                        </p>
                        <ul className="cost__checkboxes">
                            <li className="cost__checkbox">
                                <img src={checkbox} alt="" className="checkbox__image"/>
                                <p className="cost__checkbox__text">
                                    Transparent, fixed fees
                                </p>
                            </li>
                            <li className="cost__checkbox">
                                <img src={checkbox} alt="" className="checkbox__image"/>
                                <p className="cost__checkbox__text">
                                    Seemless transactions
                                </p>
                            </li>
                            <li className="cost__checkbox">
                                <img src={checkbox} alt="" className="checkbox__image" />
                                <p className="cost__checkbox__text">
                                    Pay as you go fees
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <Graph/>
            </div>
        </div>
    )
}
export default () => Appearance(CostSection)