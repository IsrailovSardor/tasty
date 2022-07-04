import React from "react";
import "./style.scss";
import about from "../../images/workMap/demo5.png";
import Appearance from "../../hoc/animation/Appearance";

function AboutUs() {
  return (
    <>
      <div className="AboutUs">
        <div className="environment__container">
          <div className="environment__block-descr">
            <h1 className="block-descr__title">Little bit about us</h1>
            <p className="block-descr__descr">
              “A team is a circle of its own people with a common goal.”
            </p>
            <p className="block-descr__descrs">
              We are able to provide 25%-45% better rates than most of the US or
              EU based agencies. There is no secrete We are able to provide
              25%-45% Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aliquam rutrum nulla urna, ac maximus quam maximus vel. Quisque
              ultricies odio lectus, quis tincidunt dolor feugiat ac. Aliquam
              eget augue nec dui egestas suscipit. In imperdiet dapibus ante, at
              convallis erat porttitor ut. Etiam a sem in nibh convallis cursus.
              Praesent gravida sed risus a mollis. Etiam nunc neque, tincidunt
              et hendrerit non, convallis et tortor.
              <br />
              <br />
              Duis id mollis velit. Maecenas sit amet suscipit urna. Integer
              vitae sodales ligula. Nam auctor id nisl et ornare. In mauris
              risus, consequat et enim a, sagittis fringilla ipsum. Morbi
              gravida eros vel dictum ultrices. Sed quis tortor purus. Etiam at
              venenatis
            </p>
          </div>
          <div className="environment__block-images">
            <img src={about} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
export default () => Appearance(AboutUs);
