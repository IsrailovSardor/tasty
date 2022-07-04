import React, { useEffect, useState } from "react";
import Nav from "../../components/navigation/Nav";
import ToVacancy from "../../components/ToVacancy/ToVacancy";
import Footer from "../../components/footer/Footer";
import "./CareerPage.scss";
import ins from "../../images/links/ins.svg";
import wap from "../../images/links/wa.svg";
import tel from "../../images/links/tel.svg";
import lin from "../../images/links/lin.svg";
import close from "../../images/links/close.png";
import {validateEmail} from "../../functions/validation";

const CareerPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [visible, setVisible] = useState(false)
  const [statePlac, setStatePlac] = useState("")

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState("")

  const [nameError, setNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [numberError, setNumberError] = useState(false)

  const [validationStarted, setValidationStarted] = useState(false)

  const [sendButtonDisabled, setSendButtonDisabled] = useState(false)

  const [isActive1, setIsActive1] = useState(false);
  const optionsLeng = ["Whats app", "Viber", "Telegram", "Email", "Call me"];
  const [selectedOption, setSelectedOption] = useState(
    "Preferred method of communication"
  );

  const [success, setSuccess] = useState(false)

  const closeModal = (e) => {
    e.stopPropagation()
    setModalOpen(false)
  }
  const openModal = (e) => {
    e.stopPropagation()
    setModalOpen(true)
  }



  useEffect(() => {
    if (selectedOption === 'Telegram') 
    setStatePlac("Your phone number or nickname ")
    if (selectedOption === 'Whats app') 
    setStatePlac("Your phone number")
    if (selectedOption === 'Viber') 
    setStatePlac("Your phone number")
    if (selectedOption === 'Email') 
    setStatePlac("Your phone email")
    if (selectedOption === 'Call me') 
    setStatePlac("Your phone number")

  }, [selectedOption])

  useEffect(() => {
    if(!modalOpen){
      document.body.style.overflow = 'visible'
    }
    else{
      document.body.style.overflow = 'hidden'
    }
  }, [modalOpen])

  return (
    <>
      <Nav />
      <button onClick={openModal}>MODAL</button>
      {modalOpen ? (
        <div className="modal__wrapper" onClick={closeModal}>
          <form className={`modal__block ${success ? 'success' : ''}`}
                onClick={e => e.stopPropagation()}>
            <img src={close} alt="" className="close" onClick={closeModal}/>
            <h1 className="modal__title">Contact Us</h1>
            <p className="modal__descr">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <div className={`modal__inputs`}>
              <input type="text"
                     value={name}
                     onChange={e => {
                       setName(e.target.value)
                       if(validationStarted){
                         setNameError(e.target.value.length === 0)
                       }
                     }}
                     className={nameError ? "error" : ""}
                     placeholder="What’s your Name?" />
              <input type="text"
                     value={email}
                     onChange={e => {
                       setEmail(e.target.value)
                       if(validationStarted){
                         setEmailError(!validateEmail(e.target.value))
                       }
                     }}
                     className={emailError ? "error" : ""}
                     placeholder="Your email" />
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
                          setVisible(true)
                        }}
                        className="dropdown-item"
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              { visible ?
                <input type="text" placeholder={statePlac} />
                : null
              }
            </div>
            { visible ? 
            null :
            <div className="modal-block__lines">
              <p className="modal__line"></p>
              <p className="modal__text">or</p>
              <p className="modal__line"></p>
            </div>
            
          }
           { visible ? 
            null :
            <div className="modal-blocK__links">
              <img src={ins} alt="" />
              <img src={wap} alt="" />
              <img src={tel} alt="" />
              <img src={lin} alt="" />
            </div>
                    }
            <button type="button"
                    disabled={sendButtonDisabled}
                    onClick={() => {
              setValidationStarted(true)
              if(!validateEmail(email) || name.length === 0){
                if(!validateEmail(email)){
                  setEmailError(true)
                }
                if(name.length === 0){
                  setNameError(true)
                }
              }
              else{
                setValidationStarted(false)
                setSendButtonDisabled(true)
                setTimeout(() => {
                  setSendButtonDisabled(false)
                  setSuccess(true)
                }, 2000)
                setTimeout(() => {
                  setName("")
                  setEmail("")
                  setSuccess(false)
                  setModalOpen(false)
                }, 4000)
              }
            }}>
              Send
            </button>
          </form>
        </div>
      ) : (
        <div></div>
      )}
      <ToVacancy />
      <Footer />
    </>
  );
};

export default CareerPage;
