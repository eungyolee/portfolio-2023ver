import React, { useState } from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "react-tooltip";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ContactMe from "./ContactMe";

const Home = () => {
  const [clicked, setClicked] = useState(1);
  const [how, setHow] = useState(1);
  const date = new Date();

  const profileImageClicked = () => {
    setClicked(clicked + 1);
    console.log(clicked);
    if (clicked % 5 === 0) {
      setHow(how + 1);
      if (how <= 2) {
        alert("프로필 사진은 @fldpdlqslek님이 그려주셨습니다!");
      } else if (how === 3) {
        alert(`Copyright 2023 - ${ date.getFullYear() }. 이은교 all rights reserved.`)
      }
      else if (how % 20 === 0) {
        alert(`이 사진을 ${clicked}번이나 눌러주셨네요! 사진이 닳겠어요 :)`)
      } 
      else {
        alert(`이 사진을 ${clicked}번이나 클릭해주셨군요!`);
      }
    }
  }

  return (
    <div className="home">
      <Header />
        <div className="profileCard" id="profileCard-mobile">
        <div className="elements">
          <div className="profileImage" onClick={profileImageClicked} id="pi-mobile"></div>
          <p className="myName">이은교</p>
          <p className="introduce">A Student Developer</p>
        </div>
      </div>
      <div className="main">
        <div className="introduceMe">
          <p className="helloWorld" id="hw-mobile">Hello, world!👋</p>
          <p className="introduceText">
            저는 개발자를 꿈꾸며 노력하는 학생 <b>이은교</b>입니다!
          </p>
          <div className="contactMe" id="cm-mobile">
            {
              ContactMe.map(i => {
                return (
                  <li data-tooltip-id="contactme" data-tooltip-content={i.content}>
                    <a
                      href={i.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={i.icon} />
                    </a>
                  </li>
                )
              })
            }
            <Tooltip id="contactme" place="bottom" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
