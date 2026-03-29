import React from "react";

import about from "../assets/img/about.jpg";
import { introText } from "../constants";

const Intro = () => {
  return (
    <section id="intro">
      <div className="intro_inner">
        <div className="intro_title">{introText.title}</div>
        <div className="intro_lines">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        <div className="intro_text">
          <div className="text">
            <div>{introText.decs[0]}</div>
            <div>{introText.decs[1]}</div>
          </div>
          <div className="img">
            <img src={about} alt="" />
          </div>
        </div>
        <div className="intro_lines bottom">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </section>
  );
};

export default Intro;
