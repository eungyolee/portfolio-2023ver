import React from "react";
import "./Skills.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <Header />
      <p>개발 언어 및 도구 <span style={{ fontSize: "1rem", fontFamily: "Pretendard-Light" }}>(실력 : 1~5)</span></p>
      <div className="programmingLanguages">
        <div className="item" id="item">
          <img
            src="./images/skills/html.png"
            alt="HTML is not programming language."
          />
          <span>HTML<br />(실력 : 4~5)</span>
        </div>
        <div className="item" id="item">
          <img
            src="./images/skills/css.png"
            alt="CSS is not programming language too."
          />
          <span>CSS<br />(실력 : 4~5)</span>
        </div>
        <div className="item" id="item">
          <img src="./images/skills/js.png" alt="Javascript" />
          <span>JavaScript<br />(실력 : 2~4)</span>
        </div>
        <div className="item" id="item">
          <img src="./images/skills/ts.png" alt="Typescript" />
          <span>Typescript<br />(실력 : 1~2)</span>
        </div>
        <div className="item" id="item">
          <img src="./images/skills/py.png" alt="Python" />
          <span>Python<br />(실력 : 3~4)</span>
        </div>
      </div>
      <div className="frameworks">
        <div className="item" id="item">
          <img src="./images/skills/react.png" alt="React.js" />
          <span>React.js<br />(실력 : 1~2)</span>
        </div>
        <div className="item" id="item">
          <img src="./images/skills/vue.png" alt="Vue.js" />
          <span>Vue.js<br />(실력 : 1~3)</span>
        </div>
        <div className="item" id="item">
          <img src="./images/skills/firebase.png" alt="Firebase" />
          <span>Firebase<br />(실력 : 2~3)</span>
        </div>
      </div>
      <div className="tools">
        <div className="item" id="item">
          <img src="./images/skills/git.png" alt="Git" />
          <span>Git<br />(실력 : 2~4)</span>
        </div>
        <div className="item" id="item">
          <img src="./images/skills/vsc.png" alt="Visual Studio Code" />
          <span>Visual Studio Code</span>
        </div>
        <div className="item" id="item">
          <img src="./images/skills/ij.png" alt="IntelliJ IDEA" />
          <span>IntelliJ IDEA<br />ㅤ</span>
        </div>
        <div className="item" id="item">
          <img src="./images/skills/figma.png" alt="Figma" />
          <span>Figma<br />(실력 : 1~3)</span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Skills;
