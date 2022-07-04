import React from 'react';
import CustomAnimation from "../../../hoc/animation/CustomAnimation";


const WorkMapItem = ({number, descriptionTitle, descriptionText, image, side}) => {

    const custom = {
        visible: { opacity: 1, x:0, transition: { duration: 1, delay: 0 } },
        hidden: { opacity: 0, x: side === "left" ? -100 : 100}
    };

    return (
        <div className={`work__demonstration__item ${side}`}>
            {CustomAnimation(() =>
                <img src={image} alt="people" className="demonstration__image"/>,
                custom
            )
            }
            <div className="demonstration__line">
                <div className="demonstration__line__number">
                    {number}
                </div>
                <svg width="1" height="328" viewBox="0 0 1 328" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0.5" y1="0.905029" x2="0.499986" y2="326.821" stroke="#C9D4EF" stroke-linecap="round" stroke-dasharray="20 20"/>
                </svg>
            </div>
            <div className="demonstration__description">
                {CustomAnimation(() =>
                    <>
                        <h3>
                            {descriptionTitle}
                        </h3>
                        <p>
                            {descriptionText}
                        </p>
                    </>,
                    {
                        ...custom,
                        hidden: {
                            ...custom.hidden,
                            x: side === "left" ? 100 : -100
                        }
                    }
                )
                }
            </div>
        </div>
    );
};

export default WorkMapItem;