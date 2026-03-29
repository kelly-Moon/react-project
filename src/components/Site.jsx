import React from "react";
import site01 from "../assets/img/site01.jpg";
import site02 from "../assets/img/site02.jpg";
import site03 from "../assets/img/site03.jpg";
import site04 from "../assets/img/site04.jpg";

const siteText = [
  {
    img: site01,
    text: ["Mount Everest", "Nepal Tibe"],
    title: "지구에서 가장 높은 산",
    site: "https://www.naver.com/",
    view: "https://www.daum.net/",
    info: ["Great Mountains of the World", "Mountains Connect Nature and People", "Why Mountains Matter"],
  },
  {
    img: site02,
    text: ["Mont Blanc", "rance Italy"],
    title: "알프스 산맥의 최고봉",
    site: "https://www.naver.com/",
    view: "https://www.daum.net/",
    info: ["Great Mountains of the World", "Mountains Connect Nature and People", "Why Mountains Matter"],
  },
  {
    img: site03,
    text: ["The Andes", "South America"],
    title: "세계에서 가장 긴 산맥",
    site: "https://www.naver.com/",
    view: "https://www.daum.net/",
    info: ["Great Mountains of the World", "Mountains Connect Nature and People", "Why Mountains Matter"],
  },
  {
    img: site04,
    text: ["Mount Fuji", "Japan"],
    title: "완벽한 원뿔 형태로 유명한 화산",
    site: "https://www.naver.com/",
    view: "https://www.daum.net/",
    info: ["Great Mountains of the World", "Mountains Connect Nature and People", "Why Mountains Matter"],
  },
];

const Site = () => {
  return (
    <section id="site">
      <div className="site_inner">
        <h2 className="site_title">Great Mountains</h2>
        <div className="site_wrap">
          {siteText.map((site, key) => (
            <article className={`site_item s${key + 1}`} key={key} style={{ backgroundImage: `url(${site.img})` }}>
              <span className="num">{key + 1}.</span>
              <div className="text">
                <div>{site.text[0]}</div>
                <div>{site.text[1]}</div>
              </div>
              <h3 className="title">{site.title}</h3>
              <div className="btn">
                <a href={site.site}>site</a>
                <a href={site.view}>view</a>
              </div>
              <div className="info">
                <span>{site.info[0]}</span>
                <span>{site.info[1]}</span>
                <span>{site.info[2]}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Site;
