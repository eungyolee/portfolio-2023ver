import React from "react";
import "./Skills.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <Header />
      <p>개발 언어 및 도구</p>
      <div className="programmingLanguages">
        <img
          src="./images/skills/html.png"
          alt="HTML is not programming language."
        />
        <img
          src="./images/skills/css.png"
          alt="CSS is not programming language too."
        />
        <img src="./images/skills/js.png" alt="Javascript" />
        <img src="./images/skills/ts.png" alt="Typescript" />
        <img src="./images/skills/py.png" alt="Python" />
      </div>
      <div className="frameworks">
        <img src="./images/skills/react.png" alt="React.js" />
        <img src="./images/skills/vue.png" alt="Vue.js" />
        <img src="./images/skills/firebase.png" alt="Firebase" />
      </div>
      <div className="tools">
        <img src="./images/skills/git.png" alt="Git" />
        <img src="./images/skills/vsc.png" alt="Visual Studio Code" />
        <img src="./images/skills/ij.png" alt="IntelliJ IDEA" />
        <img src="./images/skills/figma.png" alt="Figma" />
      </div>
      <Footer />
    </div>
  );
};

export default Skills;
