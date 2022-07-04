import React from "react";
import "./style.scss";
import video from "../../images/workMap/video.png";
import Appearance from "../../hoc/animation/Appearance";
function Mistakes() {
  return (
    <>
      <div className="mistakes">
        <div className="mistakes__content">
          <div className="environment__block-descr">
            <h1 className="block-descr__title">
              We made a lot of mistakes, And we've learned not to make them.
            </h1>
            <p className="block-descr__descr">
              We are able to provide 25%-45% better rates than most of the US or
              EU based agencies. There is no secrete We are able to provide
              25%-45%
            </p>
            <svg
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="0.5" width="32" height="32" rx="4" fill="#161616" />
              <path
                d="M12.5833 16.7857C13.25 16.7857 13.7778 17.0063 14.1667 17.4474C14.5833 17.8609 14.7917 18.4123 14.7917 19.1015C14.7917 19.8459 14.5417 20.4386 14.0417 20.8797C13.5694 21.2932 12.9167 21.5 12.0833 21.5C11.1111 21.5 10.3472 21.1278 9.79167 20.3835C9.26389 19.6391 9 18.5777 9 17.1992C9 15.9586 9.27778 14.8145 9.83333 13.7669C10.3889 12.6917 11.2222 11.6165 12.3333 10.5414C12.3611 10.5138 12.4028 10.5 12.4583 10.5C12.5417 10.5 12.6111 10.5414 12.6667 10.6241C12.7222 10.7068 12.7222 10.7757 12.6667 10.8308C11.3056 12.2093 10.625 13.8358 10.625 15.7105C10.625 16.4825 10.7639 17.0476 11.0417 17.406C11.2917 16.9925 11.8056 16.7857 12.5833 16.7857ZM19.7917 16.7857C20.4583 16.7857 20.9861 17.0063 21.375 17.4474C21.7917 17.8609 22 18.4123 22 19.1015C22 19.8459 21.75 20.4386 21.25 20.8797C20.7778 21.2932 20.125 21.5 19.2917 21.5C18.3194 21.5 17.5556 21.1278 17 20.3835C16.4722 19.6391 16.2083 18.5777 16.2083 17.1992C16.2083 15.9586 16.4861 14.8145 17.0417 13.7669C17.5972 12.6917 18.4306 11.6165 19.5417 10.5414C19.5694 10.5138 19.6111 10.5 19.6667 10.5C19.75 10.5 19.8194 10.5414 19.875 10.6241C19.9306 10.7068 19.9306 10.7757 19.875 10.8308C18.5139 12.2093 17.8333 13.8358 17.8333 15.7105C17.8333 16.4825 17.9722 17.0476 18.25 17.406C18.5 16.9925 19.0139 16.7857 19.7917 16.7857Z"
                fill="white"
              />
            </svg>
            <div className="mistakes__bio">
              <p className="mistakes__bio-title">
                We are able to provide 25%-45% better rates than most of the US
                or EU based agencies. There is no secrete
              </p>
              <p className="mistakes__bio-name">-Alybek Фамилия, CEO</p>
            </div>
          </div>
          <div className="environment__block-images">
            <img src={video} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
export default () => Appearance(Mistakes);
