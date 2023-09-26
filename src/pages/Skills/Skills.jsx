import React from "react";
import "./Skills.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {ProgrammingLanguages, Frameworks, Tools} from "./SkillList"

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <Header />
      <p>개발 언어 및 도구 <span style={{ fontSize: "1rem", fontFamily: "Pretendard-Light" }}>(실력 : 1~5)</span></p>
      <div className="programmingLanguages">
        { ProgrammingLanguages.map(i => {
          return (
            <div className="item" id="item">
              <img src={"./images/skills/" + i.src} alt={i.alt} />
              <span><b>{i.name}</b><br />{i.skill}</span>
            </div>
          )
        })
        }
      </div>
      <div className="frameworks">
      { Frameworks.map(i => {
          return (
            <div className="item" id="item">
              <img src={"./images/skills/" + i.src} alt={i.alt} />
              <span><b>{i.name}</b><br />{i.skill}</span>
            </div>
          )
        })
        }
      </div>
      <div className="tools">
      { Tools.map(i => {
          return (
            <div className="item" id="item">
              <img src={"./images/skills/" + i.src} alt={i.alt} />
              <span><b>{i.name}</b><br />{i.skill}</span>
            </div>
          )
        })
        }
      </div>
      <Footer />
    </div>
  );
};

export default Skills;
