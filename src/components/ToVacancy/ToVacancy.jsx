import React, {useEffect, useState} from "react";
import "./style.scss";
import {validateEmail, validateName} from "../../functions/validation";
import {getAnswers, getQuestion} from "../../functions/api";

function ToVacancy() {
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);

  const [validationStarted, setValidationStarted] = useState(false)

  const optionsLeng = [
    "FrontEnd",
    "QA testing",
    "Backend",
    "Project - managment",
  ];
  // const optionQuetion = [
  //   "1. Cant do anything ",
  //   "2. A little bit can ",
  //   "3. I'm just getting started.",
  //   "4. I'm a beginner.",
  //   "5. I can work, but I need help.",
  //   "6. I can do everything myself.",
  //   "7. I know enough and can work on my own",
  //   "8. I know a lot of things ",
  //   "9. I'm a demigod and I can do anything.",
  //   "10. I came up with this.",
  // ];

  const [optionQuetion,  setOptionQuetion] = useState([])

  const defaultCountries = [
    {
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAABFCAMAAACsYjIdAAAAbFBMVEX/AAD//wD/+wD/8QD/tgD/lwD/1QD/ugD/8wD/xwD/kgD/3wD/nwD/9QD/9wD/6AD/OwD/2gD/qwD/cgD/fwD/bAD/SgD/ywD/7AD/VAD/hQD/GAD/LAD/WQD/pgD/sQD/eAD/jAD/wQD/ZADYQnKyAAADtUlEQVRYhe2YWa+rOBCEu1jMYhLMZhabBJL//x9vOZm5522kkeA8UQ8JiSI+dXe5u4nIpUuXLl269F/yTsT9Ho6oYRX7EMlE3r8E7XqRWHwukot7iaynE2cici8wPSSpJW3EFefnWQ9SlwN8rQzKFYs0ldjhRKB7GOkjydsSBkkCE9USQ6Sez4zVw77hJl0hxTjxpWxgeyiR9iSiLZ0U2uChMCICFfGiqMi0zVlQ6WFKzBOaAIy1jsN7g9roEGt/AtGxamPscBtJylZn19W6OWHEBWinNSlOgJpEmzeyNiBdr7/p1Z1L+J4+GbE7xUxP+BET8LZzqfCR2q1ZgTsawzb1PJo4D05uUT8hMpLkqnN7XPdua+JWTARd1sDkj4auGRYfgrPdVMpbg77ZoWap4tWE79vQhQ/HViiWO1LjbcGqGtemznheGuNT3MoqeTzUsdAu3VhTplBuyLwfZyPL5sxQiCmghZXGTWcHO8nsyLv+jr0LqSw5ZuiaUYs8wud5wbTN4XcHY10dOpAE22pJOza+VGTZP0G+5OPlWr2OhLr0uUgaE3cPKS5DrI89xNkz3/ymgU6X6thhM29Mo1JIglGlQyojp7dKpEXwbuSeqHV2/DT3L/IqC2weiSTowpGppIDbAZMiYg5i1R2JTFXSbU2AjhLXsjC/45NxDnLTzC0Hge6dHQ71Udfvn5Hy8OB59ZbWqUKbV+G6N3AfEz+ORH5l+yKwhDmdIrGBwl2pkSTiBH/htWWIxkPLOqtook1voe2zlt3npJAYLmkrLi3I188ufJx8Nexjo2JYwS5RI+l3yvRST6ysGOTZPcCPlu/o30wKx+3h2ww402TAZl40M5RLeVaPRS6Bkd/BuXmvg4u+WiSvw752bxAd3gRt5Zz3VSijY1Ljf6Fct7mCcmlK5qg+YXNYFVeUGq2sbsBfzd6yGU5x6BN6P5rZ51nbv8nlspn+QJfvoHm/6LHjxbv77LP6jU5MpXiAcpV6PsrQXnSUup2y5A+4ZeazZqd/708rh7Vs5XHZnuYEqLLiNcawc2Ish3UdyrADoyhgk/sJQMp59r66t7gnPyWNUNTwrHMyHr6U/aNiCz2XTxEVNAcZX9qo7jC34ayekdygTlyU0K1lizd0ggFVkQvbrypPIn40tIyVk0ZZ7BnzulexKI6095nP4tZLUkpyk+wu04uPq9sk7rRy/oi7Z7NKvgm7EVugZi3PKuePmEjmk9ZpvBRG3G/9qeM/DWqYf+PvnEuXLl26dOn/6Q9D6jZH+VNrjQAAAABJRU5ErkJggg==",
      counry: "Kyrgyzstan",
    },
    {
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAABNCAMAAABAMbBwAAAAGFBMVEX////VKx4AOabLy+MAIqAAOqyvMFbYKxdF4jIyAAAAQUlEQVRoge3NQQGAIAAEsFNU+jcmBdzDrcASAABgj1GQpyB3gVQqlUqlUqn01+lbkK8gsyBXgVQqlUqlUqlUetgCJXArDWUHTGUAAAAASUVORK5CYII=",
      counry: "Russia",
    }
  ]
  const [optionCountry, setOptionCountry] = useState([
    {
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAABFCAMAAACsYjIdAAAAbFBMVEX/AAD//wD/+wD/8QD/tgD/lwD/1QD/ugD/8wD/xwD/kgD/3wD/nwD/9QD/9wD/6AD/OwD/2gD/qwD/cgD/fwD/bAD/SgD/ywD/7AD/VAD/hQD/GAD/LAD/WQD/pgD/sQD/eAD/jAD/wQD/ZADYQnKyAAADtUlEQVRYhe2YWa+rOBCEu1jMYhLMZhabBJL//x9vOZm5522kkeA8UQ8JiSI+dXe5u4nIpUuXLl269F/yTsT9Ho6oYRX7EMlE3r8E7XqRWHwukot7iaynE2cici8wPSSpJW3EFefnWQ9SlwN8rQzKFYs0ldjhRKB7GOkjydsSBkkCE9USQ6Sez4zVw77hJl0hxTjxpWxgeyiR9iSiLZ0U2uChMCICFfGiqMi0zVlQ6WFKzBOaAIy1jsN7g9roEGt/AtGxamPscBtJylZn19W6OWHEBWinNSlOgJpEmzeyNiBdr7/p1Z1L+J4+GbE7xUxP+BET8LZzqfCR2q1ZgTsawzb1PJo4D05uUT8hMpLkqnN7XPdua+JWTARd1sDkj4auGRYfgrPdVMpbg77ZoWap4tWE79vQhQ/HViiWO1LjbcGqGtemznheGuNT3MoqeTzUsdAu3VhTplBuyLwfZyPL5sxQiCmghZXGTWcHO8nsyLv+jr0LqSw5ZuiaUYs8wud5wbTN4XcHY10dOpAE22pJOza+VGTZP0G+5OPlWr2OhLr0uUgaE3cPKS5DrI89xNkz3/ymgU6X6thhM29Mo1JIglGlQyojp7dKpEXwbuSeqHV2/DT3L/IqC2weiSTowpGppIDbAZMiYg5i1R2JTFXSbU2AjhLXsjC/45NxDnLTzC0Hge6dHQ71Udfvn5Hy8OB59ZbWqUKbV+G6N3AfEz+ORH5l+yKwhDmdIrGBwl2pkSTiBH/htWWIxkPLOqtook1voe2zlt3npJAYLmkrLi3I188ufJx8Nexjo2JYwS5RI+l3yvRST6ysGOTZPcCPlu/o30wKx+3h2ww402TAZl40M5RLeVaPRS6Bkd/BuXmvg4u+WiSvw752bxAd3gRt5Zz3VSijY1Ljf6Fct7mCcmlK5qg+YXNYFVeUGq2sbsBfzd6yGU5x6BN6P5rZ51nbv8nlspn+QJfvoHm/6LHjxbv77LP6jU5MpXiAcpV6PsrQXnSUup2y5A+4ZeazZqd/708rh7Vs5XHZnuYEqLLiNcawc2Ish3UdyrADoyhgk/sJQMp59r66t7gnPyWNUNTwrHMyHr6U/aNiCz2XTxEVNAcZX9qo7jC34ayekdygTlyU0K1lizd0ggFVkQvbrypPIn40tIyVk0ZZ7BnzulexKI6095nP4tZLUkpyk+wu04uPq9sk7rRy/oi7Z7NKvgm7EVugZi3PKuePmEjmk9ZpvBRG3G/9qeM/DWqYf+PvnEuXLl26dOn/6Q9D6jZH+VNrjQAAAABJRU5ErkJggg==",
      counry: "Kyrgyzstan",
    },
    {
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAABNCAMAAABAMbBwAAAAGFBMVEX////VKx4AOabLy+MAIqAAOqyvMFbYKxdF4jIyAAAAQUlEQVRoge3NQQGAIAAEsFNU+jcmBdzDrcASAABgj1GQpyB3gVQqlUqlUqn01+lbkK8gsyBXgVQqlUqlUqlUetgCJXArDWUHTGUAAAAASUVORK5CYII=",
      counry: "Russia",
    },
  ])

  const [selectedOption, setSelectedOption] = useState(optionsLeng[0]);
  const [selectedSkills, setSelectedSkills] = useState(
    "How do you rate your skills"
  );
  const [selectedCountrys, setSelectedCountrys] = useState(optionCountry[0]);

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [nameError, setNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)

  const [searchValue, setSearchValue] = useState("")

  const [checkbox, setCheckbox] = useState(false)

  const [selectedSkillsValidated, setSelectedSkillsValidated] = useState(false)

  useEffect(() => {
    setSelectedSkillsValidated(true)
  }, [selectedSkills])

  useEffect( () => {
    getQuestion()
        .then(res => {
          setSelectedSkills(res[0].name)
        })
        .catch(err => console.log("getQuestion error"))

    getAnswers()
        .then(answers => {
          setOptionQuetion(answers.map((item, index) => `${index+1}. ${item.answer}`))
        })
        .catch(err => console.log("getQuestion error"))
  }, [])

  const sendData = () => {
    setValidationStarted(true)
    if(!validateName(name)){
      setNameError(true)
    }
    if(!validateEmail(email)){
      setEmailError(true)
    }
    if(selectedSkills === 'How do you rate your skills'){
      setSelectedSkillsValidated(false)
    }
    if(validateName(name) && validateEmail(email) && selectedSkills !== 'How do you rate your skills'){
      setTimeout(() => {
        console.log(name, email)
      }, 3000)
      setValidationStarted(false)
    }
  }

  return (
    <>
      <div className="vacancy">
        <div className="container">
          <div className="vacancy__content">
            <div className="vacancy__block">
              <p className="vacancy__title">Respond to the vacancy</p>
              <p className="vacancy__descr">
                Our employees strive for the best quality development and in
                working on interesting products
              </p>
              <input
                type="text"
                placeholder="Your full name"
                className={`vacancy__input ${nameError ? 'error' : ''}`}
                value={name}
                onChange={e => {
                  setName(e.target.value)
                  if(validationStarted){
                    if(validateName(e.target.value)){
                      setNameError(false)
                    }
                    else setNameError(true)
                  }
                }}
              />
              <input
                type="text"
                placeholder="Your email"
                className={`vacancy__input ${emailError ? 'error' : ''}`}
                value={email}
                onChange={e => {
                  setEmail(e.target.value)
                  console.log(validationStarted)
                  if(validationStarted){
                    if(validateEmail(e.target.value)){
                      setEmailError(false)
                    }
                    else setEmailError(true)
                  }
                }}
              />
              <div className="dropdown">
                <div
                  className="dropdown-btn"
                  onClick={(e) => setIsActive1(!isActive1)}
                >
                  {selectedOption}

                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={isActive1 && "rotate"}
                  >
                    <path
                      d="M3.33317 10.8333L7.99984 6.16668L12.6665 10.8333"
                      stroke="#200E32"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                {isActive1 && (
                  <div className="dropdown-content">
                    {optionsLeng.map((option) => (
                      <div
                        onClick={() => {
                          setSelectedOption(option);
                          setIsActive1(false);
                        }}
                        className="dropdown-item"
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="dropdown">
                <div
                  className={`dropdown-btn skills ${!selectedSkillsValidated && validationStarted ? 'error' : ''}`}
                  onClick={(e) => setIsActive2(!isActive2)}
                >
                  {selectedSkills}
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={isActive2 && "rotate"}
                  >
                    <path
                      d="M3.33317 10.8333L7.99984 6.16668L12.6665 10.8333"
                      stroke="#200E32"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                {isActive2 && (
                  <div className="dropdown-content">
                    {optionQuetion.map((option) => (
                      <div
                        onClick={() => {
                          setSelectedSkills(option);
                          setIsActive2(false);
                        }}
                        className="dropdown-item"
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="dropdown">
                <div
                  className="dropdown-btn"
                  onClick={(e) => setIsActive3((prev) => !prev)}
                >
                  <div className="dropdown-btn__block">
                    <img src={selectedCountrys.img} alt="" />
                    <p>{selectedCountrys.counry}</p>
                  </div>
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={isActive3 && "rotate"}
                  >
                    <path
                      d="M3.33317 10.8333L7.99984 6.16668L12.6665 10.8333"
                      stroke="#200E32"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                {isActive3 && (
                  <div className="dropdown-content">
                    <div className="dropdown-search">
                      <svg
                        width="14"
                        height="15"
                        viewBox="0 0 14 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_0_13144)">
                          <path
                            d="M6.1653 0.5C2.76585 0.5 0 3.26585 0 6.6653C0 10.065 2.76585 12.8306 6.1653 12.8306C9.56495 12.8306 12.3306 10.065 12.3306 6.6653C12.3306 3.26585 9.56495 0.5 6.1653 0.5ZM6.1653 11.6924C3.39339 11.6924 1.13821 9.43725 1.13821 6.66533C1.13821 3.89341 3.39339 1.63821 6.1653 1.63821C8.93722 1.63821 11.1924 3.89339 11.1924 6.6653C11.1924 9.43722 8.93722 11.6924 6.1653 11.6924Z"
                            fill="#484848"
                          />
                          <path
                            d="M13.833 13.5285L10.5701 10.2656C10.3478 10.0433 9.98772 10.0433 9.76538 10.2656C9.54305 10.4877 9.54305 10.8482 9.76538 11.0703L13.0283 14.3332C13.1394 14.4443 13.2849 14.4999 13.4306 14.4999C13.5761 14.4999 13.7218 14.4443 13.833 14.3332C14.0553 14.1111 14.0553 13.7506 13.833 13.5285Z"
                            fill="#484848"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_0_13144">
                            <rect
                              width="14"
                              height="14"
                              fill="white"
                              transform="translate(0 0.5)"
                            />
                          </clipPath>
                        </defs>
                      </svg>

                      <input type="text"
                             placeholder="Search"
                             onChange={e => {
                               setSearchValue(e.target.value)
                               const countries = defaultCountries.filter(country => {
                                 return country.counry.toLowerCase().includes(e.target.value.toLowerCase())
                               })
                              setOptionCountry(countries)
                             }}
                             value={searchValue}/>
                    </div>
                    {optionCountry.map((option, index) => (
                      <div
                        key={index}
                        onClick={() => {
                          setSelectedCountrys(option);
                          setIsActive3(false);
                        }}
                        className="dropdown-item"
                      >
                        <img src={option.img} alt="" />
                        {option.counry}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="for__vc">
                <p className="vc__title">Upload your CV</p>
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="vc__img"
                >
                  <path
                    opacity="0.4"
                    d="M6.947 22C4.496 22 2.5 19.9698 2.5 17.4755V12.5144C2.5 10.0252 4.49 8 6.937 8L18.053 8C20.505 8 22.5 10.0302 22.5 12.5256V17.4846C22.5 19.9748 20.51 22 18.063 22H17.123H6.947Z"
                    fill="#009EE3"
                  />
                  <path
                    d="M11.9548 2.22103L9.0458 5.06682C8.7458 5.36094 8.7458 5.83427 9.0478 6.12742C9.3498 6.41959 9.8368 6.41862 10.1368 6.12547L11.7298 4.56623V6.06119V14.4515C11.7298 14.8654 12.0748 15.2014 12.4998 15.2014C12.9258 15.2014 13.2698 14.8654 13.2698 14.4515V4.56623L14.8628 6.12547C15.1628 6.41862 15.6498 6.41959 15.9518 6.12742C16.1028 5.98036 16.1788 5.78849 16.1788 5.59566C16.1788 5.40477 16.1028 5.21291 15.9538 5.06682L13.0458 2.22103C12.9008 2.07981 12.7048 1.99995 12.4998 1.99995C12.2958 1.99995 12.0998 2.07981 11.9548 2.22103Z"
                    fill="#009EE3"
                  />
                </svg>

                {/* <img src="/images/Upload.svg" alt="" className="vc__img" /> */}
              </div>
              <div className="checkbox">
                <input
                  type="checkbox"
                  className="custom-checkbox"
                  id="happy"
                  name="happy"
                  value="yes"
                  checked={checkbox}
                  onChange={() => {
                    setCheckbox(!checkbox)
                  }}
                />
                <label for="happy"></label>
                <p className="chechbox__title">
                  Я принимаю <span>“Политику конфиденциальности”</span>
                </p>
              </div>
              <button className="submit__btn" onClick={sendData}>Send</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ToVacancy;
