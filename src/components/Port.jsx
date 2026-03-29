import React from "react";

import port01 from "../assets/img/port01.jpg";
import port02 from "../assets/img/port02.jpg";
import port03 from "../assets/img/port03.jpg";
import port04 from "../assets/img/port04.jpg";
import port05 from "../assets/img/port05.jpg";
import port06 from "../assets/img/port06.jpg";
import port07 from "../assets/img/port07.jpg";
import port08 from "../assets/img/port08.jpg";
import port09 from "../assets/img/port09.jpg";
import port10 from "../assets/img/port10.jpg";

const portText = [
  {
    num: "01",
    title: "히말라야 산맥",
    desc: " 히말라야 산맥은 세계에서 가장 높은 산들이 모여 있는 지역입니다. 에베레스트를 비롯한 수많은 봉우리가 이곳에 자리하고 있습니다.히말라야 산맥은 세계에서 가장 높은 산들이 모여 있는 지역입니다. 에베레스트를 비롯한 수많은 봉우리가 이곳에 자리하고 있습니다.히말라야 산맥은 세계에서 가장 높은 산들이 모여 있는 지역입니다.에베레스트를 비롯한 수많은 봉우리가 이곳에 자리하고 있습니다.",
    img: port01,
    code: "https://www.gdweb.co.kr/main",
    view: "https://www.gdweb.co.kr/main",
    name: "히말라야",
  },
  {
    num: "02",
    title: "알프스 산맥",
    desc: " 알프스 산맥은 유럽의 자연과 문화를 대표하는 산맥으로, 오랫동안 사람들의 삶과 여행의 중심이되어왔습니다.알프스 산맥은 유럽의 자연과 문화를 대표하는 산맥으로, 오랫동안 사람들의 삶과 여행의 중심이 되어왔습니다.알프스 산맥은 유럽의 자연과 문화를 대표하는 산맥으로, 오랫동안 사람들의 삶과 여행의 중심이 되어왔습니다.",
    img: port02,
    code: "https://www.gdweb.co.kr/main",
    view: "https://www.gdweb.co.kr/main",
    name: "알프스",
  },
  {
    num: "03",
    title: "로키 산맥",
    desc: " 로키 산맥은 북아메리카 서부를 따라 길게 이어지며 웅장한 자연 경관을 만들어내는 대표적인 산맥입니다.로키 산맥은 북아메리카 서부를 따라 길게 이어지며 웅장한 자연 경관을 만들어내는 대표적인 산맥입니다.로키 산맥은 북아메리카 서부를 따라 길게 이어지며 웅장한 자연 경관을 만들어내는 대표적인 산맥입니다.로키 산맥은 북아메리카 서부를 따라 길게 이어지며 웅장한 자연 경관을 만들어내는 대표적인 산맥입니다.",
    img: port03,
    code: "https://www.gdweb.co.kr/main",
    view: "https://www.gdweb.co.kr/main",
    name: "로키",
  },
  {
    num: "04",
    title: "아틀라스 산맥",
    desc: " 아틀라스 산맥은 북아프리카를 가로지르는 거대한 산맥으로, 사막과 초원을 나누는 중요한 자연 경계 역할을 합니다.아틀라스 산맥은 북아프리카를 가로지르는 거대한 산맥으로, 사막과 초원을 나누는 중요한 자연 경계 역할을 합니다.아틀라스 산맥은 북아프리카를 가로지르는 거대한 산맥으로, 사막과 초원을 나누는 중요한 자연 경계 역할을 합니다.아틀라스 산맥은 북아프리카를 가로지르는 거대한 산맥으로, 사막과 초원을 나누는 중요한 자연 경계 역할을 합니다.",
    img: port04,
    code: "https://www.gdweb.co.kr/main",
    view: "https://www.gdweb.co.kr/main",
    name: "아틀라스",
  },
  {
    num: "05",
    title: "히말라야 산맥",
    desc: " 히말라야 산맥은 세계에서 가장 높은 산들이 모여 있는 지역입니다. 에베레스트를 비롯한 수많은 봉우리가 이곳에 자리하고 있습니다.히말라야 산맥은 세계에서 가장 높은 산들이 모여 있는 지역입니다. 에베레스트를 비롯한 수많은 봉우리가 이곳에 자리하고 있습니다.히말라야 산맥은 세계에서 가장 높은 산들이 모여 있는 지역입니다.에베레스트를 비롯한 수많은 봉우리가 이곳에 자리하고 있습니다.",
    img: port05,
    code: "https://www.gdweb.co.kr/main",
    view: "https://www.gdweb.co.kr/main",
    name: "히말라야",
  },
  {
    num: "06",
    title: "알프스 산맥",
    desc: " 알프스 산맥은 유럽의 자연과 문화를 대표하는 산맥으로, 오랫동안 사람들의 삶과 여행의 중심이되어왔습니다.알프스 산맥은 유럽의 자연과 문화를 대표하는 산맥으로, 오랫동안 사람들의 삶과 여행의 중심이 되어왔습니다.알프스 산맥은 유럽의 자연과 문화를 대표하는 산맥으로, 오랫동안 사람들의 삶과 여행의 중심이 되어왔습니다.",
    img: port06,
    code: "https://www.gdweb.co.kr/main",
    view: "https://www.gdweb.co.kr/main",
    name: "알프스",
  },
  {
    num: "07",
    title: "로키 산맥",
    desc: " 로키 산맥은 북아메리카 서부를 따라 길게 이어지며 웅장한 자연 경관을 만들어내는 대표적인 산맥입니다.로키 산맥은 북아메리카 서부를 따라 길게 이어지며 웅장한 자연 경관을 만들어내는 대표적인 산맥입니다.로키 산맥은 북아메리카 서부를 따라 길게 이어지며 웅장한 자연 경관을 만들어내는 대표적인 산맥입니다.로키 산맥은 북아메리카 서부를 따라 길게 이어지며 웅장한 자연 경관을 만들어내는 대표적인 산맥입니다.",
    img: port07,
    code: "https://www.gdweb.co.kr/main",
    view: "https://www.gdweb.co.kr/main",
    name: "로키",
  },
  {
    num: "08",
    title: "아틀라스 산맥",
    desc: " 아틀라스 산맥은 북아프리카를 가로지르는 거대한 산맥으로, 사막과 초원을 나누는 중요한 자연 경계 역할을 합니다.아틀라스 산맥은 북아프리카를 가로지르는 거대한 산맥으로, 사막과 초원을 나누는 중요한 자연 경계 역할을 합니다.아틀라스 산맥은 북아프리카를 가로지르는 거대한 산맥으로, 사막과 초원을 나누는 중요한 자연 경계 역할을 합니다.아틀라스 산맥은 북아프리카를 가로지르는 거대한 산맥으로, 사막과 초원을 나누는 중요한 자연 경계 역할을 합니다.",
    img: port08,
    code: "https://www.gdweb.co.kr/main",
    view: "https://www.gdweb.co.kr/main",
    name: "아틀라스",
  },
  {
    num: "09",
    title: "알프스 산맥",
    desc: " 알프스 산맥은 유럽의 자연과 문화를 대표하는 산맥으로, 오랫동안 사람들의 삶과 여행의 중심이되어왔습니다.알프스 산맥은 유럽의 자연과 문화를 대표하는 산맥으로, 오랫동안 사람들의 삶과 여행의 중심이 되어왔습니다.알프스 산맥은 유럽의 자연과 문화를 대표하는 산맥으로, 오랫동안 사람들의 삶과 여행의 중심이 되어왔습니다.",
    img: port09,
    code: "https://www.gdweb.co.kr/main",
    view: "https://www.gdweb.co.kr/main",
    name: "알프스",
  },
  {
    num: "10",
    title: "로키 산맥",
    desc: " 로키 산맥은 북아메리카 서부를 따라 길게 이어지며 웅장한 자연 경관을 만들어내는 대표적인 산맥입니다.로키 산맥은 북아메리카 서부를 따라 길게 이어지며 웅장한 자연 경관을 만들어내는 대표적인 산맥입니다.로키 산맥은 북아메리카 서부를 따라 길게 이어지며 웅장한 자연 경관을 만들어내는 대표적인 산맥입니다.로키 산맥은 북아메리카 서부를 따라 길게 이어지며 웅장한 자연 경관을 만들어내는 대표적인 산맥입니다.",
    img: port10,
    code: "https://www.gdweb.co.kr/main",
    view: "https://www.gdweb.co.kr/main",
    name: "로키",
  },
];

const Port = () => {
  return (
    <section id="port">
      <div className="port_inner">
        <h2 className="port_title">Mountain Ranges</h2>
        <div className="port_wrap">
          {portText.map((port, key) => (
            <article className={`port_item p${key + 1}`} key={key}>
              <span className="num">{port.num}.</span>
              <a href={port.code} target="_blank" className="img">
                <img src={port.img} alt={port.name} />
              </a>
              <h3 className="title">{port.title}</h3>
              <p className="desc">{port.desc}</p>
              <a href={port.view} target="_blank" className="site">
                자세히 보기
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Port;
