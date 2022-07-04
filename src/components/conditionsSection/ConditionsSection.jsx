import React from "react";
import "./consditionsSection.scss"

import salary from '../../images/conditions/salary.svg'
import Appearance from "../../hoc/animation/Appearance";
import CustomAnimation from "../../hoc/animation/CustomAnimation";

const conditions = [
    {
        img: salary,
        title: "We strive to create a better environment for developers",
        description: "We pay according to European wage standards"
    },
    {
        img: salary,
        title: "We strive to create a better environment for developers",
        description: "We pay according to European wage standards"
    },
    {
        img: salary,
        title: "We strive to create a better environment for developers",
        description: "We pay according to European wage standards"
    },
    {
        img: salary,
        title: "We strive to create a better environment for developers",
        description: "We pay according to European wage standards"
    },
    {
        img: salary,
        title: "We strive to create a better environment for developers",
        description: "We pay according to European wage standards"
    },
    {
        img: salary,
        title: "We strive to create a better environment for developers",
        description: "We pay according to European wage standards"
    }
]

const custom = {
    visible: { opacity: 1, x:0, transition: { duration: 1, delay: 0 } },
    hidden: { opacity: 0, x: 100 }
};

function ConditionsSection(){
    return(
        <div className="conditionsSection">
            <div className="container">
                <div className="conditions__content">
                    <div className=" conditions__list">
                        {
                            conditions.map((card, index) => (
                                CustomAnimation(() => (
                                    <div className="condition" key={`condition__${card.title}__${index}`}>
                                        <img src={salary} alt="condition" className="condition__image" />
                                        <p className="condition__title">Competitively capable salary</p>
                                        <p className="condition__description">We pay according to European wage standards</p>
                                    </div>
                                ),
                                    {
                                        ...custom,
                                        visible: {
                                            ...custom.visible,
                                            transition: {
                                                ...custom.visible.transition,
                                                delay: 0
                                            }
                                        }
                                    }
                                )
                            ))
                        }
                    </div>
                </div>

                <div className="conditions__description">
                    <div className="conditions__description__container">
                        <h1 className="conditions__description__title">
                            We strive to create a better environment for developers
                        </h1>
                        <p className="conditions__description__text">
                            Our employees strive for the best quality development and in working on interesting product
                            Our employees strive for the best quality development and in working on interesting productss
                        </p>
                        <button className="btn">Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ConditionsSection