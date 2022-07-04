import React from "react";
import "./style.scss";
import dp1 from '../../images/diplom/dp1.png'
import dp2 from '../../images/diplom/dp2.png'
import dp3 from '../../images/diplom/dp3.png'
import dp4 from '../../images/diplom/dp4.png'
import dp5 from '../../images/diplom/dp5.png'
import dp6 from '../../images/diplom/dp6.png'
import dp7 from '../../images/diplom/dp7.png'
import dp8 from '../../images/diplom/dp8.png'
import Appearance from "../../hoc/animation/Appearance";
import CustomAnimation from "../../hoc/animation/CustomAnimation";

const custom = {
  visible: { opacity: 1, scale: 1, transition: { duration: 2 } },
  hidden: { opacity: 0, scale: 1 }
};

function Diploms() {

  const diploms = [dp1, dp2, dp3, dp4, dp5, dp6, dp7, dp8]
  return (
    <>
      <div className="diploms">
        <div className="environment__container">
          <div className="environment__block-descr">
            <h1 className="block-descr__title">
              We just focused on our student
            </h1>
            <p className="block-descr__descr">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              vel elit elit velit condimentum velit, eget vulputate sapien.
              Mauris consequat ex eu elit commodo sagittis. Praesent auctor
              lorem a lacus congue, et lobortis
            </p>
          </div>
          <div className="environment__diploms">
            {
              diploms.map((dp, index) =>
                  <div className="img">
                    {CustomAnimation(() =>
                      <img src={dp} alt="dp" key={`diploms__item__${index}`}/>,
                        {
                          ...custom,
                          visible: {
                            ...custom.visible,
                            transition: {
                              ...custom.visible.transition,
                              delay: index%4/4
                            }

                          }
                        }
                    )}
                  </div>
              )
            }
          </div>
          <button className="btn__start">
            Download more
          </button>
        </div>
      </div>
    </>
  );
}

export default () => Appearance(Diploms);
