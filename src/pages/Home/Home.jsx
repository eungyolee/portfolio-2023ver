import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faFacebook,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpenText, } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "react-tooltip";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  let clicked = 0;
  let how = 0

  const profileImageClicked = () => {
    clicked += 1;
    if (clicked % 5 === 0) {
      how += 1;
      if (how <= 2) {
        alert("프로필 사진은 @l_sieun_l님이 그려주셨습니다!");
      } else if (how === 3) {
        alert("Copyright 2023. 이은교 all rights reserved.")
      }
      else if (how % 20 === 0) {
        alert(`이 사진을 ${clicked}번이나 눌러주셨군요! 사진이 닳겠어요 :)`)
      } 
      else {
        alert(`이 사진을 ${clicked}번이나 클릭해주셨군요!`);
      }
    }
  };

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
            <li
              data-tooltip-id="contactme"
              data-tooltip-content="eunkyo081223@naver.com"
            >
              <a
                href="mailto:eunkyo081223@naver.com"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faEnvelopeOpenText} />
              </a>
            </li>
            <li
              data-tooltip-id="contactme"
              data-tooltip-content="https://github.com/eungyolee"
            >
              <a
                href="https://github.com/eungyolee"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li data-tooltip-id="contactme" data-tooltip-content="@eungyolee_">
              <a
                href="https://www.instagram.com/eungyolee_/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li data-tooltip-id="contactme" data-tooltip-content="이은교">
              <a
                href="https://www.facebook.com/profile.php?id=100025765211896"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li data-tooltip-id="contactme" data-tooltip-content="eungyolee">
              <a
                href="https://discord.com/users/782167918452146176"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faDiscord} />
              </a>
            </li>
            <Tooltip id="contactme" place="bottom" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
