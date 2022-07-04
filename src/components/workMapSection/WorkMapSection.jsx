import React from "react";
import "./workMapSection.scss"

import demo1 from '../../images/workMap/demo1.svg'
import demo2 from '../../images/workMap/demo2.svg'
import demo3 from '../../images/workMap/demo3.svg'
import demo4 from '../../images/workMap/demo4.svg'
import WorkMapItem from "./workMapItem/WorkMapItem";

const workMap = [
    {
        number: "1",
        descriptionTitle: "Determining your level of knowledge",
        descriptionText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel condimentum velit, eget vulputate sapien.Lorem ipsum dolor sit amet",
        image: demo1,
        side: "left"
    },
    {
        number: "2",
        descriptionTitle: "Starting an internship or starting a job",
        descriptionText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel condimentum velit, eget vulputate sapien.Lorem ipsum dolor sit amet",
        image: demo2,
        side: "right"
    },
    {
        number: "3",
        descriptionTitle: "Determining your level of knowledge",
        descriptionText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel condimentum velit, eget vulputate sapien.Lorem ipsum dolor sit amet",
        image: demo3,
        side: "left"
    },
    {
        number: "4",
        descriptionTitle: "Starting an internship or starting a job",
        descriptionText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel condimentum velit, eget vulputate sapien.Lorem ipsum dolor sit amet",
        image: demo4,
        side: "right"
    }
]

function WorkMapSection(){
    return(
        <div className="workMapSection">
            <div className="container">
                <div className="work__content">
                    <h1 className="work__title">How our work is structured</h1>
                    <p className="work__description">
                        Our employees strive for the best quality development and in working on interesting product Our employees strive for the best
                    </p>
                    <button className="btn work__btn">Contact Us</button>
                    <div className="work__map">
                        {
                            workMap.map((item, index) =>
                                <WorkMapItem {...item} key={`work__map__item__${index}`}/>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WorkMapSection