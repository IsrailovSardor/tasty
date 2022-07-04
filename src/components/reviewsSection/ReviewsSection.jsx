import React from "react";
import "./reviewsSection.scss"

import upwork from '../../images/company/upwork.svg'
import clutchco from '../../images/company/clutchco.svg'
import FadeTop from "../../hoc/animation/FadeTop";
import Appearance from "../../hoc/animation/Appearance";

function ReviewsSection (){
return(
    <div className="reviewsSection">
        <div className="container">
            <div className="our__company__content">
                <p className="company__title">
                    What people says about our company
                </p>
                <div className="company__images">
                    <img src={upwork} alt="company" className="company__img"/>
                    <img src={clutchco} alt="company" className="company__img" />
                </div>
            </div>
        </div>
    </div>
)
}
export default () => Appearance(ReviewsSection)